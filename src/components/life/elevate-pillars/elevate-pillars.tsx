import { Gem, TrendingUp, Zap } from "lucide-react";

const pillars = [
	{
		title: "Career & Entrepreneur Guidance",
		description:
			"Strategic mentorship and networking avenues for the visionaries.",
		icon: TrendingUp,
		variant: "white",
	},
	{
		title: "Wellness & Mindfulness",
		description:
			"Curated sessions focused on mental clarity and physical vigor.",
		icon: "/life/svg/wellness.svg",
		variant: "peach",
	},
	{
		title: "Skill Building",
		description:
			"Mastering digital and soft skills through exclusive workshops.",
		icon: Zap,
		variant: "white",
	},
	{
		title: "Community Empowerment",
		description:
			"Impact-led initiatives that drive social change and belonging.",
		icon: "/life/svg/community.svg",
		variant: "white",
	},
	{
		title: "Curated Entertainment",
		description:
			"Premium cultural and social events designed for the modern youth.",
		icon: "/life/svg/curated.svg",
		variant: "peach",
	},
	{
		title: "Personal Growth",
		description:
			"One-on-one sessions and resources to build individual character.",
		icon: "/life/svg/personal.svg",
		variant: "white",
	},
	{
		title: "Premium Experiences",
		description:
			"Priority access to luxury retreats and high-end collaborative spaces.",
		icon: Gem,
		variant: "orange",
	},
	{
		title: "Youthville Network",
		description:
			"Access to a pan-India network of alumni and industry experts.",
		icon: "/life/svg/youthvill.svg",
		variant: "peach",
	},
];

export function ElevatePillars() {
	return (
		<section className="bg-gray-50 px-6 py-16 md:px-10 md:py-20 lg:px-10">
			<div className="mx-auto">
				<h2 className="mb-16 font-gilda text-[26px] text-yv-dark-purple md:text-[38px] lg:text-[50px]">
					The Elevate Pillars
				</h2>

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{pillars.map((pillar) => (
						<div
							key={pillar.title}
							className={`flex min-h-[350px] flex-col rounded-md p-10 transition-all duration-300 hover:shadow-xl ${
								pillar.variant === "peach"
									? "bg-[#FBE2D9]"
									: pillar.variant === "orange"
										? "bg-yv-orange"
										: "border border-gray-100 bg-white"
							}`}
						>
							<div
								className={`mb-8 flex h-14 w-14 items-center justify-center rounded-md ${
									pillar.variant === "white" ? "bg-[#FBE2D9]" : "bg-white"
								} ${pillar.variant === "orange" ? "bg-white/20" : ""}`}
							>
								{typeof pillar.icon === "string" ? (
									<img
										src={pillar.icon}
										alt={pillar.title}
										className={`h-7 w-7 object-contain ${
											pillar.variant === "orange" ? "brightness-0 invert" : ""
										}`}
										loading="lazy"
										decoding="async"
									/>
								) : (
									<pillar.icon
										className={`h-7 w-7 ${
											pillar.variant === "orange"
												? "text-white"
												: "text-yv-orange"
										}`}
									/>
								)}
							</div>

							<div className="mt-auto">
								<h3
									className={`mb-4 font-gilda text-[26px] leading-tight font-medium ${
										pillar.variant === "orange"
											? "text-white"
											: "text-yv-dark-purple"
									}`}
								>
									{pillar.title}
								</h3>

								<p
									className={`text-[16px] leading-relaxed ${
										pillar.variant === "orange"
											? "text-white/80"
											: "text-gray-600"
									}`}
								>
									{pillar.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
