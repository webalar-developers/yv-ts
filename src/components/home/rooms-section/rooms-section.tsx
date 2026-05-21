import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { PropertyCard } from "@/components/home/property-card/property-card";
import type { PropertyListing } from "@/components/hostel-detail/property-listing/property-listing.types";
import { Button } from "@/components/ui/button";
import { filters, properties } from "./rooms-section.data";

type RoomsProperty = (typeof properties)[number];

function parsePrice(priceStr: string): number {
	const digits = priceStr.replace(/[^0-9]/g, "");
	return digits ? parseInt(digits, 10) : 0;
}

function toPropertyListing(p: RoomsProperty): PropertyListing {
	return {
		id: p.id,
		name: p.name,
		rating: null,
		location: p.area,
		fullAddress: "",
		city: p.location,
		area: p.area,
		gender: p.gender,
		occupancy: "Single / Double",
		price: parsePrice(p.price),
		badge: p.badge,
		badgeVariant: p.badgeVariant as PropertyListing["badgeVariant"],
		category: "student",
		image: p.image,
		isFavorited: false,
		featureTags: [],
		gallery: [],
		amenityStrip: [],
		overview: "",
		whyChooseTitle: "",
		whyChooseQuote: "",
		sidebarEyebrow: "",
		sidebarTitle: "",
		sidebarFeatures: [],
		testimonial: { name: "", since: "", quote: "", avatar: "" },
		map: { lat: 0, lng: 0, label: "" },
		rooms: [],
		investmentBreakdown: [],
		locationHighlights: [],
		lifeAtYouthville: [],
		faqs: [],
		relatedProperties: [],
	};
}

export function RoomsSection() {
	const [selectedFilters, setSelectedFilters] = useState<
		Record<string, string>
	>({});
	const sliderRef = useRef<HTMLDivElement | null>(null);

	const filteredProperties = useMemo(() => {
		return properties.filter((property) => {
			const cityFilter = selectedFilters.City;
			const locationFilter = selectedFilters.Location;
			const genderFilter = selectedFilters.Gender;
			const accommodationFilter = selectedFilters["Accommodation Type"];

			const badgeType =
				property.badgeVariant?.replace(/-/g, " ").toLowerCase() ?? "";

			return (
				(!cityFilter || property.location === cityFilter) &&
				(!locationFilter || property.area === locationFilter) &&
				(!genderFilter || property.gender.includes(genderFilter as "Male" | "Female" | "Other" | "Only Girls")) &&
				(!accommodationFilter ||
					badgeType === accommodationFilter.toLowerCase())
			);
		});
	}, [selectedFilters]);

	const handleFilterChange = (label: string, value: string) => {
		setSelectedFilters((prev) => ({ ...prev, [label]: value }));
	};

	const clearFilters = () => {
		setSelectedFilters({});
	};

	const hasActiveFilters = Object.values(selectedFilters).some(Boolean);

	const scrollCards = (direction: "left" | "right") => {
		const slider = sliderRef.current;

		if (!slider) return;

		const firstCard = slider.querySelector<HTMLElement>("[data-room-slide]");
		const gap = 24;
		const cardWidth = firstCard?.offsetWidth ?? slider.clientWidth;

		slider.scrollBy({
			left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
			behavior: "smooth",
		});
	};

	return (
		<section className="w-full bg-white px-6 pt-16 pb-16 font-sans md:px-10 md:pt-14 md:pb-14">
			{/* Section Header */}
			<div className="mb-12 text-center">
				<div className="mx-auto mb-3 h-0.5 w-12 bg-yv-orange" />
				<h2 className="font-gilda text-[40px] font-normal text-[#1a1a1a] md:text-[42px]">
					Your lifestyle deserves better living
				</h2>
				<p className="mt-2 text-[16px] font-normal text-[#666666]">
					Private or Shared Rooms - Choose Your Pick
				</p>
			</div>

			{/* Filter Row */}
			<div className="mx-auto mb-10 flex max-w-7xl flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
				<div className="flex min-w-0 flex-1 flex-wrap rounded border border-gray-200 bg-[#F8F6F6] xl:flex-nowrap">
					{filters.map((filter, idx) => (
						<div key={filter.label} className="relative min-w-[200px] flex-1">
							<select
								value={selectedFilters[filter.label] ?? ""}
								onChange={(e) =>
									handleFilterChange(filter.label, e.target.value)
								}
								className="h-10 w-full appearance-none rounded-none border-0 bg-[#F8F6F6] px-4 pr-8 text-left text-[14px] font-medium text-gray-700 outline-none focus:border-yv-orange"
							>
								<option value="">{filter.label}</option>
								{filter.options.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</select>
							<ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-gray-400" />
							{idx < filters.length - 1 && (
								<div className="absolute top-1/2 right-0 hidden h-6 w-px bg-gray-200 lg:block" />
							)}
						</div>
					))}
					<div className="flex items-center border-t border-gray-200 px-3 py-2 sm:px-4 xl:border-t-0 xl:border-l xl:border-gray-200 xl:py-0">
						<Button
							type="button"
							variant="ghost"
							size="sm"
							onClick={clearFilters}
							disabled={!hasActiveFilters}
							className="h-auto px-2 py-1 text-sm font-medium text-yv-orange hover:bg-yv-orange/5 hover:text-yv-orange disabled:text-gray-400"
						>
							Clear
						</Button>
					</div>
				</div>

				<div className="flex items-center justify-end gap-3 xl:shrink-0">
					<button
						type="button"
						onClick={() => scrollCards("left")}
						className="flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-yv-orange hover:text-yv-orange"
						aria-label="Show previous rooms"
					>
						<ChevronLeft className="size-5" />
					</button>
					<button
						type="button"
						onClick={() => scrollCards("right")}
						className="flex size-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-yv-orange hover:text-yv-orange"
						aria-label="Show more rooms"
					>
						<ChevronRight className="size-5" />
					</button>
				</div>
			</div>

			{/* Property Cards */}
			{filteredProperties.length === 0 ? (
				<div className="rounded-md border border-dashed border-gray-300 bg-[#fafafa] p-10 text-center text-sm text-gray-500">
					No rooms match the selected filters. Try a different combination.
				</div>
			) : (
				<div
					ref={sliderRef}
					className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
				>
					{filteredProperties.map((property) => (
						<div
							key={property.id}
							data-room-slide
							className="w-[88%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
						>
							<PropertyCard property={toPropertyListing(property)} />
						</div>
					))}
				</div>
			)}
		</section>
	);
}
