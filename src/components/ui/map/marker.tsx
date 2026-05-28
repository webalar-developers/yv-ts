"use client";

import MapLibreGL, { type MarkerOptions } from "maplibre-gl";
import { type ReactNode, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";
import { useMap } from "./map-context";
import { MarkerContext, useMarkerContext } from "./marker-context";

type MapMarkerProps = {

	longitude: number;

	latitude: number;

	children: ReactNode;

	onClick?: (e: MouseEvent) => void;

	onMouseEnter?: (e: MouseEvent) => void;

	onMouseLeave?: (e: MouseEvent) => void;

	onDragStart?: (lngLat: { lng: number; lat: number }) => void;

	onDrag?: (lngLat: { lng: number; lat: number }) => void;

	onDragEnd?: (lngLat: { lng: number; lat: number }) => void;
} & Omit<MarkerOptions, "element">;

export function MapMarker({
	longitude,
	latitude,
	children,
	onClick,
	onMouseEnter,
	onMouseLeave,
	onDragStart,
	onDrag,
	onDragEnd,
	draggable = false,
	...markerOptions
}: MapMarkerProps) {
	const { map, isLoaded } = useMap();

	const callbacksRef = useRef({
		onClick,
		onMouseEnter,
		onMouseLeave,
		onDragStart,
		onDrag,
		onDragEnd,
	});
	callbacksRef.current = {
		onClick,
		onMouseEnter,
		onMouseLeave,
		onDragStart,
		onDrag,
		onDragEnd,
	};

	const marker = useMemo(() => {
		const markerInstance = new MapLibreGL.Marker({
			...markerOptions,
			element: document.createElement("div"),
			draggable,
		}).setLngLat([longitude, latitude]);

		const handleClick = (e: MouseEvent) => callbacksRef.current.onClick?.(e);
		const handleMouseEnter = (e: MouseEvent) =>
			callbacksRef.current.onMouseEnter?.(e);
		const handleMouseLeave = (e: MouseEvent) =>
			callbacksRef.current.onMouseLeave?.(e);

		markerInstance.getElement()?.addEventListener("click", handleClick);
		markerInstance
			.getElement()
			?.addEventListener("mouseenter", handleMouseEnter);
		markerInstance
			.getElement()
			?.addEventListener("mouseleave", handleMouseLeave);

		const handleDragStart = () => {
			const lngLat = markerInstance.getLngLat();
			callbacksRef.current.onDragStart?.({ lng: lngLat.lng, lat: lngLat.lat });
		};
		const handleDrag = () => {
			const lngLat = markerInstance.getLngLat();
			callbacksRef.current.onDrag?.({ lng: lngLat.lng, lat: lngLat.lat });
		};
		const handleDragEnd = () => {
			const lngLat = markerInstance.getLngLat();
			callbacksRef.current.onDragEnd?.({ lng: lngLat.lng, lat: lngLat.lat });
		};

		markerInstance.on("dragstart", handleDragStart);
		markerInstance.on("drag", handleDrag);
		markerInstance.on("dragend", handleDragEnd);

		return markerInstance;

	}, [draggable, latitude, longitude, markerOptions]);

	useEffect(() => {
		if (!map || !isLoaded) return;

		marker.addTo(map);

		return () => {
			marker.remove();
		};

	}, [map, isLoaded, marker]);

	if (
		marker.getLngLat().lng !== longitude ||
		marker.getLngLat().lat !== latitude
	) {
		marker.setLngLat([longitude, latitude]);
	}
	if (marker.isDraggable() !== draggable) {
		marker.setDraggable(draggable);
	}

	const currentOffset = marker.getOffset();
	const newOffset = markerOptions.offset ?? [0, 0];
	const [newOffsetX, newOffsetY] = Array.isArray(newOffset)
		? newOffset
		: [newOffset.x, newOffset.y];
	if (currentOffset.x !== newOffsetX || currentOffset.y !== newOffsetY) {
		marker.setOffset(newOffset);
	}

	if (marker.getRotation() !== markerOptions.rotation) {
		marker.setRotation(markerOptions.rotation ?? 0);
	}
	if (marker.getRotationAlignment() !== markerOptions.rotationAlignment) {
		marker.setRotationAlignment(markerOptions.rotationAlignment ?? "auto");
	}
	if (marker.getPitchAlignment() !== markerOptions.pitchAlignment) {
		marker.setPitchAlignment(markerOptions.pitchAlignment ?? "auto");
	}

	return (
		<MarkerContext.Provider value={{ marker, map }}>
			{children}
		</MarkerContext.Provider>
	);
}

type MarkerContentProps = {

	children?: ReactNode;

	className?: string;
};

export function MarkerContent({ children, className }: MarkerContentProps) {
	const { marker } = useMarkerContext();

	return createPortal(
		<div className={cn("relative cursor-pointer", className)}>
			{children || <DefaultMarkerIcon />}
		</div>,
		marker.getElement(),
	);
}

function DefaultMarkerIcon() {
	return (
		<div className="relative h-4 w-4 rounded-full border-2 border-white bg-blue-500 shadow-lg" />
	);
}
