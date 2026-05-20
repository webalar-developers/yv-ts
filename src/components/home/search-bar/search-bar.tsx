import { LayoutGrid, MapPin, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { mockProperties } from "@/data/mock-properties";

export function SearchBar() {
	const [query, setQuery] = useState("");
	const [city, setCity] = useState("Pune");
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	// Extract unique areas/locations for mock autocomplete
	const suggestions = useMemo(() => {
		const lowerQuery = query.toLowerCase();

		return mockProperties
			.filter(
				(p) =>
					p.city === city &&
					(p.name.toLowerCase().includes(lowerQuery) ||
						p.area.toLowerCase().includes(lowerQuery) ||
						p.location.toLowerCase().includes(lowerQuery)),
			)
			.slice(0, 8);
	}, [query, city]);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleSearch = () => {
		const params = new URLSearchParams();
		if (city) params.set("city", city);
		if (query.trim()) params.set("query", query.trim());

		navigate(`/hostels${params.size > 0 ? `?${params.toString()}` : ""}`);
	};

	return (
		<div className="relative z-30 mx-auto -mt-12 max-w-6xl px-4">
			<div className="bg-white p-6 shadow-xl ring-1 ring-black/5 overflow-visible">
				<h2 className="mb-4 text-center font-gilda text-[28px] font-normal text-gray-800 md:text-xl">
					An Unforgettable Experience, One Click Away
				</h2>

				<div className="flex flex-col gap-3 px-15 md:flex-row md:items-end">
					{/* City Select */}
					<div className="flex-1">
						<label
							htmlFor="city-select"
							className="mb-1 block text-[10px] font-bold tracking-wider text-gray-500"
						>
							SELECT CITY
						</label>
						<div className="relative">
							<MapPin className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-yv-orange" />
							<select
								id="city-select"
								value={city}
								onChange={(e) => setCity(e.target.value)}
								className="h-14 w-full appearance-none border border-gray-200 bg-white py-2 pr-8 pl-9 text-gray-700 outline-none focus:border-yv-orange focus:ring-1 focus:ring-yv-orange"
							>
								<option value="Pune">Pune</option>
								<option value="Mumbai">Mumbai</option>
							</select>
						</div>
					</div>

					{/* Area / Locality Input (Mock Google Search) */}
					<div className="relative flex-[2]" ref={containerRef}>
						<label
							htmlFor="area-search"
							className="mb-1 block text-[10px] font-bold tracking-wider text-gray-500"
						>
							AREA / LOCALITY
						</label>
						<div className="relative">
							<LayoutGrid className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400" />
							<input
								id="area-search"
								type="text"
								value={query}
								onChange={(e) => {
									setQuery(e.target.value);
									setIsOpen(true);
								}}
								onFocus={() => setIsOpen(true)}
								placeholder="Search by area, landmark or property"
								className="h-14 w-full border border-gray-200 bg-white py-2 pr-10 pl-9 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-yv-orange focus:ring-1 focus:ring-yv-orange"
							/>
							{query && (
								<button
									type="button"
									onClick={() => setQuery("")}
									className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
								>
									<X className="size-4" />
								</button>
							)}
						</div>

						{/* Dropdown - shows all properties on focus, filtered on search */}
						{isOpen && (
							<div className="absolute top-full left-0 z-[9999] mt-1 w-full overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg ring-1 ring-black/5">
								<div className="bg-gray-50 p-2 px-4 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
									Youthville Hostels in {city}
								</div>
								{suggestions.length > 0 ? (
									suggestions.map((p) => (
										<button
											type="button"
											key={p.id}
											onClick={() => {
												setQuery(p.name);
												setIsOpen(false);
												navigate(`/hostels/${p.id}`);
											}}
											className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-50"
										>
											<div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-yv-orange/10 text-yv-orange">
												<MapPin className="size-4" />
											</div>
											<div className="min-w-0">
												<p className="truncate text-sm font-medium text-gray-900">
													{p.name}
												</p>
												<p className="truncate text-xs text-gray-500">
													{p.area}, {p.city}
												</p>
											</div>
										</button>
									))
								) : (
									<div className="p-4 text-center text-sm text-gray-500">
										No properties found
									</div>
								)}
							</div>
						)}
					</div>

					{/* Search Button */}
					<Button
						onClick={handleSearch}
						variant="yv-orange"
						className="h-10 rounded-md px-6 py-7 text-[16px] font-medium"
					>
						<Search className="size-4" />
						Find YV Near You
					</Button>
				</div>
			</div>
		</div>
	);
}
