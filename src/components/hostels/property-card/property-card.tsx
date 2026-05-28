import {
	BedDouble,
	GraduationCap,
	Heart,
	MapPin,
	Star,
	Users,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import type { PropertyListing } from "@/components/hostel-detail/property-listing/property-listing.types";
import { ScheduleVisitForm } from "@/components/hostel-detail/schedule-visit-form/schedule-visit-form";
import { AppStoreButtons } from "@/components/shared/app-store-buttons/app-store-buttons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectTrigger, SelectItem } from "#/components/ui/select";

const TieIcon = ({ className }: { className?: string }) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}
		aria-label="Professional tie icon"
	>
		<title>Professional</title>
		<path d="M9 2h6l1 5-4 3-4-3 1-5z" />
		<path d="M12 10l3 12-3-2-3 2 3-12z" />
	</svg>
);

export function PropertyCard({
	property,
	onBadgeClick,
	onFavoriteToggle,
}: {
	property: PropertyListing;
	onBadgeClick?: (badge: string) => void;
	onFavoriteToggle?: () => void;
}) {
	const isStudentHousing = property.badge.toLowerCase() === "student housing";
	const badgeTone = isStudentHousing ? "bg-[#E8612D]" : "bg-[#709E32]";

	const [selectedRoomId, setSelectedRoomId] = useState<string | null>(
		property.rooms?.[0]?.id?.toString() ?? null,
	);

	const selectedRoom =
		property.rooms?.find((r) => String(r.id) === selectedRoomId) ?? property.rooms?.[0];
	const displayPrice = selectedRoom?.price ?? property.price;
	const hasDisplayPrice = (displayPrice ?? 0) > 0;
	const hasGirlsAndBoysFloors = property.gender.includes("Male") && property.gender.includes("Female");
	const floorAccessLabel = hasGirlsAndBoysFloors
		? "Floors for Girls & Boys"
		: property.gender.includes("Only Girls")
			? "Girls Only Floors"
			: `${property.gender.join(" & ")} Floors`;

	return (
		<div className="overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
			<div className="relative h-64 overflow-hidden sm:h-72 md:h-75">
				<Link
					to={`/hostels/${property.id}`}
					aria-label={property.name}
					className="block h-full w-full"
				>
					<img
						src={property.image}
						alt={property.name}
						className="h-full w-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
						loading="lazy"
						decoding="async"
					/>
				</Link>

				<div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-3">
					<div className="flex min-w-0 items-center gap-2">
						<div className="group relative">

						</div>

					</div>

				</div>
			</div>

			<div className="space-y-3 p-5">
				<div className="flex items-start justify-between">
					<Link
						to={`/hostels/${property.id}`}
						className="pr-3 text-[20px] leading-tight font-bold text-gray-900 transition-colors hover:text-yv-orange sm:text-[21px]"
					>
						{property.name}
					</Link>
					<div className="flex shrink-0 items-center gap-1 rounded-xl bg-[#E9FCEB] px-2.5 py-1.5 text-[14px] font-bold text-[#20B14B]">
						4.8
						<Star className="size-4 fill-current" />
					</div>
				</div>

				<div className="-mt-1 flex items-center gap-1 text-[15px] text-gray-500">
					<MapPin className="size-3.5" />
					{property.location}
				</div>

				<div className="flex items-center justify-between gap-2 border-t border-gray-100 pt-2">
					<div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">

						{property.occupancy && (
							<DetailTooltip
								icon={<BedDouble className="size-4 text-gray-400" />}
								value={property.occupancy}
							/>
						)}
						<DetailTooltip
							icon={
								property.category === "professional" ? (
									<TieIcon className="size-4 text-gray-400" />
								) : (
									<GraduationCap className="size-4 text-gray-400" />
								)
							}
							value={property.category === "professional" ? "Professional" : "Student"}
						/>
						<div className="group relative min-w-0">
							<div className="inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-linear-to-r from-[#FFF7F2] to-white px-2 py-1.5 text-[11px] font-semibold text-gray-700 shadow-sm transition-colors hover:border-yv-orange">
								<Users className="size-3.5 shrink-0 text-yv-orange" />
								<span className="truncate">{floorAccessLabel}</span>
							</div>
						</div>
					</div>

					<div className="shrink-0 text-right">
						<span className="block text-[10px] font-bold tracking-widest text-gray-400">
							STARTS FROM
						</span>
						<p className="mt-0 text-[14px] font-bold text-yv-orange xl:text-[17px]">

							<Select
								value={selectedRoomId ?? undefined}
								onValueChange={(val) => setSelectedRoomId(val)}
							>
								<SelectTrigger className="border-none">
									{hasDisplayPrice
										? `₹${displayPrice.toLocaleString("en-IN")}*`
										: "Coming Soon"}
									{hasDisplayPrice && (
										<span className="ml-1 text-[12px] font-normal text-gray-400">
											/mo
										</span>
									)}
								</SelectTrigger>
								<SelectContent className="min-w-2 w-24">
									{property.rooms?.map((item) => (
										<SelectItem
											key={item.id}
											value={String(item.id)}
											title={`${item.title} - ₹${item.price.toLocaleString("en-IN")}*/mo`}
											className="flex items-center gap-4 justify-center py-2 px-2"
										>
											<span className="text-sm font-medium text-gray-900">
												₹{item.price.toLocaleString("en-IN")}{"*"}
											</span>
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
					<Dialog>
						<DialogTrigger
							render={
								<Button
									variant="yv-orange-outline"
									size="default"
									className="h-12 w-full rounded-md px-4 text-[16px] font-medium"
								/>
							}
						>
							Schedule a Visit
						</DialogTrigger>
						<DialogContent className="max-w-lg border-0 bg-transparent p-0 shadow-none sm:max-w-125">
							<DialogHeader className="sr-only">
								<DialogTitle>Schedule a Visit</DialogTitle>
							</DialogHeader>
							<ScheduleVisitForm />
						</DialogContent>
					</Dialog>

					<Dialog>
						<DialogTrigger
							render={
								<Button
									variant="yv-orange"
									size="default"
									className="h-12 w-full rounded-md px-4 text-[16px] font-medium"
								/>
							}
						>
							Book Now
						</DialogTrigger>
						<DialogContent className="max-w-md bg-white p-8">
							<DialogHeader>
								<DialogTitle className="font-gilda text-2xl text-yv-dark-purple">
									Download Our App
								</DialogTitle>
							</DialogHeader>
							<div className="mt-6 flex flex-col gap-4">
								<p className="text-center text-gray-600">
									Download the Youthville app to book your room instantly and
									manage your stay.
								</p>
								<AppStoreButtons className="mx-auto mt-2" />
							</div>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	);
}

function DetailTooltip({ icon, value }: { icon: ReactNode; value: string }) {
	return (
		<div className="group relative">
			<div className="flex size-9 items-center justify-center rounded-md border border-gray-200 bg-white transition-colors hover:border-yv-orange">
				{icon}
			</div>
			<div className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-10 -translate-x-1/2 rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
				{value}
			</div>
		</div>
	);
}
