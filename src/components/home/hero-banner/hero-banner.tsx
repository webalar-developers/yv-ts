import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

const HERO_VIDEO_SRC =
	"https://www.youtube.com/embed/LDik1LtH6MQ?autoplay=1&mute=1&loop=1&playlist=LDik1LtH6MQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1";

export function HeroBanner() {
	const { ref, isInView } = useInView<HTMLElement>({
		rootMargin: "300px",
		triggerOnce: true,
	});
	const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

	useEffect(() => {
		if (isInView) {
			setShouldLoadVideo(true);
		}
	}, [isInView]);

	return (
		<section
			ref={ref}
			className="relative h-[80vh] min-h-[500px] w-full overflow-hidden"
		>
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('/home/jpg/hero-poster.jpg')",
				}}
			/>
			{shouldLoadVideo && (
				<iframe
					src={HERO_VIDEO_SRC}
					title="Youthville hero video"
					className="absolute inset-0 h-full w-full scale-[1.2] object-cover pointer-events-none"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					referrerPolicy="strict-origin-when-cross-origin"
					loading="lazy"
					allowFullScreen
				/>
			)}
			<div className="absolute inset-0 bg-black/50" />

			<div className="relative flex h-full flex-col items-center justify-center px-6 text-center md:px-12 lg:px-20">
				<img
					src="/home/png/brand.png"
					alt="live unforgettably"
					className="h-auto w-[250px] invert md:w-[400px] lg:w-[500px]"
					fetchPriority="high"
				/>
			</div>

			<a   href="#feature-section" className="absolute inset-x-0 bottom-6 flex justify-center">
				<div className="absolute right-8 bottom-8 flex size-12 animate-bounce items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg">
				<ArrowDown className="size-5" />
			</div>
			</a>
		</section>
	);
}
