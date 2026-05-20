"use client";

import MapLibreGL, { type PopupOptions } from "maplibre-gl";
import { type ReactNode, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";
import { useMarkerContext } from "./marker-context";

type MarkerTooltipProps = {
	/** Tooltip content */
	children: ReactNode;
	/** Additional CSS classes for the tooltip container */
	className?: string;
} & Omit<PopupOptions, "className" | "closeButton" | "closeOnClick">;

export function MarkerTooltip({
	children,
	className,
	...popupOptions
}: MarkerTooltipProps) {
	const { marker, map } = useMarkerContext();
	const container = useMemo(() => document.createElement("div"), []);
	const prevTooltipOptions = useRef(popupOptions);

	const tooltip = useMemo(() => {
		const tooltipInstance = new MapLibreGL.Popup({
			offset: 16,
			...popupOptions,
			closeOnClick: true,
			closeButton: false,
		}).setMaxWidth("none");

		return tooltipInstance;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [popupOptions]);

	useEffect(() => {
		if (!map) return;

		tooltip.setDOMContent(container);

		const handleMouseEnter = () => {
			tooltip.setLngLat(marker.getLngLat()).addTo(map);
		};
		const handleMouseLeave = () => tooltip.remove();

		marker.getElement()?.addEventListener("mouseenter", handleMouseEnter);
		marker.getElement()?.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			marker.getElement()?.removeEventListener("mouseenter", handleMouseEnter);
			marker.getElement()?.removeEventListener("mouseleave", handleMouseLeave);
			tooltip.remove();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		map,
		container,
		marker.getElement,
		marker.getLngLat,
		tooltip.remove,
		tooltip.setDOMContent,
		tooltip.setLngLat,
	]);

	if (tooltip.isOpen()) {
		const prev = prevTooltipOptions.current;

		if (prev.offset !== popupOptions.offset) {
			tooltip.setOffset(popupOptions.offset ?? 16);
		}
		if (prev.maxWidth !== popupOptions.maxWidth && popupOptions.maxWidth) {
			tooltip.setMaxWidth(popupOptions.maxWidth ?? "none");
		}

		prevTooltipOptions.current = popupOptions;
	}

	return createPortal(
		<div
			className={cn(
				"bg-foreground text-background pointer-events-none rounded-md px-2 py-1 text-xs text-balance shadow-md",
				"animate-in fade-in-0 zoom-in-95 duration-200 ease-out",
				className,
			)}
		>
			{children}
		</div>,
		container,
	);
}
