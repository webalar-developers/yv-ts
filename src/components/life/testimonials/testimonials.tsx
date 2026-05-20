import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { LazyVideo } from "@/components/ui/lazy-video";

const videoItems = [
	{ image: "", alt: "Parent Review 1", videoUrl: "/life/mp4/i1.mp4" },
	{ image: "", alt: "Parent Review 2", videoUrl: "/life/mp4/i2.mp4" },
	{ image: "", alt: "Parent Review 3", videoUrl: "/life/mp4/i3.mp4" },
	{ image: "", alt: "Parent Review 4", videoUrl: "/life/mp4/i4.mp4" },
];

const reviews = [
	{
		quote:
			"The security protocols at Youthville are world-class. As a parent, knowing my daughter is in such a professional environment gives me peace of mind.",
		author: "Mr. Krishnan, Parent",
	},
	{
		quote:
			"Best decision for my hostel life! The staff is friendly, the food is actually good, and the rooms are just like the photos.",
		author: "Ananya P., Resident",
	},
];

type VideoItem = (typeof videoItems)[0];
function VideoCard({
	item,
	onClick,
}: {
	item: VideoItem;
	onClick: () => void;
}) {
	return (
		<button
			type="button"
			className="group relative block aspect-[9/16] w-[220px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border-none bg-transparent p-0 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yv-orange"
			onClick={onClick}
		>
			{item.videoUrl ? (
				<LazyVideo
					src={item.videoUrl}
					poster={item.image}
					loop
					muted
					playsInline
					className="h-full w-full"
				/>
			) : (
				<img
					src={item.image}
					alt={item.alt}
					className="h-full w-full object-cover"
				/>
			)}
			<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
			<div className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 shadow-2xl backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-yv-orange">
				<Play className="ml-1 size-6 text-white" fill="currentColor" />
			</div>
		</button>
	);
}

export function Testimonials() {
	const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

	return (
		<section className="bg-white px-6 py-16 md:px-10 md:py-20 lg:px-10">
			<div className="flex flex-col gap-12 lg:flex-row lg:items-center">
				{/* Left: 70% — infinite video slider */}
				<div className="w-full overflow-hidden lg:w-[70%]">
					<div className="mb-8">
						<div className="mb-3 h-1 w-10 rounded-sm bg-yv-orange" />
						<h2 className="font-gilda text-[36px] font-normal text-yv-dark-purple md:text-[48px]">
							What Parents & Students Say
						</h2>
					</div>

					<Dialog
						open={selectedVideo !== null}
						onOpenChange={(open) => !open && setSelectedVideo(null)}
					>
						<InfiniteSlider gap={16} speed={40} className="py-4">
							{videoItems.map((item) => (
								<VideoCard
									key={item.videoUrl}
									item={item}
									onClick={() => setSelectedVideo(item)}
								/>
							))}
						</InfiniteSlider>

						<DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none ring-0">
							{selectedVideo && (
								<div className="relative aspect-[9/16] w-full max-w-[400px] mx-auto overflow-hidden rounded-2xl bg-black">
									{/* biome-ignore lint/a11y/useMediaCaption: no captions available for these testimonials */}
									<video
										src={selectedVideo.videoUrl}
										autoPlay
										controls
										className="h-full w-full object-contain"
									/>
								</div>
							)}
						</DialogContent>
					</Dialog>
				</div>

				{/* Right: 30% — reviews */}
				<div className="w-full lg:w-[30%]">
					<div className="space-y-5 mt-10">
						{reviews.map((review) => (
							<div
								key={review.author}
								className="rounded-[24px] bg-[#FFF7ED] p-6"
							>
								<p className="mb-4 text-[15px] leading-relaxed text-yv-dark-purple/80">
									"{review.quote}"
								</p>
								<p className="text-[13px] font-bold text-yv-dark-purple">
									— {review.author}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
