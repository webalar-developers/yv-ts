import {
	BedDouble,
	GraduationCap,
	Heart,
	MapPin,
	Star,
	Users,
} from "lucide-react";
import type { ReactNode } from "react";
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

const TieIcon = ({ className }: { className?: string }) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={className}
		role="img"
		aria-labelledby="tie-icon-title"
	>
		<title id="tie-icon-title">Tie Icon</title>
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
	return (
		<div className="overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md">
			<div className="relative h-52 overflow-hidden md:h-70">
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

				<div className="absolute top-3 left-3 flex gap-2">
					<Badge
						variant={property.badgeVariant}
						className={cn(
							"flex h-9 items-center rounded-full px-4 text-[0.65rem] font-bold tracking-wide",
							onBadgeClick &&
								"cursor-pointer transition-transform hover:scale-105 active:scale-95",
						)}
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							onBadgeClick?.(property.badge);
						}}
					>
						{property.badge}
					</Badge>

					{/* Category Icon Pill */}
					<div className="flex size-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm">
						{property.category === "professional" ? (
							<TieIcon className="size-5 text-yv-orange" />
						) : (
							<GraduationCap className="size-5 text-yv-orange" />
						)}
					</div>
				</div>

				<button
					type="button"
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						onFavoriteToggle?.();
					}}
					className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-md bg-white/90 shadow-sm transition-all hover:bg-white hover:scale-110 active:scale-95"
				>
					<Heart
						className={cn(
							"size-5 transition-colors",
							property.isFavorited
								? "fill-red-500 text-red-500"
								: "text-gray-400",
						)}
					/>
				</button>

				{property.featureTags.length > 0 && (
					<div className="absolute bottom-3 left-3 flex gap-1.5">
						{property.featureTags.map((tag) => (
							<span
								key={tag}
								className="rounded-md bg-gray-800/50 px-3 py-2 text-[12px] font-medium text-white backdrop-blur-md"
							>
								{tag}
							</span>
						))}
					</div>
				)}
			</div>

			<div className="p-4">
				<div className="flex items-start justify-between">
					<Link
						to={`/hostels/${property.id}`}
						className="text-[20px] font-bold text-gray-900 transition-colors hover:text-yv-orange"
					>
						{property.name}
					</Link>
					<div className="flex items-center gap-1 rounded-md bg-green-100 p-1 text-[14px] font-bold text-green-600">
						{property.rating ? (
							<>
								{property.rating}
								<Star className="size-3.5 text-green-600" />
							</>
						) : property.ratingLabel ? (
							<>
								{property.ratingLabel}
								<Star className="size-3.5 text-gray-300" />
							</>
						) : null}
					</div>
				</div>

				<div className="mt-1 flex items-center gap-1 text-base text-gray-500">
					<MapPin className="size-3.5" />
					{property.location}
				</div>

				<div className="mt-4 flex flex-wrap gap-4 border-t border-gray-100 pt-3 md:mt-7 md:flex-nowrap md:items-start md:gap-7 md:pt-4">
					<DetailItem
						icon={<Users className="size-6 text-gray-400" />}
						label="GENDER"
						value={property.gender}
					/>
					{property.occupancy && (
						<DetailItem
							icon={<BedDouble className="size-6 text-gray-400" />}
							label="OCCUPANCY"
							value={property.occupancy}
						/>
					)}
					{property.proximity && (
						<DetailItem
							icon={
								<img
									src="/hostels/svg/icon-gym.svg"
									alt=""
									className="size-6"
								/>
							}
							label="PROXIMITY"
							value={property.proximity}
						/>
					)}
					{property.feature && (
						<DetailItem
							icon={
								<img
									src="/hostels/svg/icon-proximity.svg"
									alt=""
									className="size-6"
								/>
							}
							label="FEATURE"
							value={property.feature}
						/>
					)}
					{property.meals && (
						<DetailItem
							icon={
								<img
									src="/hostels/svg/icon-meals-gray.svg"
									alt=""
									className="size-6"
								/>
							}
							label="MEALS"
							value={property.meals}
						/>
					)}
				</div>

				<div className="mt-4 flex flex-col gap-3 md:mt-7 md:flex-row md:items-end md:justify-between">
					<div>
						<span className="text-[12px] font-bold tracking-widest text-gray-400">
							STARTS FROM
						</span>
						<p className="text-[22px] font-bold text-yv-orange">
							₹{property.price.toLocaleString("en-IN")}
							<span className="ml-1 text-[14px] font-normal text-gray-400">
								/mo
							</span>
						</p>
					</div>
					<div className="flex gap-2">
						<Dialog>
							<DialogTrigger
								render={
									<Button
										variant="yv-orange-outline"
										size="default"
										className="md:text-md flex-1 rounded-md p-4 text-[16px] font-medium md:flex-none md:p-6"
									/>
								}
							>
								Schedule a Visit
							</DialogTrigger>
							<DialogContent className="max-w-lg border-0 bg-transparent p-0 shadow-none sm:max-w-[500px]">
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
										className="md:text-md flex-1 rounded-md p-4 text-[16px] font-medium md:flex-none md:p-6"
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
		</div>
	);
}

function DetailItem({
	icon,
	label,
	value,
}: {
	icon: ReactNode;
	label: string;
	value: string;
}) {
	return (
		<div className="flex items-start gap-1.5">
			{icon}
			<div>
				<p className="text-[12px] font-normal tracking-wider text-gray-400">
					{label}
				</p>
				<p className="text-[14px] font-bold text-gray-800">{value}</p>
			</div>
		</div>
	);
}
