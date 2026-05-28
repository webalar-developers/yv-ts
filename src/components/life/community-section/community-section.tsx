import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import {
	GalleryModal,
	type MediaItemType,
} from "@/components/shared/interactive-bento-gallery/interactive-bento-gallery";
import { cn } from "@/lib/utils";

const cardItems = [
	{
		label: "Memories of Youthville",
		images: ["/shared/jpg/1.jpg", "/shared/jpg/2.jpg", "/shared/jpg/3.jpg"],
	},
	{
		images: ["/shared/jpg/2.jpg", "/shared/jpg/4.jpg", "/shared/jpg/1.jpg"],
	},
	{
		images: ["/shared/jpg/3.jpg", "/shared/jpg/1.jpg", "/shared/jpg/2.jpg"],
	},
	{
		images: ["/shared/jpg/4.jpg", "/shared/jpg/3.jpg", "/shared/jpg/1.jpg"],
	},
	{
		images: ["/shared/jpg/2.jpg", "/shared/jpg/3.jpg", "/shared/jpg/4.jpg"],
	},
];

const allMediaItems: MediaItemType[] = cardItems.flatMap((card, cardIdx) =>
	card.images.map((img, imgIdx) => ({
		id: cardIdx * 10 + imgIdx,
		type: "image",
		title: card.label as string,
		desc: "",
		url: img,
		span: "",
	})),
);

const MOBILE_H = "";
const DESKTOP_H = "md:h-[650px]";

function Card({
	item,
	offset = 0,
	onImageClick,
}: {
	item: (typeof cardItems)[0];
	offset?: number;
	onImageClick: (mediaItem: MediaItemType) => void;
}) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		let timer: ReturnType<typeof setInterval>;
		const delay = setTimeout(() => {
			timer = setInterval(() => {
				setIndex((c) => (c + 1) % item.images.length);
			}, 10000);
		}, offset);
		return () => {
			clearTimeout(delay);
			clearInterval(timer);
		};
	}, [item.images.length, offset]);

	const handleClick = () => {
		const cardIdx = cardItems.indexOf(item);
		const mediaItem = allMediaItems.find((m) => m.id === cardIdx * 10 + index);
		if (mediaItem) onImageClick(mediaItem);
	};

	return (
		<button
			type="button"
			className="relative block h-full w-full overflow-hidden rounded-xl border-none bg-transparent p-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yv-orange"
			onClick={handleClick}
		>
			<AnimatePresence initial={false} mode="wait">
				<motion.div
					key={index}
					initial={{ opacity: 0, scale: 0.92 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.92 }}
					transition={{ duration: 1.4, ease: "easeInOut" }}
					className="absolute inset-0"
				>
					<img
						src={item.images[index]}
						alt={item.label}
						className="h-full w-full object-cover"
					/>
					{item.label && (
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
					)}
					{item.label && (
						<div className="absolute bottom-4 left-4">
							<div className="mb-1.5 h-0.5 w-8 bg-pink-500" />
							<p className="text-base font-semibold text-white">{item.label}</p>
						</div>
					)}
				</motion.div>
			</AnimatePresence>
		</button>
	);
}

function ImageGrid({
	onImageClick,
}: {
	onImageClick: (mediaItem: MediaItemType) => void;
}) {
	return (
		<div className="grid h-auto gap-4 grid-cols-1 md:h-full md:grid-cols-[2fr_1fr_1fr] md:grid-rows-[317px_317px]">
			<div className="group relative row-span-1 h-64 overflow-hidden rounded-xl md:row-span-2 md:h-auto">
				<Card item={cardItems[0]} offset={0} onImageClick={onImageClick} />
			</div>
			{cardItems.slice(1, 5).map((item) => (
				<div
					key={item.label}
					className="group relative h-48 overflow-hidden rounded-xl md:h-auto"
				>
					<Card item={item} offset={0} onImageClick={onImageClick} />
				</div>
			))}
		</div>
	);
}

export function CommunitySectionLife() {
	const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);

	return (
		<section className="bg-white px-6 py-5 md:py-10">
			<div className="mx-auto">
				<div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
					<div className="text-center md:text-left">
						<div className="mx-auto mb-3 h-1 w-10 rounded-sm bg-yv-orange md:mx-0" />
						<h2 className="font-gilda text-[26px] font-normal text-[#1f1f1f] sm:text-[32px] md:text-4xl">
							A Community That Feels Alive
						</h2>
						<p className="mt-2 text-[16px] text-[#666]">
							Events, shared routines, and everyday moments that make the stay
							memorable.
						</p>
					</div>
					<a
						href="https://www.instagram.com/youthvillehostels/"
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-md bg-yv-orange px-8 py-4 text-[14px] font-bold text-white transition-colors hover:bg-yv-orange/90"
					>
						Join our community
					</a>
				</div>

				<div className={cn("relative", MOBILE_H, DESKTOP_H)}>
					<ImageGrid onImageClick={setSelectedItem} />
				</div>
			</div>

			<AnimatePresence>
				{selectedItem && (
					<GalleryModal
						selectedItem={selectedItem}
						isOpen={true}
						onClose={() => setSelectedItem(null)}
						setSelectedItem={setSelectedItem}
						mediaItems={allMediaItems}
					/>
				)}
			</AnimatePresence>
		</section>
	);
}
