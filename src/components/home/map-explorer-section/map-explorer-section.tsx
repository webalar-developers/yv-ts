import { ChefHat, Droplets, MapPin, ShieldCheck, Wifi } from "lucide-react";
import type MapLibreGL from "maplibre-gl";
import {
	type CSSProperties,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Map as MapComponent,
	MapControls,
	MapMarker,
	MarkerContent,
	MarkerTooltip,
} from "@/components/ui/map";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { mockProperties } from "@/data/mock-properties";
import { cn } from "@/lib/utils";

import {
	MapExplorerFilters,
	type MapExplorerFilterValues,
} from "./map-explorer-filters/map-explorer-filters";
import { SiteLogo } from "#/components/layout/site-logo/site-logo";

type MapProperty = (typeof mockProperties)[number];

type MapFilter = "All" | "Operational" | "Upcoming";

const LIGHT_THEME_VARS: CSSProperties = {
	"--background": "oklch(1 0 0)",
	"--foreground": "oklch(0.145 0 0)",
	"--card": "oklch(1 0 0)",
	"--card-foreground": "oklch(0.145 0 0)",
	"--popover": "oklch(1 0 0)",
	"--popover-foreground": "oklch(0.145 0 0)",
	"--primary": "oklch(0.205 0 0)",
	"--primary-foreground": "oklch(0.985 0 0)",
	"--secondary": "oklch(0.97 0 0)",
	"--secondary-foreground": "oklch(0.205 0 0)",
	"--muted": "oklch(0.97 0 0)",
	"--muted-foreground": "oklch(0.556 0 0)",
	"--accent": "oklch(0.97 0 0)",
	"--accent-foreground": "oklch(0.205 0 0)",
	"--border": "oklch(0.922 0 0)",
	"--input": "oklch(0.922 0 0)",
	"--ring": "oklch(0.708 0 0)",
} as CSSProperties;

const CITY_MAP_CENTER: Record<string, [number, number]> = {
	Pune: [73.829, 18.5332],
	Mumbai: [72.8777, 19.076],
};

