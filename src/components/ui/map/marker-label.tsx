"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarkerLabelProps = {
	/** Label text content */
	children: ReactNode;
	/** Additional CSS classes for the label */
	className?: string;
	/** Position of the label relative to the marker (default: "top") */
	position?: "top" | "bottom";
};

export function MarkerLabel({
	children,
	className,
	position = "top",
}: MarkerLabelProps) {
	const positionClasses = {
		top: "bottom-full mb-1",
		bottom: "top-full mt-1",
	};

	return (
		<div
			className={cn(
				"absolute left-1/2 -translate-x-1/2 whitespace-nowrap",
				"text-foreground text-[10px] font-medium",
				positionClasses[position],
				className,
			)}
		>
			{children}
		</div>
	);
}
