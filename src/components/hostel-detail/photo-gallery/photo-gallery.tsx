import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

export function PhotoGallery({
	gallery,
	name,
}: {
	gallery: string[];
	name: string;
}) {
	const visible = gallery.slice(1, 5);
	const remaining = Math.max(gallery.length - 5, 0);

	const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);
	const isOpen = lightboxIndex !== null;

	const open = (index: number) => setLightboxIndex(index);
	const close = React.useCallback(() => setLightboxIndex(null), []);

	const next = React.useCallback(() => {
		setLightboxIndex((prev) =>
			prev === null ? prev : (prev + 1) % gallery.length,
		);
	}, [gallery.length]);

	const prev = React.useCallback(() => {
		setLightboxIndex((p) =>
			p === null ? p : (p - 1 + gallery.length) % gallery.length,
		);
	}, [gallery.length]);

	React.useEffect(() => {
		if (!isOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") close();
			else if (e.key === "ArrowRight") next();
			else if (e.key === "ArrowLeft") prev();
		};
		window.addEventListener("keydown", onKey);
		const original = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = original;
		};
	}, [isOpen, close, next, prev]);

	return (
		<>
			<button
				type="button"
				onClick={() => open(0)}
				className="block h-[200px] w-full cursor-pointer overflow-hidden rounded-sm bg-white sm:h-[280px] md:h-[400px] lg:h-[540px]"
			>
				<img
					src={gallery[0]}
					alt={name}
					className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
					loading="lazy"
					decoding="async"
				/>
			</button>

			<div className="grid grid-cols-2 gap-3 md:grid-cols-2">
				{visible.map((image, index) => {
					const isLast = index === visible.length - 1 && remaining > 0;
					return (
						<button
							key={image}
							type="button"
							onClick={() => open(index + 1)}
							className="relative block h-[100px] w-full cursor-pointer overflow-hidden rounded-none bg-white sm:h-[140px] md:h-[196px] lg:h-[264px]"
						>
							<img
								src={image}
								alt={`${name} ${index + 2}`}
								className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
								loading="lazy"
								decoding="async"
							/>
							{isLast ? (
								<div className="absolute inset-0 flex items-center justify-center bg-black/55 text-white transition-colors hover:bg-black/65">
									<span className="text-sm font-semibold tracking-wide md:text-base">
										View {remaining} {remaining === 1 ? "image" : "images"}
									</span>
								</div>
							) : null}
						</button>
					);
				})}
			</div>

			<AnimatePresence>
				{isOpen && lightboxIndex !== null && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={close}
							className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm"
						/>

						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							className="fixed inset-0 z-[101] flex flex-col items-center justify-center p-4 md:p-8"
						>
							<button
								type="button"
								onClick={close}
								aria-label="Close gallery"
								className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-md bg-yv-orange text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
							>
								<X className="size-6" />
							</button>

							<div className="absolute top-4 left-4 z-10 rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-white backdrop-blur">
								{lightboxIndex + 1} / {gallery.length}
							</div>

							<button
								type="button"
								onClick={prev}
								aria-label="Previous image"
								className="absolute left-2 z-10 flex size-12 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25 md:left-6"
							>
								<ChevronLeft className="size-6" />
							</button>

							<button
								type="button"
								onClick={next}
								aria-label="Next image"
								className="absolute right-2 z-10 flex size-12 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25 md:right-6"
							>
								<ChevronRight className="size-6" />
							</button>

							<div
								onClick={(e) => e.stopPropagation()}
								onKeyDown={(e) => {
									if (e.key === "Escape") {
										e.stopPropagation();
									}
								}}
								role="dialog"
								aria-label="Image gallery viewer"
								className="flex w-full max-w-5xl flex-col items-center gap-4"
							>
								<motion.img
									key={lightboxIndex}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									src={gallery[lightboxIndex]}
									alt={`${name} ${lightboxIndex + 1}`}
									className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain"
								/>

								<div className="flex w-full gap-2 overflow-x-auto px-2 pb-2">
									{gallery.map((image, index) => (
										<button
											key={image}
											type="button"
											onClick={() => setLightboxIndex(index)}
											className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transition-all ${
												lightboxIndex === index
													? "opacity-100 ring-2 ring-yv-orange"
													: "opacity-60 hover:opacity-100"
											}`}
										>
											<img
												src={image}
												alt={`${name} thumbnail ${index + 1}`}
												className="h-full w-full object-cover"
												loading="lazy"
												decoding="async"
											/>
										</button>
									))}
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
