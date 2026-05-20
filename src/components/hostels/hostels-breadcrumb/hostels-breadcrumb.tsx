import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

export function HostelsBreadcrumb({
	sortBy,
	onSortChange,
	count,
	city = "Pune",
}: {
	sortBy: string;
	onSortChange: (val: string) => void;
	count: number;
	city?: string;
}) {
	return (
		<div className="mb-6 flex flex-wrap items-center justify-between gap-4">
			{/* Breadcrumb */}
			<div className="text-md flex items-center gap-1.5 font-medium">
				<Link to="/" className="text-gray-400 hover:text-gray-600">
					Home
				</Link>
				<span className="text-gray-300">›</span>
				<span className="font-medium text-gray-800">{city} Properties</span>
			</div>

			{/* Count + Sort */}
			<div className="flex items-center gap-6">
				<span className="text-base font-medium text-gray-500">
					<span className="font-medium">{count}</span> properties found
				</span>

				<div className="flex items-center gap-2 text-base">
					<span className="text-gray-500">Sort by:</span>
					<div className="relative">
						<select
							value={sortBy}
							onChange={(e) => onSortChange(e.target.value)}
							className="cursor-pointer appearance-none border-none bg-transparent pr-5 text-[18px] font-bold text-yv-orange outline-none"
						>
							<option value="recommended">Recommended</option>
							<option value="price-low">Price: Low to High</option>
							<option value="price-high">Price: High to Low</option>
							<option value="rating">Rating</option>
						</select>
						<ChevronDown className="pointer-events-none absolute top-1/2 right-1 size-5 -translate-y-1/2 text-gray-400" />
					</div>
				</div>
			</div>
		</div>
	);
}
