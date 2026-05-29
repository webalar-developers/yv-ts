import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { LazyVideo } from "@/components/ui/lazy-video";
import { videoItems } from "./video-gallery.data";

export function VideoGallery() {
	const [selectedVideo, setSelectedVideo] = useState<
		(typeof videoItems)[0] | null
	>(null);

	return (
		<section className="bg-white py-12 md:py-20">
			<div className="mb-12 text-center">
				<div className="mx-auto mb-3 h-[2px] w-10 rounded-sm bg-[#ff5a3c]" />
				<h2 className="font-gilda text-[26px] font-normal leading-tight text-gray-900 sm:text-[34px] md:text-[40px] lg:text-5xl">
					Unforgettable Experience, Countless Memories
				</h2>
				<p className="mt-2 font-gilda text-[26px] font-normal leading-tight text-gray-900 sm:text-[34px] md:text-[40px] lg:text-5xl">
					One Click Away
				</p>
			</div>

			<div className="w-full">
				<Dialog
					open={selectedVideo !== null}
					onOpenChange={(open) => !open && setSelectedVideo(null)}
				>
					<InfiniteSlider gap={24} speed={40} className="py-4">
						{videoItems.map((item) => (
							<VideoCard
								key={item.videoUrl || item.image}
								item={item}
								onClick={() => setSelectedVideo(item)}
							/>
						))}
					</InfiniteSlider>

					<DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none ring-0">
						{selectedVideo && (
							<div className="relative aspect-[9/16] w-full max-w-[400px] mx-auto overflow-hidden rounded-md bg-black">
								<video
									src={selectedVideo.videoUrl}
									autoPlay
									controls
									className="h-full w-full object-contain"
								>
									<track kind="captions" />
								</video>
							</div>
						)}
					</DialogContent>
				</Dialog>
			</div>
		</section>
	);
}

function VideoCard({
	item,
	onClick,
}: {
	item: (typeof videoItems)[0];
	onClick: () => void;
}) {
	const [hovered, setHovered] = useState(false);

	return (
		<button
			type="button"
			className="group relative aspect-[9/16] w-[280px] shrink-0 cursor-pointer overflow-hidden rounded-md shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					onClick();
				}
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{item.videoUrl ? (
				<LazyVideo
					src={item.videoUrl}
					poster={item.image}
					loop
					muted
					playsInline
					paused={!hovered}
					className="absolute inset-0 h-full w-full"
				/>
			) : (
				<img
					src={item.image}
					alt={item.alt}
					className="h-full w-full object-cover"
					loading="lazy"
					decoding="async"
				/>
			)}

			<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />

			{!hovered && (
				<div className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-yv-orange">
					<Play
						className="ml-1 size-7 text-white transition-colors"
						fill="currentColor"
					/>
				</div>
			)}

			{item.reelUrl && (
				<div className="absolute bottom-6 left-0 w-full px-6 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
					<p className="text-sm font-medium tracking-wide text-white drop-shadow-md">
						VIEW ON INSTAGRAM
					</p>
				</div>
			)}
		</button>
	);
}
