import { useEffect, useState } from "react";

const images = [
	"/life/png/collage-1.jpg",
	"/life/png/collage-2.jpg",
	"/life/png/collage-3.jpg",
	"/life/png/collage-4.jpg",
	"/life/png/collage-5.jpg",
];

export function HeroBannerAbout() {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const id = window.setInterval(() => {
			setActiveIndex((i) => (i + 1) % images.length);
		}, 4000);
		return () => window.clearInterval(id);
	}, []);

	return (
		<section className="relative m-2 h-[55vh] min-h-[320px] overflow-hidden rounded-lg sm:m-5 sm:h-[65vh] md:min-h-[440px] lg:min-h-[560px]">
			<div className="absolute inset-0">
				{images.map((src, i) => (
					<img
						key={src}
						src={src}
						alt="Youthville About banner"
						className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
							i === activeIndex ? "opacity-100" : "opacity-0"
						}`}
						loading={i === 0 ? "eager" : "lazy"}
						decoding="async"
					/>
				))}
				<div className="absolute inset-0 bg-black/50" />
				<div
					className="absolute inset-0"
					style={{
						background: "linear-gradient(135deg, #E8612D22, #2D1B3D88)",
					}}
				/>
			</div>

			<div className="relative flex h-full flex-col items-start justify-center px-6 md:px-16 lg:px-24">
				<div className="max-w-4xl leading-tight">
					<h1 className="inline font-gilda text-[28px] text-white sm:text-[40px] md:text-[56px] lg:text-[68px]">
						We are redefining how the Youth of India{" "}
					</h1>
					<img
						src="/about/live-text.png"
						alt="live unforgettably"
						className="inline-block align-middle w-37.5 sm:w-52.5 md:w-72.5 lg:w-92.5"
					/>
				</div>
			</div>
		</section>
	);
}
