import { Fingerprint, MonitorPlay, Sparkles, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
	{
		icon: Fingerprint,
		title: "Biometric Access",
		description:
			"Secure entry with advanced biometric systems ensuring only authorized access.",
	},
	{
		icon: MonitorPlay,
		title: "24/7 Security",
		description:
			"Round-the-clock surveillance and on-ground security for complete peace of mind.",
	},
	{
		icon: Users,
		title: "App-Based Support",
		description:
			"Raise requests, get help, and stay connected instantly through our support system.",
	},
	{
		icon: Sparkles,
		title: "Buddies For Your Help",
		description:
			"Friendly on-site support team always available to assist you whenever needed.",
	},
];

export function SafetySection() {
	return (
		<section className="bg-[#F8F6F6] px-6 py-16 md:px-10 md:py-24">
			<div className="mx-auto grid max-w-7xl items-stretch gap-10 md:grid-cols-2 md:gap-16">

				<div className="relative overflow-hidden rounded-2xl">
					<img
						src="/home/first.jpg"
						alt="Security personnel"
						className="absolute inset-0 h-full w-full object-cover"
						loading="lazy"
						decoding="async"
					/>
				</div>

				<div>
					<div className="mb-3 h-1 w-10 rounded-sm bg-yv-orange" />
					<h2 className="mb-8 font-gilda text-[26px] leading-tight font-normal text-[#1f1f1f] sm:text-[32px] md:text-[40px] md:leading-[1.2]">
						Safety First. Second. And Always.
					</h2>

					<div className="grid grid-cols-2 gap-4">
						{features.map((feature) => (
							<Card
								key={feature.title}
								className="rounded-2xl border-none bg-white text-[#1f1f1f] shadow-none ring-1 ring-gray-100"
							>
								<CardContent className="p-6 md:p-7">
									<feature.icon className="mb-4 size-6 text-yv-orange" />
									<h3 className="mb-2 text-[18px] font-bold text-[#1f1f1f]">
										{feature.title}
									</h3>
									<p className="text-[12px] leading-relaxed text-[#666]">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
