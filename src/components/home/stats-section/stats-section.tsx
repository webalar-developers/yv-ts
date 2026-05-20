import { stats } from "./stats-section.data";

export function StatsSection() {
	return (
		<section className="bg-yv-orange px-6 py-16 md:py-20">
			<div className="mx-auto grid grid-cols-2 gap-8 md:grid-cols-4">
				{stats.map((stat) => (
					<div key={stat.label} className="text-center text-white">
						<p className="font-inter text-[80px] font-bold tracking-tight md:text-7xl">
							{stat.value}
							{stat.suffix && (
								<span className="ml-1 text-3xl md:text-5xl">{stat.suffix}</span>
							)}
						</p>
						<p className="mt-2 font-gilda text-[18px] font-normal tracking-wide md:text-base">
							{stat.label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
