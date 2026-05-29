import { ArrowUpRight, TrendingUp } from "lucide-react";

export function OurStory() {
	return (
		<section className="bg-[#fafaf8] px-6 py-8 md:px-10 md:py-12 lg:px-16">
			<div className="mx-auto max-w-7xl">
				<div className="mb-8 flex items-center gap-3">
					<div className="h-9 w-1 rounded-full bg-yv-orange" />
					<h2 className="font-gilda text-[28px] font-normal text-yv-dark-purple md:text-[38px]">
						Our Story
					</h2>
				</div>

				<div className="grid items-center gap-10 lg:grid-cols-[58fr_42fr] lg:gap-12">
					<div>
						<img
							src="/about/journey.png"
							alt="Youthville journey – 2014 to Today"
							className="w-full object-contain"
							loading="eager"
							decoding="async"
						/>
					</div>

					<div>
						<p className="mb-8 text-[15px] leading-relaxed text-gray-700 md:text-[17px] font-roboto">
							Over the years, Youthville has expanded across cities, combining
							safety, comfort, and community into a seamless living experience
							that defines the modern standard of co-living.
						</p>
						<a
							href="/hostels"
							className="inline-flex items-center gap-2 bg-yv-orange px-6 py-3 text-[15px] font-roboto text-white transition-colors hover:bg-yv-orange-hover"
						>
							Join the 10x Growth
							<TrendingUp className="h-4 w-4" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
