import { BedDouble, MapPin, Search, Tag, Users, X } from "lucide-react";
import { useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

export type MapExplorerFilterValues = {
	search: string;
	city: string;
	areas: string[];
	gender: string | null;
	coLiving: boolean;
	roomTypes: string[];
	tags: string[];
};

type Props = {
	filters: MapExplorerFilterValues;
	onFilterChange: (next: MapExplorerFilterValues) => void;
	resultCount: number;
};

const TRENDING_AREAS: Record<string, string[]> = {
	Pune: ["Balewadi", "Karve Nagar", "Kothrud", "Baner", "Viman Nagar"],
	Mumbai: ["Andheri", "Powai", "Vile Parle", "Bandra", "Juhu"],
};

const ROOM_TYPES = [
	"Private Room",
	"Twin Sharing",
	"Triple Occupancy",
	"Four Sharing",
];

const SPECIAL_TAGS = [
	"Girls Only",
	"Student Only",
	"Working Professionals Only",
	"Co-living",
	"Near Metro Station",
	"Near Public Transport",
];

const EMPTY: MapExplorerFilterValues = {
	search: "",
	city: "",
	areas: [],
	gender: null,
	coLiving: false,
	roomTypes: [],
	tags: [],
};

export function MapExplorerFilters({
	filters,
	onFilterChange,
	resultCount,
}: Props) {
	const [showMobileFilters, setShowMobileFilters] = useState(false);

	const update = (patch: Partial<MapExplorerFilterValues>) =>
		onFilterChange({ ...filters, ...patch });

	const toggleInArray = (key: "areas" | "roomTypes" | "tags", item: string) => {
		const current = filters[key];
		update({
			[key]: current.includes(item)
				? current.filter((x) => x !== item)
				: [...current, item],
		});
	};

	const hasActiveFilters =
		filters.search !== "" ||
		filters.city !== "" ||
		filters.areas.length > 0 ||
		filters.gender !== null ||
		filters.coLiving !== false ||
		filters.roomTypes.length > 0 ||
		filters.tags.length > 0;

	const trendingAreas = filters.city
		? (TRENDING_AREAS[filters.city] ?? [])
		: [];

	return (
		<div className="flex h-full flex-col bg-[#faf8f3]">
			<div className="flex items-center justify-between p-5 pb-3">
				<div>
					<h3 className="font-gilda text-[22px] leading-none text-[#1f1f1f]">
						Filters
					</h3>
					<p className="mt-1 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
						Refine your search
					</p>
				</div>
				{hasActiveFilters && (
					<Button
						variant="ghost"
						size="sm"
						onClick={() => onFilterChange(EMPTY)}
						className="text-yv-orange hover:bg-yv-orange/10 hover:text-yv-orange"
					>
						Clear all
					</Button>
				)}
			</div>

			<div className="px-5 pb-3">
				<div className="relative">
					<Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400" />
					<Input
						type="text"
						placeholder="Search locality or PG..."
						value={filters.search}
						onChange={(e) => update({ search: e.target.value })}
						className="h-10 rounded-full border-transparent bg-white pl-10 text-gray-900 placeholder:text-gray-400 shadow-sm focus-visible:border-yv-orange focus-visible:ring-yv-orange/20"
					/>
				</div>
			</div>

			<div className="px-5 pb-3 md:hidden">
				<Button
					type="button"
					variant="yv-orange-outline"
					className="h-10 w-full rounded-md text-sm font-semibold"
					onClick={() => setShowMobileFilters((prev) => !prev)}
				>
					{showMobileFilters ? "Hide Filters" : "View All Filters"}
				</Button>
			</div>

			<div className={cn("md:block", showMobileFilters ? "block" : "hidden")}>
				<Separator className="bg-[#f1dfd2]/60" />

				<div className="flex-1 overflow-y-auto px-5">
					<Accordion
						defaultValue={["location", "living", "room", "tags"]}
						className="w-full"
					>
						<AccordionItem value="location">
							<AccordionTrigger className="text-[12px] font-bold tracking-wider text-gray-600 uppercase hover:no-underline">
								<span className="flex items-center gap-2">
									<MapPin className="size-3.5 text-yv-orange" />
									Location
								</span>
							</AccordionTrigger>
							<AccordionContent>
								<div className="space-y-4 pb-2">
									<ToggleGroup
										value={filters.city ? [filters.city] : []}
										onValueChange={(v) =>
											update({ city: v[0] ?? "", areas: [] })
										}
										className="flex flex-col gap-1 rounded-md border-none p-0 shadow-none"
									>
										<ToggleGroupItem
											value="Pune"
											className="rounded-md border bg-white px-2 py-2 text-[12px] tracking-normal normal-case data-[pressed]:border-yv-orange data-[pressed]:bg-[#FFF7ED] data-[pressed]:text-yv-orange w-full"
										>
											Pune
										</ToggleGroupItem>
										<ToggleGroupItem
											value="Mumbai"
											className="rounded-md border bg-white px-2 py-2 text-[12px] tracking-normal normal-case data-[pressed]:border-yv-orange data-[pressed]:bg-[#FFF7ED] data-[pressed]:text-yv-orange w-full"
										>
											Mumbai
										</ToggleGroupItem>
									</ToggleGroup>

									{trendingAreas.length > 0 && (
										<div className="space-y-2">
											<p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
												Trending areas
											</p>
											<div className="flex flex-col gap-2">
												{trendingAreas.map((area) => (
													<Label
														key={area}
														className="flex cursor-pointer items-center gap-2 rounded-md px-1 py-1.5 text-[12px] font-normal text-gray-700 hover:bg-white"
													>
														<Checkbox
															checked={filters.areas.includes(area)}
															onCheckedChange={() =>
																toggleInArray("areas", area)
															}
														/>
														{area}
													</Label>
												))}
											</div>
										</div>
									)}

									{filters.areas.length > 0 && (
										<div className="flex flex-wrap gap-1.5">
											{filters.areas.map((area) => (
												<Badge
													key={area}
													variant="secondary"
													className="gap-1 border border-[#FED7AA] bg-[#FFF7ED] text-yv-orange hover:bg-[#FFF7ED]"
												>
													{area}
													<button
														type="button"
														onClick={() => toggleInArray("areas", area)}
														className="ml-0.5 rounded-full hover:bg-yv-orange/20"
														aria-label={`Remove ${area}`}
													>
														<X className="size-3" />
													</button>
												</Badge>
											))}
										</div>
									)}
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="living">
							<AccordionTrigger className="text-[12px] font-bold tracking-wider text-gray-600 uppercase hover:no-underline">
								<span className="flex items-center gap-2">
									<Users className="size-3.5 text-yv-orange" />
									Living preference
								</span>
							</AccordionTrigger>
							<AccordionContent>
								<div className="space-y-3 pb-2">
									<RadioGroup
										value={filters.gender ?? "Any"}
										onValueChange={(v) =>
											update({ gender: v === "Any" ? null : v })
										}
										className="flex flex-col gap-1"
									>
										{["Any", "Boys", "Girls"].map((option) => (
											<Label
												key={option}
												className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent bg-white px-2 py-1.5 text-[12px] font-medium text-gray-700 transition-colors hover:border-yv-orange hover:text-yv-orange has-[[data-state=checked]]:border-yv-orange has-[[data-state=checked]]:bg-[#FFF7ED] has-[[data-state=checked]]:text-yv-orange"
											>
												<RadioGroupItem value={option} className="sr-only" />
												{option}
											</Label>
										))}
									</RadioGroup>

								</div>
							</AccordionContent>
						</AccordionItem>

					</Accordion>
				</div>
			</div>

			<div className="border-t border-[#f1dfd2]/60 bg-white p-4">
				<Badge
					variant="outline"
					className="w-full justify-center py-2 text-[11px] font-bold tracking-widest text-gray-600 uppercase"
				>
					{resultCount} {resultCount === 1 ? "Property" : "Properties"} Found
				</Badge>
			</div>
		</div>
	);
}
