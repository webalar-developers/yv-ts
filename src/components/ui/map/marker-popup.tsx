"use client";

import MapLibreGL, { type PopupOptions } from "maplibre-gl";
import { type ReactNode, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";
import { useMarkerContext } from "./marker-context";
import { PopupCloseButton } from "./popup-close-button";

type MarkerPopupProps = {

	children: ReactNode;

	className?: string;

	closeButton?: boolean;
} & Omit<PopupOptions, "className" | "closeButton">;

export function MarkerPopup({
	children,
	className,
	closeButton = false,
	...popupOptions
}: MarkerPopupProps) {
	const { marker, map } = useMarkerContext();
	const container = useMemo(() => document.createElement("div"), []);
	const prevPopupOptions = useRef(popupOptions);

	const popup = useMemo(() => {
		const popupInstance = new MapLibreGL.Popup({
			offset: 16,
			...popupOptions,
			closeButton: false,
		})
			.setMaxWidth("none")
			.setDOMContent(container);

		return popupInstance;

	}, [container, popupOptions]);

	useEffect(() => {
		if (!map) return;

		popup.setDOMContent(container);
		marker.setPopup(popup);

		return () => {
			marker.setPopup(null);
		};

	}, [map, container, marker.setPopup, popup]);

	if (popup.isOpen()) {
		const prev = prevPopupOptions.current;

		if (prev.offset !== popupOptions.offset) {
			popup.setOffset(popupOptions.offset ?? 16);
		}
		if (prev.maxWidth !== popupOptions.maxWidth && popupOptions.maxWidth) {
			popup.setMaxWidth(popupOptions.maxWidth ?? "none");
		}

		prevPopupOptions.current = popupOptions;
	}

	const handleClose = () => popup.remove();

	return createPortal(
		<div
			className={cn(
				"bg-popover text-popover-foreground relative max-w-62 rounded-md border p-3 shadow-md",
				"animate-in fade-in-0 zoom-in-95 duration-200 ease-out",
				className,
			)}
		>
			{closeButton && <PopupCloseButton onClick={handleClose} />}
			{children}
		</div>,
		container,
	);
}
