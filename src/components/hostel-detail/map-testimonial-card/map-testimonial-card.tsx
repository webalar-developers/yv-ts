import { ChevronLeft, ChevronRight, MapPinned, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PropertyListing } from "../property-listing/property-listing.types";
import { getGoogleMapsEmbedUrl } from "./map-testimonial-card.utils";

const STAR_POSITIONS = ["first", "second", "third", "fourth", "fifth"];

export function MapTestimonialCard({
	map,
	testimonial,
	googleReviews,
}: {
	map: PropertyListing["map"];
	testimonial: PropertyListing["testimonial"];
	googleReviews?: PropertyListing["googleReviews"];
}) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const reviews = googleReviews || [
		{
			author_name: testimonial.name,
			profile_photo_url: testimonial.avatar,
			rating: 5,
			relative_time_description: testimonial.since,
			text: testimonial.quote,
		},
	];

	const currentReview = reviews[currentIndex % reviews.length];

	const nextReview = () => {
		setCurrentIndex((prev) => (prev + 1) % reviews.length);
	};

	const prevReview = () => {
		setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
	};

	return (
		<div id="reviews" className="space-y-3">
			<Card className="overflow-hidden rounded-md border-0 bg-[#dcebdc] py-0 ring-1 ring-black/5">
				<div className="relative h-[200px] overflow-hidden md:h-[326px]">
					<iframe
						title={`${map.label} map`}
						src={getGoogleMapsEmbedUrl(map.lat, map.lng)}
						className="h-full w-full border-0"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
					<Button
						variant="outline"
						className="absolute bottom-6 left-1/2 h-11 -translate-x-1/2 rounded-full border-0 bg-white px-5 text-sm font-medium text-[#1f1a17] shadow-sm"
						render={
							<a
								href={`https://www.google.com/maps/search/?api=1&query=${map.lat},${map.lng}`}
								target="_blank"
								rel="noreferrer"
							>
								<MapPinned className="size-4" />
								Show on Map
							</a>
						}
						nativeButton={false}
					/>
				</div>
			</Card>

			<Card className="rounded-xl border-0 bg-[#f9ebdf] py-0 ring-1 ring-[#ead8ca]">
				<CardContent className="p-6">
					<div className="flex items-start justify-between">
						<div className="flex items-center gap-4">
							<div className="relative">
								<div className="flex size-14 items-center justify-center rounded-md bg-yv-orange/10 text-xl font-bold text-yv-orange">
									{currentReview.author_name
										.split(" ")
										.map((n) => n[0])
										.join("")
										.toUpperCase()
										.slice(0, 2)}
								</div>
								<img
									src="/hostel-detail/svg/icon-globe.svg"
									alt="Google"
									className="absolute -right-1 -bottom-1 size-5 rounded-full border border-white bg-white"
									loading="lazy"
									decoding="async"
								/>
							</div>
							<div>
								<div className="flex items-center gap-1.5">
									<p className="text-[14px] font-bold text-[#231f1c]">
										{currentReview.author_name}
									</p>
								</div>
								<div className="mt-0.5 flex items-center gap-1">
									{STAR_POSITIONS.map((position) => (
										<Star
											key={position}
											className={cn(
												"size-3",
												STAR_POSITIONS.indexOf(position) < currentReview.rating
													? "fill-yv-orange text-yv-orange"
													: "text-gray-300",
											)}
										/>
									))}
									<span className="ml-1 text-[11px] font-normal text-[#786f6a]">
										{currentReview.relative_time_description}
									</span>
								</div>
							</div>
						</div>
						{reviews.length > 1 && (
							<div className="flex items-center gap-2 text-yv-orange">
								<button
									type="button"
									onClick={prevReview}
									className="flex size-7 items-center justify-center rounded-full border border-yv-orange/50 transition-colors hover:bg-yv-orange hover:text-white"
								>
									<ChevronLeft className="size-4" />
								</button>
								<button
									type="button"
									onClick={nextReview}
									className="flex size-7 items-center justify-center rounded-full border border-yv-orange/50 transition-colors hover:bg-yv-orange hover:text-white"
								>
									<ChevronRight className="size-4" />
								</button>
							</div>
						)}
					</div>
					<p className="mt-5 text-[14px] font-normal leading-relaxed text-[#6c655f] italic">
						"{currentReview.text}"
					</p>
					<div className="mt-4 flex items-center gap-1 text-[10px] font-bold tracking-wider text-yv-orange uppercase">
						<span>Posted on Google</span>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
