import { Card, CardContent } from "@/components/ui/card";
import type { LocationHighlight } from "./location-highlights.types";

export function LocationHighlights({
	highlights,
}: {
	highlights: LocationHighlight[];
}) {
	return (
		<section>
			<h3 className="font-['Gilda_Display'] text-[27px] font-normal text-[#1f1a17]">
				Prime Location &amp; Connectivity
			</h3>
			<div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
				{highlights.map((item) => (
					<Card
						key={item.title}
						className="rounded-xl border-0 bg-[#fbefe6] py-0 ring-1 ring-[#f1dfd2]"
					>
						<CardContent className="border-b-2 border-yv-orange px-6 py-6">
							{typeof item.icon === "string" ? (
								<img
									src={item.icon}
									alt=""
									className="size-5"
									loading="lazy"
									decoding="async"
								/>
							) : (
								<item.icon className="size-5 text-yv-orange" />
							)}
							<p className="mt-5 text-[18px] font-bold text-[#231f1c]">
								{item.title}
							</p>
							<p className="mt-2 text-[14px] font-normal text-[#766f6a]">
								{item.subtitle}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
