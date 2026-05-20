export interface ConnectivityItem {
	name: string;
	distance: string | null;
}

export interface AreaNearby {
	displayName: string;
	connectivity: ConnectivityItem[];
	colleges?: string[];
	schoolsColleges?: string[];
	companies?: string[];
	coworkingSpaces?: string[];
}

export interface PropertyNearbyDetails {
	areas: Record<string, AreaNearby>;
	pricing: unknown[];
}

export type AreaSlug =
	| "balewadi"
	| "sbr"
	| "karve-nagar"
	| "yerwada"
	| "sancheti"
	| "kiwale";
