import { ArrowLeft, MapPin, Star } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import type { PropertyListing } from "../property-listing/property-listing.types";

export function PropertyHeader({ property }: { property: PropertyListing }) {
	return (
		<>
			<Link
				to="/hostels"
				className="mt-4 inline-flex items-center gap-2 text-[18px] font-medium text-yv-orange"
			>
				<ArrowLeft className="size-4" />
				Back to Pune Properties
			</Link>

			<section className="mt-6 flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
				<div>
					<h1 className="font-gilda text-[30px] leading-none text-[#1f1a17] sm:text-[40px] md:text-[54px]">
						{property.name}
					</h1>
					{property.newInclusion?.length ? (
						<div className="mt-4">
							<div className="flex items-center gap-2 text-[12px] tracking-[0.14em] text-[#6f6a66] uppercase">
								<span>Quick Info</span>
							</div>
							<div className="mt-3 flex flex-wrap gap-2">
								{property.newInclusion.map((inclusion, index) => (
									<span
										key={`${inclusion}-${index}`}
										className="rounded-full bg-[#fbefe6] px-3 py-1.5 text-[13px] font-medium text-[#6f6a66] ring-1 ring-[#f1dfd2]"
									>
										{inclusion}
									</span>
								))}
							</div>
						</div>
					) : (
						<div className="mt-4 flex items-center gap-2 text-[18px] text-[#6f6a66]">
							<MapPin className="size-4 text-yv-orange" />
							{property.location}
						</div>
					)}
				</div>

				<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
					<div className="flex items-start gap-3">
						<Star className="mt-0.5 size-6 fill-[#facc15] text-[#facc15]" />
						<div>
							<div className="flex items-center gap-2 text-[20px] font-bold text-[#231f1c]">
								{property.rating ?? "4.8"}
								<span className="text-[16px] font-medium">
									{property.ratingLabel ?? "Google Reviews"}
								</span>
							</div>
							<p className="text-[14px] font-normal text-[#706b67]">
								{property.reviewCountLabel}
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
