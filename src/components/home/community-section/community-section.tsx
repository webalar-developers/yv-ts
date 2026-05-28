import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const cardItems = [
	{
		label: "Memories of Youthville",
		images: [
			"/home/community/events.jpg",
			"/home/community/community.jpg",
			"/home/community/fun-activity.jpg",
		],
	},
	{
		images: [
			"/home/community/live-sports.jpg",
			"/home/community/trusted.jpg",
			"/home/community/group-photo.jpg",
		],
	},
	{
		images: [
			"/home/community/comfort.jpg",
			"/home/community/daily-meals.jpg",
			"/home/community/modern-living.jpg",
		],
	},
	{
		images: [
			"/home/community/empowerment.jpg",
			"/home/community/one-price.jpg",
			"/home/community/modern-living.jpg",
		],
	},
	{
		images: [
			"/home/community/christmas.jpg",
			"/home/community/ganpati.jpg",
			"/home/community/fun-activity.jpg",
		],
	},
];

const MOBILE_H = "";
const DESKTOP_H = "md:h-[650px]";

function Card({
	item,
	offset = 0,
}: {
	item: (typeof cardItems)[0];
	offset?: number;
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

	return (
		<div className="relative h-full overflow-hidden rounded-xl">
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
						loading="lazy"
						decoding="async"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
						{item.label &&	<div className="absolute bottom-4 left-4">
						<div className="mb-1.5 h-0.5 w-8 bg-pink-500" />
						<p className="text-base font-semibold text-white">{item.label}</p>
					</div>}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

function ImageGrid() {
	return (
		<div className="grid h-auto gap-4 grid-cols-1 md:h-full md:grid-cols-[2fr_1fr_1fr] md:grid-rows-[317px_317px]">
			<div className="group relative row-span-1 h-64 overflow-hidden rounded-xl md:row-span-2 md:h-auto">
				<Card item={cardItems[0]} offset={0} />
			</div>
			{cardItems.slice(1, 5).map((item) => (
				<div
					key={item.label}
					className="group relative h-48 overflow-hidden rounded-xl md:h-auto"
				>
					<Card item={item} offset={0} />
				</div>
			))}
		</div>
	);
}

export function CommunitySection() {
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
						className="rounded-md bg-yv-orange px-8 py-4 text-[14px] font-bold  text-white transition-colors hover:bg-yv-orange/90"
					>
						Join our community
					</a>
				</div>

				<div className={cn("relative", MOBILE_H, DESKTOP_H)}>
					<ImageGrid />
				</div>
			</div>
		</section>
	);
}
