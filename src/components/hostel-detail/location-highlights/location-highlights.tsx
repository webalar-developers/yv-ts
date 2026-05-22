import { Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { LocationHighlight } from "./location-highlights.types";

export function LocationHighlights({
	highlights,
}: {
	highlights: LocationHighlight[];
	propertyId: string;
}) {
	const items = [...highlights, ...highlights];

	return (
		<section className="overflow-x-hidden">
			<style>{`
				@keyframes location-scroll {
					0% { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}
				.location-scroll-track {
					animation: location-scroll ${Math.max(highlights.length * 4, 16)}s linear infinite;
				}
				.location-scroll-track:hover {
					animation-play-state: paused;
				}
			`}</style>
			<h3 className="font-['Gilda_Display'] text-[27px] font-normal text-[#1f1a17]">
				Prime Location &amp; Connectivity
			</h3>
			<div className="mt-7 overflow-hidden">
				<div
					className="location-scroll-track flex gap-4"
					style={{ width: "max-content" }}
				>
					{items.map((item, idx) => (
						<Card
							key={idx}
							className="w-70 shrink-0 rounded-xl border-0 bg-[#fbefe6] py-0 ring-1 ring-[#f1dfd2]"
						>
							<CardContent className="border-b-2 border-yv-orange px-6 py-6">
								<div className="flex size-10 items-center justify-center rounded-full bg-yv-orange/10">
									<Navigation className="size-4 text-yv-orange" />
								</div>
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
			</div>
		</section>
	);
}
