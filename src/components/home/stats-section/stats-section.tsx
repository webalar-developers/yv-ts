import { stats } from "./stats-section.data";

export function StatsSection() {
	return (
		<section className="bg-yv-orange px-6 py-16 md:py-20">
			<div className="mx-auto grid grid-cols-2 gap-8 md:grid-cols-4">
				{stats.map((stat) => (
					<div key={stat.label} className="text-center text-white">
						<p className="font-inter text-[44px] font-bold tracking-tight sm:text-[56px] md:text-7xl">
							{stat.value}
							{stat.suffix && (
								<span className="ml-1 text-xl sm:text-3xl md:text-5xl">{stat.suffix}</span>
							)}
						</p>
						<p className="mt-2 font-gilda text-sm font-normal tracking-wide sm:text-[15px] md:text-base lg:text-[18px]">
							{stat.label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
