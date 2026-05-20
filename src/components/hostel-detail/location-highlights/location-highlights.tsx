import { Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { LocationHighlight } from "./location-highlights.types";
import { PROPERTY_TO_AREA } from "../whats-around/property-to-area";
import { use } from "react";
import type { PropertyNearbyDetails } from "../whats-around/whats-around.types";
const whatsAroundCache = new Map<
	string,
	Promise<PropertyNearbyDetails["areas"][string] | null>
>();

let propertyNearbyDetailsPromise: Promise<PropertyNearbyDetails> | null = null;

function getPropertyNearbyDetailsPromise() {
	if (!propertyNearbyDetailsPromise) {
		propertyNearbyDetailsPromise = fetch("/property-nearby-details.json").then(
			async (response) => {
				if (!response.ok) {
					throw new Error("Failed to load nearby property details.");
				}

				return (await response.json()) as PropertyNearbyDetails;
			},
		);
	}

	return propertyNearbyDetailsPromise;
}


function getWhatsAroundPromise(slug: string) {
	const cachedPromise = whatsAroundCache.get(slug);
	if (cachedPromise) return cachedPromise;

	const promise = getPropertyNearbyDetailsPromise().then(
		(data) => data.areas[slug] ?? null,
	);
	whatsAroundCache.set(slug, promise);
	return promise;
}

function withOccurrenceKeys<T>(
	items: T[],
	getBaseKey: (item: T) => string,
): Array<{ item: T; key: string }> {
	const totals = new Map<string, number>();
	for (const item of items) {
		const baseKey = getBaseKey(item);
		totals.set(baseKey, (totals.get(baseKey) ?? 0) + 1);
	}

	const seen = new Map<string, number>();
	return items.map((item) => {
		const baseKey = getBaseKey(item);
		const nextCount = (seen.get(baseKey) ?? 0) + 1;
		seen.set(baseKey, nextCount);

		return {
			item,
			key: (totals.get(baseKey) ?? 0) > 1 ? `${baseKey}-${nextCount}` : baseKey,
		};
	});
}

export function LocationHighlights({
	highlights,
	propertyId,
}: {
	highlights: LocationHighlight[];
	propertyId: string;
}) {
	const slug = PROPERTY_TO_AREA[propertyId];
		if (!slug) return null;
		const area = use(getWhatsAroundPromise(slug));
		if (!area) return null;
		const connectivityItems = withOccurrenceKeys(
			area.connectivity,
			(item) => `connectivity-${item.name}-${item.distance ?? "na"}`,
		);
	return (
		<section>
			<h3 className="font-['Gilda_Display'] text-[27px] font-normal text-[#1f1a17]">
				Prime Location &amp; Connectivity
			</h3>
			<div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
				{highlights.map((item) => (
					<Card
						key={item.title}
						className="rounded-xl border-0 bg-[#fbefe6] py-0 ring-1 ring-[#f1dfd2]"
					>
						<CardContent className="border-b-2 border-yv-orange px-6 py-6">
								<div className="flex size-10 items-center justify-center rounded-full bg-yv-orange/10">
								<Navigation className="size-4 text-yv-orange" />
							</div>
							<p className="mt-5 text-[18px] font-bold text-[#231f1c]">
								{item.title}
							</p>
							<p className="mt-2 text-[14px] font-normal text-[#766f6a]">
								{item.subtitle}
							</p>
						</CardContent>
					</Card>
				))}
				{connectivityItems.map(({ item, key }) => (
					<Card
						key={key}
						className="rounded-xl border-0 bg-[#fbefe6] py-0 ring-1 ring-[#f1dfd2]"
					>
						<CardContent className="border-b-2 border-yv-orange px-6 py-6">
							<div className="flex size-10 items-center justify-center rounded-full bg-yv-orange/10">
								<Navigation className="size-4 text-yv-orange" />
							</div>
							<p className="mt-5 text-[18px] font-bold text-[#231f1c]">
								{item.name}
							</p>
							<p className="mt-2 text-[14px] font-normal text-[#766f6a]">
								{item.distance ?? "Nearby"}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
