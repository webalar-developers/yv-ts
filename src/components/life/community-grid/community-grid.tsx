import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
	[
		{ image: "/shared/jpg/1.jpg", label: "Community Moments" },
		{ image: "/shared/jpg/2.jpg", label: "Ganpati Festival" },
		{ image: "/shared/jpg/3.jpg", label: "Christmas Celebration" },
		{ image: "/shared/jpg/4.jpg", label: "Fun Activities" },
		{ image: "/shared/jpg/1.jpg", label: "Life at Youthville" },
	],
	[
		{ image: "/shared/jpg/4.jpg", label: "Outdoor Events" },
		{ image: "/shared/jpg/1.jpg", label: "Hostel Life" },
		{ image: "/shared/jpg/2.jpg", label: "Cultural Night" },
		{ image: "/shared/jpg/3.jpg", label: "Birthday Bash" },
		{ image: "/shared/jpg/2.jpg", label: "Deepavali" },
	],
];

// mobile: h-64 + 4×h-48 + 4×gap-4 = 256 + 768 + 64 = 1088px
// desktop: 317 + 317 + gap-4 = 650px
const MOBILE_H = "h-[1088px]";
const DESKTOP_H = "md:h-[650px]";

function PhotoCard({
	image,
	label,
	className,
}: {
	image: string;
	label: string;
	className?: string;
}) {
	return (
		<div
			className={cn("group relative overflow-hidden rounded-3xl", className)}
		>
			<img
				src={image}
				alt={label}
				className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
			<p className="absolute bottom-4 left-4 font-medium text-white">{label}</p>
		</div>
	);
}

function SlideGrid({ items }: { items: (typeof slides)[0] }) {
	return (
		<div className="grid h-full grid-cols-1 gap-4 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-[317px_317px]">
			{/* Large card — 2 rows on desktop */}
			<PhotoCard
				image={items[0].image}
				label={items[0].label}
				className="row-span-1 h-64 md:row-span-2 md:h-auto [&_p]:text-lg [&_p]:md:text-2xl [&_p]:md:bottom-6 [&_p]:md:left-6"
			/>
			{items.slice(1).map((item) => (
				<PhotoCard
					key={`${item.image}-${item.label}`}
					image={item.image}
					label={item.label}
					className="h-48 md:h-auto"
				/>
			))}
		</div>
	);
}

export function CommunityGrid() {
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState(1);

	useEffect(() => {
		const timer = setInterval(() => {
			setDirection(1);
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section className="bg-white px-6 pt-16 pb-0 md:px-10 md:pt-10 lg:px-10">
			<div className="mx-auto">
				{/* Header */}
				<div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
					<h2 className="font-gilda text-[36px] leading-tight text-yv-dark-purple md:text-[60px]">
						Live the Youthville <span className="text-yv-orange">Life</span>
					</h2>
					<Button
						variant="yv-orange"
						className="rounded-none px-10 py-9 text-[18px] font-medium"
						onClick={() =>
							window.open(
								"https://www.instagram.com/youthvillehostels/",
								"_blank",
							)
						}
					>
						Join a Community Event
					</Button>
				</div>

				{/* Fixed-height container — both slides position absolute inside, no reflow */}
				<div
					className={cn("relative w-full overflow-hidden", MOBILE_H, DESKTOP_H)}
				>
					<AnimatePresence initial={false} custom={direction}>
						<motion.div
							key={current}
							custom={direction}
							variants={{
								enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%" }),
								center: { x: 0 },
								exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%" }),
							}}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
							className="absolute inset-0"
						>
							<SlideGrid items={slides[current]} />
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Footer */}
				<div className="py-10 text-center md:py-10">
					<p className="font-gilda text-[32px] leading-tight text-yv-dark-purple md:text-[48px] lg:text-[56px]">
						At Youthville, you don't live alone —{" "}
						<span className="text-yv-orange">you live</span>
					</p>
					<p className="font-gilda text-[32px] leading-tight text-yv-dark-purple md:text-[48px] lg:text-[56px]">
						<span className="text-yv-orange">together,</span>{" "}
						<img
							src="/life/png/unforgettably.png"
							alt="unforgettably"
							className="ml-2 inline-block h-[60px] align-middle md:h-[80px] lg:h-[120px]"
						/>
					</p>
				</div>
			</div>
		</section>
	);
}
