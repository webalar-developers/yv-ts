import { SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import { HostelsBreadcrumb } from "@/components/hostels/hostels-breadcrumb/hostels-breadcrumb";
import { HostelsFilterSidebar } from "@/components/hostels/hostels-filter-sidebar/hostels-filter-sidebar";
import { Pagination } from "@/components/hostels/pagination/pagination";
import { PropertyCard } from "@/components/hostels/property-card/property-card";
import { Button } from "@/components/ui/button";
import { mockProperties } from "@/data/mock-properties";
import { usePageHead } from "@/hooks/use-page-head";

const PAGE_SIZE = 4;

export function HostelsPage() {
	usePageHead({
		title: "Hostels in Pune | Youthville Hostels",
		description:
			"Browse premium Youthville hostels across Pune — Kiwale, Hinjewadi, Wakad. Private and shared rooms, fully-furnished, all-inclusive.",
		keywords:
			"hostels pune, student housing pune, co-living pune, youthville properties, hinjewadi hostels, wakad hostels, kiwale hostels",
		path: "/hostels",
	});

	const [searchParams] = useSearchParams();
	const [currentPage, setCurrentPage] = useState(1);
	const [filtersOpen, setFiltersOpen] = useState(false);
	const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
	const [sortBy, setSortBy] = useState("recommended");
	const [favoritedIds, setFavoritedIds] = useState<Set<string>>(new Set());
	const cityFromSearch = searchParams.get("city") ?? "";
	const queryFromSearch = searchParams.get("query") ?? "";

	const toggleFavorite = (id: string) => {
		setFavoritedIds((prev) => {
			const next = new Set(prev);
			if (next.has(id)) {
				next.delete(id);
			} else {
				next.add(id);
			}
			return next;
		});
	};

	const [filters, setFilters] = useState({
		search: queryFromSearch,
		city: cityFromSearch,
		areas: [] as string[],
		gender: null as string | null,
		coLiving: true,
		roomTypes: [] as string[],
		tags: [] as string[],
	});

	useEffect(() => {
		setFilters((prev) => ({
			...prev,
			search: queryFromSearch,
			city: cityFromSearch,
		}));
		setCurrentPage(1);
	}, [cityFromSearch, queryFromSearch]);

	const filteredProperties = useMemo(() => {
		let result = [...mockProperties];

		if (selectedBadge) {
			result = result.filter((p) => p.badge === selectedBadge);
		}

		// Apply Sidebar Filters
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
			// Logic for gender: Boys -> Only Male/Co-living, Girls -> Only Female/Co-living
			if (filters.gender === "Boys") {
				result = result.filter(
					(p) =>
						p.gender === "Only Male" ||
						p.gender === "Co-living" ||
						p.gender === "Mixed",
				);
			} else if (filters.gender === "Girls") {
				result = result.filter(
					(p) =>
						p.gender === "Only Female" ||
						p.gender === "Co-living" ||
						p.gender === "Mixed",
				);
			}
		}

		if (filters.tags.length > 0) {
			result = result.filter((p) => {
				return filters.tags.every((tag) => {
					if (tag === "Girls Only") return p.gender === "Only Female";
					if (tag === "Student Only")
						return p.category === "student" || !p.category;
					if (tag === "Working Professionals Only")
						return p.category === "professional";
					if (tag === "Co-living")
						return p.gender === "Co-living" || p.gender === "Mixed";
					if (tag === "Near Metro Station") return p.badge === "NEAR METRO";
					if (tag === "Near Public Transport")
						return (
							p.proximity?.toLowerCase().includes("transport") ||
							p.proximity?.toLowerCase().includes("metro")
						);
					return true;
				});
			});
		}

		if (filters.roomTypes.length > 0) {
			// Check if property occupancy string contains any of the selected room types
			result = result.filter((p) => {
				const occ = p.occupancy?.toLowerCase() || "";
				return filters.roomTypes.some((rt) => {
					if (rt === "Private Room")
						return (
							occ.includes("1") ||
							occ.includes("single") ||
							occ.includes("private")
						);
					if (rt === "Twin Sharing")
						return (
							occ.includes("2") ||
							occ.includes("twin") ||
							occ.includes("double")
						);
					if (rt === "Triple Occupancy")
						return occ.includes("3") || occ.includes("triple");
					if (rt === "Four Sharing")
						return occ.includes("4") || occ.includes("four");
					return false;
				});
			});
		}

		// Sort
		result.sort((a, b) => {
			if (sortBy === "price-low") return a.price - b.price;
			if (sortBy === "price-high") return b.price - a.price;
			if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
			return 0; // recommended (default)
		});

		return result;
	}, [selectedBadge, sortBy, filters]);

	const totalPages = Math.max(
		1,
		Math.ceil(filteredProperties.length / PAGE_SIZE),
	);
	const currentProperties = useMemo(() => {
		const start = (currentPage - 1) * PAGE_SIZE;
		return filteredProperties.slice(start, start + PAGE_SIZE);
	}, [currentPage, filteredProperties]);

	return (
		<main className="bg-[#faf8f3] py-8 md:py-10">
			<div className="mx-auto flex w-full gap-8 px-6 md:px-4">
				<div className="hidden lg:block">
					<HostelsFilterSidebar filters={filters} onFilterChange={setFilters} />
				</div>

				<section className="min-w-0 flex-1">
					<HostelsBreadcrumb
						sortBy={sortBy}
						onSortChange={setSortBy}
						count={filteredProperties.length}
						city={filters.city}
					/>

					<div className="mb-5 flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-black/5 lg:hidden">
						<div>
							<p className="text-sm font-medium text-gray-900">
								Find your ideal hostel
							</p>
							<p className="text-xs text-gray-500">
								Browse curated Youthville properties
							</p>
						</div>
						<Button
							variant="yv-orange-outline"
							size="sm"
							className="rounded-md"
							onClick={() => setFiltersOpen(true)}
						>
							<SlidersHorizontal className="size-4" />
							Filters
						</Button>
					</div>

					{selectedBadge && (
						<div className="mb-6 flex items-center justify-between rounded-lg bg-yv-orange/10 px-4 py-3">
							<p className="text-sm font-medium text-yv-orange">
								Showing results for:{" "}
								<span className="font-bold">{selectedBadge}</span>
							</p>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => {
									setSelectedBadge(null);
									setCurrentPage(1);
								}}
								className="h-8 text-yv-orange hover:bg-yv-orange/20"
							>
								Clear Filter
								<X className="ml-2 size-4" />
							</Button>
						</div>
					)}

					<div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
						{currentProperties.map((property) => (
							<PropertyCard
								key={property.id}
								property={{
									...property,
									isFavorited: favoritedIds.has(property.id),
								}}
								onBadgeClick={(badge) => {
									setSelectedBadge(badge);
									setCurrentPage(1);
								}}
								onFavoriteToggle={() => toggleFavorite(property.id)}
							/>
						))}
					</div>

					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={setCurrentPage}
					/>
				</section>
			</div>

			{/* Mobile filter overlay */}
			{filtersOpen && (
				<div className="fixed inset-0 z-50 flex lg:hidden">
					<button
						type="button"
						className="absolute inset-0 cursor-default bg-black/40"
						onClick={() => setFiltersOpen(false)}
						aria-label="Close filters"
					/>
					<div className="relative ml-auto h-full w-full max-w-sm overflow-y-auto bg-[#faf8f3]">
						<div className="sticky top-0 z-10 flex items-center justify-between bg-white px-4 py-3 shadow-sm">
							<h2 className="text-lg font-medium text-gray-900">Filters</h2>
							<button
								type="button"
								onClick={() => setFiltersOpen(false)}
								className="flex size-8 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100"
							>
								<X className="size-5" />
							</button>
						</div>
						<div className="p-4">
							<HostelsFilterSidebar
								filters={filters}
								onFilterChange={setFilters}
								onClose={() => setFiltersOpen(false)}
							/>
						</div>
					</div>
				</div>
			)}
		</main>
	);
}
