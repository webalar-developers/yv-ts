import { MapPin, Search, Tag, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
	filters: {
		search: string;
		city: string;
		areas: string[];
		gender: string | null;
		coLiving: boolean;
		roomTypes: string[];
		tags: string[];
	};
	onFilterChange: (filters: FilterSidebarProps["filters"]) => void;
	onClose?: () => void;
}

const SPECIAL_TAGS = [
	"Girls Only",
	"Student Only",
	"Co-living",
	"Near Metro Station",
	"Near Public Transport",
];

export function HostelsFilterSidebar({
	filters,
	onFilterChange,
	onClose,
}: FilterSidebarProps) {
	const [radius, setRadius] = useState(5);

	const updateFilters = (updates: Partial<typeof filters>) => {
		onFilterChange({ ...filters, ...updates });
	};

	const toggleTag = (tag: string) => {
		const newTags = filters.tags.includes(tag)
			? filters.tags.filter((t) => t !== tag)
			: [...filters.tags, tag];
		updateFilters({ tags: newTags });
	};

	const toggleRoomType = (type: string) => {
		const newRoomTypes = filters.roomTypes.includes(type)
			? filters.roomTypes.filter((t) => t !== type)
			: [...filters.roomTypes, type];
		updateFilters({ roomTypes: newRoomTypes });
	};

	const removeArea = (area: string) => {
		updateFilters({ areas: filters.areas.filter((a) => a !== area) });
	};

	const handleClearAll = () => {
		onFilterChange({
			search: "",
			city: "",
			areas: [],
			gender: null,
			coLiving: false,
			roomTypes: [],
			tags: [],
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

	return (
		<aside className="w-90 shrink-0">
			{/* Search */}
			<div className="relative mb-2">
				<Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400" />
				<input
					type="text"
					placeholder="Search by locality or PG name..."
					value={filters.search}
					onChange={(e) => updateFilters({ search: e.target.value })}
					className="h-10 w-full rounded-full bg-[#E8612D1A] pr-4 pl-10 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-yv-orange"
				/>
			</div>
			<div className="sticky top-20 space-y-6 rounded-sm bg-white p-10">
				{/* Heading */}
				<div className="flex items-center justify-between">
					<div>
						<h2 className="text-lg font-semibold text-gray-900">Filters</h2>
						<p className="text-[11px] font-normal tracking-widest text-gray-400">
							REFINE YOUR SEARCH
						</p>
					</div>
					{hasActiveFilters && (
						<button
							type="button"
							onClick={handleClearAll}
							className="text-[11px] font-bold text-yv-orange hover:underline"
						>
							CLEAR ALL
						</button>
					)}
				</div>

				{/* City */}
				<div>
					<div className="mb-2 flex items-center gap-1.5 py-2 text-[11px] font-normal tracking-widest text-gray-400">
						<MapPin className="size-3.5" />
						CITY
					</div>
					<div className="flex gap-2">
						{["Pune", "Mumbai"].map((city) => (
							<button
								type="button"
								key={city}
								onClick={() => updateFilters({ city, areas: [] })}
								className={cn(
									"flex-1 rounded-sm border px-4 py-3 text-[13px] font-medium transition-colors",
									filters.city === city
										? "border-[#FED7AA] bg-[#FFF7ED] text-[13px] text-yv-orange"
										: "border-gray-200 text-[13px] text-gray-600 hover:border-gray-300",
								)}
							>
								{city}
							</button>
						))}
					</div>

					{filters.city === "Pune" && (
						<div className="mt-4">
							<p className="mb-2 text-[11px] font-bold text-gray-400">
								TRENDING AREAS
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									"Balewadi",
									"Karve Nagar",
									"Kothrud",
									"Baner",
									"Viman Nagar",
								].map((area) => (
									<button
										type="button"
										key={area}
										onClick={() => {
											const newAreas = filters.areas.includes(area)
												? filters.areas.filter((a) => a !== area)
												: [...filters.areas, area];
											updateFilters({ areas: newAreas });
										}}
										className={cn(
											"rounded-full border px-3 py-1 text-xs font-medium transition-colors",
											filters.areas.includes(area)
												? "border-yv-orange bg-yv-orange/10 text-yv-orange"
												: "border-gray-200 text-gray-600 hover:border-gray-300",
										)}
									>
										{area}
									</button>
								))}
							</div>
						</div>
					)}

					{filters.city === "Mumbai" && (
						<div className="mt-4">
							<p className="mb-2 text-[11px] font-bold text-gray-400">
								TRENDING AREAS
							</p>
							<div className="flex flex-wrap gap-2">
								{["Andheri", "Powai", "Vile Parle", "Bandra", "Juhu"].map(
									(area) => (
										<button
											type="button"
											key={area}
											onClick={() => {
												const newAreas = filters.areas.includes(area)
													? filters.areas.filter((a) => a !== area)
													: [...filters.areas, area];
												updateFilters({ areas: newAreas });
											}}
											className={cn(
												"rounded-full border px-3 py-1 text-xs font-medium transition-colors",
												filters.areas.includes(area)
													? "border-yv-orange bg-yv-orange/10 text-yv-orange"
													: "border-gray-200 text-gray-600 hover:border-gray-300",
											)}
										>
											{area}
										</button>
									),
								)}
							</div>
						</div>
					)}

					{filters.areas.length > 0 && (
						<div className="mt-5 flex flex-wrap gap-1.5">
							{filters.areas.map((area) => (
								<span
									key={area}
									className="inline-flex items-center gap-1 rounded-full border border-[#FED7AA] bg-[#FFF7ED] px-3 py-1.5 text-xs font-medium text-yv-orange"
								>
									{area}
									<button type="button" onClick={() => removeArea(area)}>
										<X className="size-3" />
									</button>
								</span>
							))}
						</div>
					)}
				</div>

				{/* Radius */}
				<div>
					<div className="mb-2 flex items-center gap-1.5 py-2 text-[11px] font-normal tracking-widest text-gray-400">
						<img
							src="/hostels/svg/icon-filter-radius.svg"
							alt=""
							className="size-3.5"
							loading="lazy"
							decoding="async"
						/>
						RADIUS
					</div>
					<input
						type="range"
						min={1}
						max={10}
						value={radius}
						onChange={(e) => setRadius(Number(e.target.value))}
						className="w-full accent-yv-orange"
					/>
					<div className="flex justify-between text-[11px] font-semibold text-gray-400">
						<span>1km</span>
						<span>5km</span>
						<span>10km</span>
					</div>
				</div>

				{/* Living Preference */}
				<div>
					<div className="mb-2 flex items-center gap-1.5 py-2 text-[11px] font-normal tracking-widest text-gray-400">
						<img
							src="/hostels/svg/icon-filter-living.svg"
							alt=""
							className="size-3.5"
							loading="lazy"
							decoding="async"
						/>
						LIVING PREFERENCE
					</div>
					<div className="flex gap-2">
						{["Boys", "Girls"].map((pref) => (
							<button
								type="button"
								key={pref}
								onClick={() =>
									updateFilters({
										gender: filters.gender === pref ? null : pref,
									})
								}
								className={cn(
									"flex-1 rounded-sm border px-4 py-2 text-[13px] font-medium transition-colors",
									filters.gender === pref
										? "border-[#FED7AA] bg-[#FFF7ED] text-[13px] font-medium text-yv-orange"
										: "border-gray-200 text-[13px] font-medium text-gray-600 hover:border-gray-300",
								)}
							>
								{pref}
							</button>
						))}
					</div>
					<button
						type="button"
						onClick={() => updateFilters({ coLiving: !filters.coLiving })}
						className={cn(
							"mt-2 w-full rounded-sm border px-4 py-2 text-[13px] font-medium transition-colors",
							filters.coLiving
								? "border-[#FED7AA] bg-[#FFF7ED] text-yv-orange"
								: "border-gray-200 text-gray-600 hover:border-gray-300",
						)}
					>
						Co-living
					</button>
				</div>

				{/* Room Type */}
				<div>
					<div className="mb-2 flex items-center gap-1.5 py-2 text-[11px] font-normal tracking-widest text-gray-400">
						<img
							src="/hostels/svg/icon-filter-tags.svg"
							alt=""
							className="size-3.5"
							loading="lazy"
							decoding="async"
						/>
						ROOM TYPE
					</div>
					<div className="space-y-2">
						{[
							"Private Room",
							"Twin Sharing",
							"Triple Occupancy",
							"Four Sharing",
						].map((type) => (
							<label
								key={type}
								className="flex cursor-pointer items-center gap-2.5 text-[13px] font-medium text-gray-700"
							>
								<input
									type="checkbox"
									checked={filters.roomTypes.includes(type)}
									onChange={() => toggleRoomType(type)}
									className="size-4 rounded border-gray-300 accent-yv-orange"
								/>
								{type}
							</label>
						))}
					</div>
				</div>

				{/* Special Tags */}
				<div>
					<div className="mb-2 flex items-center gap-1.5 py-2 text-[11px] font-normal tracking-widest text-gray-400">
						<Tag className="size-3.5" />
						SPECIAL TAGS
					</div>
					<div className="space-y-3">
						{SPECIAL_TAGS.map((tag) => {
							const enabled = filters.tags.includes(tag);
							return (
								<div key={tag} className="flex items-center justify-between">
									<span className="text-[13px] font-medium text-gray-700">
										{tag}
									</span>
									<button
										type="button"
										onClick={() => toggleTag(tag)}
										className={cn(
											"relative h-6 w-11 rounded-full text-[13px] font-medium transition-colors",
											enabled ? "bg-orange-600" : "bg-gray-200",
										)}
									>
										<span
											className={cn(
												"absolute top-0.5 left-0.5 size-5 rounded-full bg-white text-[13px] font-medium shadow transition-transform",
												enabled && "translate-x-5",
											)}
										/>
									</button>
								</div>
							);
						})}
					</div>
				</div>

				{/* Apply (Close on mobile) */}
				<Button
					variant="yv-orange"
					onClick={onClose}
					className="w-full rounded-sm py-5 text-[13px] font-semibold md:hidden"
				>
					APPLY FILTERS
				</Button>
			</div>
		</aside>
	);
}
