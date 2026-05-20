#!/usr/bin/env node
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const AVIF_QUALITY = 50;
const PNG_COMPRESSION = 9;
const SKIP_IF_SMALLER_THAN = 200 * 1024; // 200 KB — already-small files don't need re-encoding

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");

const SUPPORTED = new Set([".jpg", ".jpeg", ".png", ".avif"]);

async function* walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) {
			yield* walk(full);
		} else if (entry.isFile()) {
			yield full;
		}
	}
}

function fmt(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function optimizeOne(path) {
	const ext = extname(path).toLowerCase();
	if (!SUPPORTED.has(ext)) return null;

	const before = (await stat(path)).size;
	if (before < SKIP_IF_SMALLER_THAN) return { path, before, after: before, skipped: true };

	const image = sharp(path, { failOn: "none" });
	const meta = await image.metadata();
	const needsResize = meta.width && meta.width > MAX_WIDTH;

	let pipeline = image.rotate(); // honor EXIF orientation, then strip
	if (needsResize) pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });

	if (ext === ".jpg" || ext === ".jpeg") {
		pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
	} else if (ext === ".png") {
		pipeline = pipeline.png({ compressionLevel: PNG_COMPRESSION });
	} else if (ext === ".avif") {
		pipeline = pipeline.avif({ quality: AVIF_QUALITY, effort: 6 });
	}

	const tmp = join(dirname(path), `.${basename(path)}.opt-tmp`);
	await pipeline.toFile(tmp);

	const after = (await stat(tmp)).size;
	if (after >= before) {
		await unlink(tmp);
		return { path, before, after: before, skipped: true };
	}

	await rename(tmp, path);
	return { path, before, after, skipped: false };
}

async function main() {
	const results = [];
	let totalBefore = 0;
	let totalAfter = 0;

	console.log(`Scanning ${PUBLIC_DIR}…`);

	for await (const file of walk(PUBLIC_DIR)) {
		try {
			const r = await optimizeOne(file);
			if (!r) continue;
			results.push(r);
			totalBefore += r.before;
			totalAfter += r.after;
			if (!r.skipped) {
				const pct = ((1 - r.after / r.before) * 100).toFixed(0);
				console.log(`  ${fmt(r.before).padStart(9)} → ${fmt(r.after).padStart(9)}  -${pct}%  ${file.slice(PUBLIC_DIR.length + 1)}`);
			}
		} catch (err) {
			console.error(`  ! failed: ${file} — ${err.message}`);
		}
	}

	const saved = totalBefore - totalAfter;
	const pct = totalBefore ? ((saved / totalBefore) * 100).toFixed(1) : "0";
	console.log("");
	console.log(`Processed: ${results.length} files`);
	console.log(`Before:    ${fmt(totalBefore)}`);
	console.log(`After:     ${fmt(totalAfter)}`);
	console.log(`Saved:     ${fmt(saved)} (${pct}%)`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
