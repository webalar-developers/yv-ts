"use client";

import type MapLibreGL from "maplibre-gl";
import { createContext, useContext } from "react";

export type MapViewport = {

	center: [number, number];

	zoom: number;

	bearing: number;

	pitch: number;
};

export type MapStyleOption = string | MapLibreGL.StyleSpecification;
export type MapRef = MapLibreGL.Map;

export type MapContextValue = {
	map: MapLibreGL.Map | null;
	isLoaded: boolean;
};

export const MapContext = createContext<MapContextValue | null>(null);

export function useMap() {
	const context = useContext(MapContext);
	if (!context) {
		throw new Error("useMap must be used within a Map component");
	}
	return context;
}

export function getViewport(map: MapLibreGL.Map): MapViewport {
	const center = map.getCenter();
	return {
		center: [center.lng, center.lat],
		zoom: map.getZoom(),
		bearing: map.getBearing(),
		pitch: map.getPitch(),
	};
}