export function MapExplorerSection() {
	const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(
		null,
	);
	const [mapFilter, setMapFilter] = useState<MapFilter>("All");
	const [showAllMobileProperties, setShowAllMobileProperties] = useState(false);

	const [filters, setFilters] = useState<MapExplorerFilterValues>({
		search: "",
		city: "Pune",
		areas: [],
		gender: null,
		coLiving: true,
		roomTypes: [],
		tags: [],
	});

	const mapRef = useRef<MapLibreGL.Map | null>(null);

	// Imperatively fly to city center whenever the city filter changes
	useEffect(() => {
		if (!mapRef.current) return;
		const center = CITY_MAP_CENTER[filters.city] ?? CITY_MAP_CENTER.Pune;
		const zoom = filters.city === "Mumbai" ? 11 : 11;
		mapRef.current.flyTo({ center, zoom, duration: 1200 });
	}, [filters.city]);

	const selectedProperty = selectedPropertyId
		? mockProperties.find((p) => p.id === selectedPropertyId)
		: null;

	// Fly to the selected property's location, or back to the city center on deselect
	useEffect(() => {
		if (!mapRef.current) return;
		if (selectedProperty) {
			mapRef.current.flyTo({
				center: [selectedProperty.map.lng, selectedProperty.map.lat],
				zoom: 14,
				duration: 1200,
			});
		} else {
			const center = CITY_MAP_CENTER[filters.city] ?? CITY_MAP_CENTER.Pune;
			mapRef.current.flyTo({ center, zoom: 11, duration: 1200 });
		}
	}, [selectedProperty, filters.city]);

	const mapProperties = useMemo(() => {
		let result = [...mockProperties];

		if (mapFilter === "Operational") {
			result = result.filter((p) => p.badgeVariant !== "new-opening");
		} else if (mapFilter === "Upcoming") {
			result = result.filter((p) => p.badgeVariant === "new-opening");
		}

		if (filters.search) {
			const search = filters.search.toLowerCase();
			result = result.filter(
				(p) =>
					p.name.toLowerCase().includes(search) ||
					p.area.toLowerCase().includes(search),
			);
		}
		if (filters.city) {
			result = result.filter((p) => p.city === filters.city);
		}
		if (filters.areas.length > 0) {
			result = result.filter((p) => filters.areas.includes(p.area));
		}
		if (filters.gender) {
			if (filters.gender === "Boys") {
				result = result.filter(
					(p) =>
						p.gender === "Only Male" ||
						p.gender === "Co-living" ||
						p.gender === "Mixed",
				);
			} else if (filters.gender === "Girls") {
				result = result.filter((p) => p.gender === "Only Female");
			}
		}

		return result;
	}, [filters, mapFilter]);

	useEffect(() => {
		setShowAllMobileProperties(false);
	}, []);

	const mobileVisibleProperties = showAllMobileProperties
		? mapProperties
		: mapProperties.slice(0, 4);

	return (
		<section
			className="bg-[#faf8f3] px-6 py-5 md:px-10 md:py-10"
			style={LIGHT_THEME_VARS}
		>
			<div className="mx-auto">
				<div className="mb-8 text-center">
					<div className="mx-auto mb-3 h-1 w-10 bg-yv-orange" />
					<h2 className="font-gilda text-[32px] font-normal text-[#1f1f1f] md:text-[40px]">
						Explore Youthville Properties
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border bg-white shadow-sm lg:h-[800px] lg:grid-cols-12">
					<aside className="col-span-1 border-b bg-[#faf8f3] lg:h-full lg:border-r lg:border-b-0 lg:col-span-3">
						<MapExplorerFilters
							filters={filters}
							onFilterChange={setFilters}
							resultCount={mapProperties.length}
						/>
					</aside>

					<div className="relative col-span-1 h-[340px] border-b bg-slate-100 sm:h-[400px] lg:col-span-5 lg:h-full lg:border-r lg:border-b-0">
						<ToggleGroup
							value={[mapFilter]}
							onValueChange={(v) => v[0] && setMapFilter(v[0] as MapFilter)}
							className="absolute top-4 left-4 z-10 border bg-white/90 shadow-md backdrop-blur-sm"
						>
							<ToggleGroupItem value="All">All</ToggleGroupItem>
							<ToggleGroupItem value="Operational">Live</ToggleGroupItem>
							<ToggleGroupItem value="Upcoming">Upcoming</ToggleGroupItem>
						</ToggleGroup>

						<MapComponent
							ref={mapRef}
							center={CITY_MAP_CENTER.Pune}
							zoom={11}
							theme="light"
							className="h-full w-full"
						>
							<MapControls position="top-right" />

							{(selectedProperty ? [selectedProperty] : mapProperties).map(
								(property) => {
									// const isSelected = selectedPropertyId === property.id;
									const isOperational = property.badgeVariant !== "new-opening";

									return (
										<MapMarker
											key={property.id}
											longitude={property.map.lng}
											latitude={property.map.lat}
											onClick={() => setSelectedPropertyId(property.id)}
										>
											<MarkerContent>
												<div className="flex w-[150px] items-center lg:w-[250px] rounded-full">
													<img
														src="/shared/png/yv_logo.png"
														alt="YV"
														className={cn(
															"absolute left-0 h-6 transition-all duration-500 md:h-8 rounded-full",
															!isOperational && "grayscale",
														)}
													/>
												</div>
											</MarkerContent>
											<MarkerTooltip>{property.name}</MarkerTooltip>
										</MapMarker>
									);
								},
							)}
						</MapComponent>

						<div className="absolute bottom-4 left-4 flex items-center gap-4 rounded-full border border-gray-100 bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
							<div className="flex items-center gap-1.5">
								<div className="size-2.5 rounded-full bg-emerald-500" />
								<span className="text-[9px] font-bold tracking-widest text-gray-600 uppercase">
									Live
								</span>
							</div>
							<div className="flex items-center gap-1.5">
								<div className="size-2.5 rounded-full bg-rose-500" />
								<span className="text-[9px] font-bold tracking-widest text-gray-600 uppercase">
									Upcoming
								</span>
							</div>
						</div>
					</div>

					<div className="col-span-1 flex min-h-[420px] flex-col bg-[#faf8f3] lg:col-span-4 lg:h-full lg:overflow-hidden">
						{selectedProperty ? (
							<>
								<div className="flex items-center justify-between border-b bg-white px-6 py-4">
									<button
										type="button"
										onClick={() => setSelectedPropertyId(null)}
										className="flex cursor-pointer items-center gap-1 text-[11px] font-bold tracking-widest text-gray-500 uppercase transition-colors hover:text-yv-orange"
									>
										← Back to Results
									</button>
									<Badge
										variant={
											selectedProperty.badgeVariant === "new-opening"
												? "new-opening"
												: "premium"
										}
									>
										{selectedProperty.badgeVariant === "new-opening"
											? "Upcoming"
											: "Live"}
									</Badge>
								</div>

								<ScrollArea key="detail-scroll" className="bg-white lg:flex-1">
									<div className="space-y-6 p-6">
										<div className="group relative h-[240px] w-full overflow-hidden rounded-md">
											<img
												src={selectedProperty.image || "/shared/jpg/baluno.jpg"}
												alt={selectedProperty.name}
												className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											/>
										</div>

										<div className="border-b pb-6">
											<div className="mb-3 flex items-start justify-between gap-3">
												<h2 className="font-gilda text-[32px] leading-none text-[#1f1f1f]">
													{selectedProperty.name}
												</h2>
												<Link
													to={`/hostels/${selectedProperty.id}`}
													className="shrink-0 rounded-full border border-yv-orange px-3 py-1.5 text-[11px] font-bold tracking-widest text-yv-orange uppercase transition-colors hover:bg-yv-orange hover:text-white"
												>
													View Property →
												</Link>
											</div>
											<div className="mb-5 flex items-center text-[13px] text-gray-500">
												<MapPin className="mr-1.5 size-4 text-yv-orange" />
												{selectedProperty.location}
											</div>

											<Card className="grid grid-cols-2 gap-4 border-[#f1dfd2]/50 bg-[#faf8f3] p-5 shadow-none ring-0">
												<div>
													<p className="mb-1.5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
														Property Type
													</p>
													<p className="text-[14px] font-semibold text-gray-900">
														{selectedProperty.gender.join(" / ")}
													</p>
												</div>
												<div>
													<p className="mb-1.5 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
														Monthly Rent
													</p>
													<p className="text-[14px] font-semibold text-yv-orange">
														₹{selectedProperty.price.toLocaleString("en-IN")}{"*"}
														<span className="text-[11px] font-normal text-gray-500">
															onwards
														</span>
													</p>
												</div>
											</Card>
										</div>

										<div>
											<p className="mb-4 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
												Top Amenities
											</p>
											<div className="grid grid-cols-2 gap-3">
												{[
													{ Icon: ChefHat, label: "Chef Food" },
													// { Icon: Droplets, label: "Auto Wash" },
													{ Icon: ShieldCheck, label: "24/7 Security" },
													{ Icon: Wifi, label: "100Mbps" },
												].map(({ Icon, label }) => (
													<Card
														key={label}
														className="flex-row items-center gap-3 rounded-lg border border-[#f1dfd2]/50 bg-[#faf8f3] p-3 shadow-none ring-0"
													>
														<Icon className="size-4 text-yv-orange" />
														<span className="text-[12px] font-medium text-gray-700">
															{label}
														</span>
													</Card>
												))}
											</div>
										</div>
									</div>
								</ScrollArea>

								<div className="flex flex-col gap-3 border-t bg-white p-6">
									<Button
										variant="yv-orange"
										type="button"
										onClick={() => {
											window.open(
												"https://wa.me/919595200200",
												"_blank",
												"noopener,noreferrer",
											);
										}}
										className="h-12 w-full rounded-md text-[14px] font-semibold shadow-sm transition-all hover:shadow-md"
									>
										Book Now
									</Button>
									<Button
										variant="yv-orange-outline"
										nativeButton={false}
										render={<Link to={`/hostels/${selectedProperty.id}`} />}
										className="h-12 w-full rounded-md text-[14px] font-semibold"
									>
										View Property
									</Button>
								</div>
							</>
						) : (
							<>
								<div className="flex items-center justify-between border-b bg-white px-6 py-4">
									<h3 className="font-gilda text-[18px] text-gray-900">
										Available Properties
									</h3>
									<Badge
										variant="outline"
										className="bg-white text-[10px] font-bold text-gray-500"
									>
										{mapProperties.length} FOUND
									</Badge>
								</div>

								<ScrollArea
									key="list-scroll"
									className="bg-[#faf8f3] lg:flex-1"
								>
									{mapProperties.length === 0 ? (
										<div className="py-10 text-center">
											<p className="text-gray-500">
												No properties found matching these filters.
											</p>
										</div>
									) : (
										<div className="space-y-3 p-4">
											<div className="space-y-3 lg:hidden">
												{mobileVisibleProperties.map((property) => {
													const isActive = selectedPropertyId === property.id;
													return (
														<PropertyListCard
															key={property.id}
															property={property}
															isActive={isActive}
															onClick={() => setSelectedPropertyId(property.id)}
														/>
													);
												})}
											</div>

											<div className="hidden space-y-3 lg:block">
												{mapProperties.map((property) => {
													const isActive = selectedPropertyId === property.id;
													return (
														<PropertyListCard
															key={property.id}
															property={property}
															isActive={isActive}
															onClick={() => setSelectedPropertyId(property.id)}
														/>
													);
												})}
											</div>

											{mapProperties.length > 4 && (
												<div className="pt-2 lg:hidden">
													<Button
														type="button"
														variant="yv-orange-outline"
														className="h-11 w-full rounded-md text-sm font-semibold"
														onClick={() =>
															setShowAllMobileProperties((prev) => !prev)
														}
													>
														{showAllMobileProperties
															? "View Less"
															: `View More (${mapProperties.length - 4} more)`}
													</Button>
												</div>
											)}
										</div>
									)}
								</ScrollArea>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

function PropertyListCard({
	property,
	isActive,
	onClick,
}: {
	property: MapProperty;
	isActive: boolean;
	onClick: () => void;
}) {
	return (
		<Card
			onClick={onClick}
			className={cn(
				"group cursor-pointer flex-row items-stretch gap-0 rounded-md py-0 ring-1 transition-all hover:shadow-md",
				isActive
					? "ring-2 ring-yv-orange bg-yv-orange shadow-md"
					: "ring-foreground/10 hover:ring-yv-orange hover:bg-yv-orange",
			)}
		>
			<div className="relative size-28 shrink-0 overflow-hidden rounded-md">
				<img
					src={property.image || "/shared/jpg/baluno.jpg"}
					className="h-full w-full object-cover"
					alt={property.name}
				/>
				<Badge
					variant={
						property.badgeVariant === "new-opening" ? "new-opening" : "premium"
					}
					className="absolute top-1.5 right-1.5 !text-[8px] !px-1.5 !py-0.5"
				>
					{property.badgeVariant === "new-opening" ? "Upcoming" : "Live"}
				</Badge>
			</div>
			<CardContent className="flex flex-1 flex-col justify-between p-4">
				<div>
					<h4
						className={cn(
							"line-clamp-1 text-[16px] font-semibold transition-colors",
							isActive ? "text-white" : "text-gray-900 group-hover:text-white",
						)}
					>
						{property.name}
					</h4>
					<p
						className={cn(
							"mt-1 flex items-center text-[12px] transition-colors",
							isActive
								? "text-white/80"
								: "text-gray-500 group-hover:text-white/80",
						)}
					>
						<MapPin className="mr-1 size-3" />
						{property.area}
					</p>
				</div>
				<div>
					<p
						className={cn(
							"mb-0.5 text-[10px] font-bold tracking-wider uppercase transition-colors",
							isActive
								? "text-white/70"
								: "text-gray-400 group-hover:text-white/70",
						)}
					>
						Starting From
					</p>
					<p
						className={cn(
							"text-[15px] font-bold transition-colors",
							isActive ? "text-white" : "text-yv-orange group-hover:text-white",
						)}
					>
						₹{property.price.toLocaleString("en-IN")}{"*"}
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
