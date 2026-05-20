import { Link } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import type { RelatedProperty } from "./related-properties.types";

export function RelatedProperties({
	properties,
}: {
	properties: RelatedProperty[];
}) {
	return (
		<section>
			<h3 className="font-['Gilda_Display'] text-[27px] font-normal text-[#1f1a17]">
				Explore Other Properties
			</h3>
			<div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
				{properties.map((item) => (
					<Card
						key={item.id}
						className="overflow-hidden rounded-xl border border-[#eee7e2] bg-white py-0 ring-0"
					>
						<div className="h-52 overflow-hidden">
							<img
								src={item.image}
								alt={item.name}
								className="h-full w-full object-cover"
								loading="lazy"
								decoding="async"
							/>
						</div>
						<CardContent className="px-5 py-2">
							<p className="text-[18px] font-bold text-[#231f1c]">
								{item.name}
							</p>
							<p className="mt-2 text-[14px] font-medium text-[#766f6a]">
								{item.location}
							</p>
							<Link
								to={`/hostels/${item.id}`}
								className="mt-2 mb-2 inline-block text-[16px] font-bold text-yv-orange"
							>
								View Property
							</Link>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
