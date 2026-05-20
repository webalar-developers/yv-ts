"use client";

import type MapLibreGL from "maplibre-gl";
import { createContext, useContext } from "react";

export type MarkerContextValue = {
	marker: MapLibreGL.Marker;
	map: MapLibreGL.Map | null;
};

export const MarkerContext = createContext<MarkerContextValue | null>(null);

export function useMarkerContext() {
	const context = useContext(MarkerContext);
	if (!context) {
		throw new Error("Marker components must be used within MapMarker");
	}
	return context;
}
