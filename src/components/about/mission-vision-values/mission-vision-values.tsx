import { Eye, Flag, Gem } from "lucide-react";

const cards = [
	{
		icon: Flag,
		title: "Mission",
		description:
			"To provide safe, convenient, and vibrant living spaces that empower students and professionals to thrive through intentional community design.",
		tags: null,
		cardBg: "bg-white",
		iconBg: "bg-[#FDEEE8]",
		iconColor: "text-yv-orange",
	},
	{
		icon: Eye,
		title: "Vision",
		description:
			"Be the benchmark for premium, community-focused co-living in India, setting new standards for student wellness and security.",
		tags: null,
		cardBg: "bg-white",
		iconBg: "bg-[#FDEEE8]",
		iconColor: "text-yv-orange",
	},
	{
		icon: Gem,
		title: "Values",
		description: null,
		tags: ["Comfort", "Safety", "Growth", "Trust"],
		cardBg: "bg-[#FDEEE8]",
		iconBg: "bg-white",
		iconColor: "text-yv-orange",
	},
];

export function MissionVisionValues() {
	return (
		<section className="bg-[#fafaf8] px-6 py-8 md:px-10 md:py-12 lg:px-16">
			<div className="mx-auto max-w-7xl">
				<h2 className="mb-10 text-center font-gilda text-[28px] font-normal text-yv-dark-purple md:text-[38px]">
					What Makes us Unforgetabbly
				</h2>

				<div className="grid gap-5 md:grid-cols-3">
					{cards.map((card) => {
						const Icon = card.icon;
						return (
							<article
								key={card.title}
								className={`flex flex-col rounded-2xl p-7 shadow-sm ${card.cardBg}`}
							>
								<div
									className={`mb-5 flex h-11 w-11 items-center justify-center rounded-full ${card.iconBg}`}
								>
									<Icon className={`h-5 w-5 ${card.iconColor}`} strokeWidth={1.5} />
								</div>

								<h3 className="mb-3 font-gilda text-[22px] font-normal text-yv-dark-purple">
									{card.title}
								</h3>

								{card.description && (
									<p className="text-[14px] leading-relaxed text-gray-500">
										{card.description}
									</p>
								)}
								{card.tags && (
									<div className="flex flex-wrap gap-2">
										{card.tags.map((tag) => (
											<span
												key={tag}
												className="rounded-full border border-gray-300 bg-white/60 px-3 py-1 text-[13px] text-gray-600"
											>
												{tag}
											</span>
										))}
									</div>
								)}
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
