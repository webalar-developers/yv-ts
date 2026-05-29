export function KohinoorLegacy() {
	return (
		<section className="bg-[#800000] px-6 py-8 md:px-10 md:py-12 lg:px-16">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-10 lg:grid-cols-3 lg:items-center lg:gap-16">
					<div className="flex items-center justify-center">
						<div className="overflow-hidden rounded-2xl">
							<img
								src="/home/png/brand.png"
								alt="Kohinoor Group legacy"
								className="h-64 w-full max-w-sm object-contain md:h-80"
								loading="lazy"
								decoding="async"
							/>
						</div>
					</div>

					<div className="lg:col-span-2" >
						<h2 className="mb-6 font-gilda text-[28px] font-normal text-white md:text-[38px]">
							Legacy of Kohinoor Group
						</h2>
						<p className="mb-4 text-[15px] leading-relaxed text-white/80 font-roboto">
						Kohinoor Group has proudly stood tall as a leader in Pune’s real estate sector for over three decades. When the group commenced operations in 1983 under the able leadership of its Chairman & Managing Director, Mr. Krishnakumar Goyal, they started a cement trading business. Construction and development began only in 1989 under the name of KohinoorConstructions. Today, the group has developed and delivered over 4 million sq. ft. and has over 3 million sq. ft. of spaces under development. The group also has diversified interests in other verticals like manufacturing, logistics, and services. In the last decade, every project undertaken by the Kohinoor Group has been planned entirely before starting any construction work – an inspiration that Mr. Vineet Goyal and Mr. Rajesh Goyal, Jt. Managing Directors, Kohinoor Group, learned from Japanese construction practices. Being conscious about even the tiniest detail is one of the secrets of Kohinoor’s rising success graph. Today, the group has over 500+ employees with a shared vision for growth.
						</p>
						<a
							href="https://www.kohinoorgroup.co.in"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-white px-6 py-3 text-[14px] font-semibold text-[#800000] transition-colors hover:bg-yv-orange-hover"
						>
							Explore More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
