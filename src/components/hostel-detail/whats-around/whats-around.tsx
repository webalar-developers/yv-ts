import {
	Building2,
	Bus,
	GraduationCap,
	type LucideIcon,
	MapPin,
	Train,
	Trees,
} from "lucide-react";
import { use } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PROPERTY_TO_AREA } from "./property-to-area";
import type { PropertyNearbyDetails } from "./whats-around.types";

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

function iconFor(name: string): LucideIcon {
	const n = name.toLowerCase();
	if (/metro|station/.test(n)) return Train;
	if (/\bbus\b|bus stop/.test(n)) return Bus;
	if (/college|university|school|institute/.test(n)) return GraduationCap;
	if (/park|garden|club|golf/.test(n)) return Trees;
	if (
		/tech|corporate|business|tower|building|mall|hotel|marriot|carlton/.test(n)
	)
		return Building2;
	return MapPin;
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

export function WhatsAround({ propertyId }: { propertyId: string }) {
	const slug = PROPERTY_TO_AREA[propertyId];
	if (!slug) return null;
	const area = use(getWhatsAroundPromise(slug));
	if (!area) return null;

	const schools = [...(area.schoolsColleges ?? []), ...(area.colleges ?? [])];
	const workplaces = [
		...(area.companies ?? []),
		...(area.coworkingSpaces ?? []),
	];
	const connectivityItems = withOccurrenceKeys(
		area.connectivity,
		(item) => `connectivity-${item.name}-${item.distance ?? "na"}`,
	);
	const schoolItems = withOccurrenceKeys(schools, (name) => `school-${name}`);
	const workplaceItems = withOccurrenceKeys(
		workplaces,
		(name) => `workplace-${name}`,
	);

	return (
		<section>
			<h3 className="font-['Gilda_Display'] text-[27px] font-normal text-[#1f1a17]">
				What's around {area.displayName}
			</h3>

			<div className="mt-7 space-y-10">
				<div>
					{/* <p className="mb-4 text-xs font-bold tracking-[0.16em] text-[#766f6a] uppercase">
						Quick Access
					</p> */}
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						{/* {connectivityItems.map(({ item, key }) => {
							const Icon = iconFor(item.name);
							return (
								<Card
									key={key}
									className="rounded-xl border-0 bg-white py-0 ring-1 ring-[#eee2d7]"
								>
									<CardContent className="border-b-2 border-yv-orange px-6 py-6">
										<Icon className="size-5 text-yv-orange" />
										<p className="mt-5 text-[18px] font-bold text-[#231f1c]">
											{item.name}
										</p>
										{item.distance && (
											<p className="mt-2 text-[14px] font-normal text-[#766f6a]">
												{item.distance}
											</p>
										)}
									</CardContent>
								</Card>
							);
						})} */}
					</div>
				</div>

				{/* {schools.length > 0 && (
					<div>
						<p className="mb-4 text-xs font-bold tracking-[0.16em] text-[#766f6a] uppercase">
							Educational Institutions Nearby
						</p>
						<div className="flex flex-wrap gap-2">
							{schoolItems.map(({ item: name, key }) => (
								<span
									key={key}
									className="rounded-full bg-[#fbefe6] px-3 py-1.5 text-sm text-[#1f1a17]"
								>
									{name}
								</span>
							))}
						</div>
					</div>
				)} */}
{/*
				{workplaces.length > 0 && (
					<div>
						<p className="mb-4 text-xs font-bold tracking-[0.16em] text-[#766f6a] uppercase">
							Companies &amp; Workspaces
						</p>
						<div className="flex flex-wrap gap-2">
							{workplaceItems.map(({ item: name, key }) => (
								<span
									key={key}
									className="rounded-full bg-[#fbefe6] px-3 py-1.5 text-sm text-[#1f1a17]"
								>
									{name}
								</span>
							))}
						</div>
					</div>
				)} */}
			</div>
		</section>
	);
}
