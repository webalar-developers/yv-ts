import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	const getPages = () => {
		const pages: (number | "...")[] = [];
		if (totalPages <= 5) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
		} else {
			pages.push(1, 2, 3);
			if (currentPage > 4) pages.push("...");
			if (currentPage > 3 && currentPage < totalPages - 2) {
				pages.push(currentPage);
			}
			if (currentPage < totalPages - 3) pages.push("...");
			pages.push(totalPages);
		}
		return [...new Set(pages)];
	};

	return (
		<div className="flex items-center justify-center gap-1.5 py-8">
			<button
				type="button"
				onClick={() => onPageChange(Math.max(1, currentPage - 1))}
				disabled={currentPage === 1}
				className="flex size-10 items-center justify-center rounded-md border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 disabled:opacity-30"
			>
				<ChevronLeft className="size-4" />
			</button>

			{getPages().map((page, i) =>
				page === "..." ? (
					<span
						key={`ellipsis-${i === 3 ? "start" : "end"}`}
						className="flex size-10 items-center justify-center text-sm text-gray-400"
					>
						...
					</span>
				) : (
					<button
						type="button"
						key={page}
						onClick={() => onPageChange(page)}
						className={cn(
							"flex size-10 items-center justify-center rounded-md text-sm font-medium transition-colors",
							currentPage === page
								? "bg-yv-orange text-white"
								: "border border-gray-200 text-gray-600 hover:bg-gray-50",
						)}
					>
						{page}
					</button>
				),
			)}

			<button
				type="button"
				onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
				disabled={currentPage === totalPages}
				className="flex size-10 items-center justify-center rounded-md border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 disabled:opacity-30"
			>
				<ChevronRight className="size-4" />
			</button>
		</div>
	);
}
