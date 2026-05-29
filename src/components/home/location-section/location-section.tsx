import { MapPin, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const filters = [
	{ label: "Pune", color: "bg-yv-orange" },
	{ label: "SB Road", color: "bg-yv-orange" },
	{ label: "YV SB Road", color: "bg-yv-orange" },
	{ label: "Student Housing", color: "bg-yv-orange" },
];

const properties = [
	{
		image: "/home/png/loc3.png",
		name: "YV SB Road Uno",
		location: "Shivajinagar, Central Pune",
		badge: "Student Housing",
		tag: "TOP STAY",
		price: "22,500",
	},
	{
		image: "/home/png/loc2.png",
		name: "YV Karve Nagar",
		location: "Karve Nagar, Pune",
		badge: "Co-Living",
		price: "18,000",
	},
	{
		image: "/home/png/loc1.png",
		name: "YV Balewadi Uno",
		location: "Balewadi, Pune",
		badge: "Co-Living",
		price: "20,000",
	},
];

export function LocationSection() {
	return (
		<section className="px-6 py-5 md:px-10 md:py-10">
			<div className="mx-auto">

				<div className="mb-2 text-center">
					<div className="mx-auto mb-3 h-0.5 w-10 rounded-sm bg-[#ff5a3c]" />
					<h2 className="font-gilda text-[24px] font-normal text-[#1f1f1f] sm:text-[32px] md:text-[40px]">
						Close to Colleges. Close to Work. Close to Life.
					</h2>
				</div>

				<div className="grid gap-0 overflow-hidden shadow-lg md:grid-cols-2">

					<div className="bg-[#f7f7f7]">

						<div className="m-5 border-b bg-white p-6">
							<div className="mb-4 flex flex-wrap items-center gap-2">
								<span className="text-[5.5px] font-bold tracking-wider text-gray-400 uppercase">
									Applied:
								</span>
								{filters.map((filter, i) => (
									<>
										<Badge
											key={filter.label}
											className="gap-1.5 rounded-full bg-yv-orange px-2 py-1 text-[6.6px] text-white"
										>
											{filter.label}
											<X className="size-3.5 cursor-pointer" />
										</Badge>
										{i < filters.length - 1 && (
											<span className="text-gray-300">›</span>
										)}
									</>
								))}
								<button
									type="button"
									className="ml-auto text-[6.6px] font-semibold text-yv-orange"
								>
									Clear all
								</button>
							</div>

							<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
								{[
									{ label: "SELECT CITY", value: "Pune" },
									{ label: "SELECT LOCALITY", value: "SB Road" },
									{ label: "SELECT PROPERTY", value: "Select Property" },
									{ label: "SELECT CATEGORY", value: "Select Category" },
								].map((dropdown) => (
									<div key={dropdown.label}>
										<p className="mb-1.5 text-[5.2px] font-medium tracking-wider text-gray-500 uppercase">
											{dropdown.label}
										</p>
										<Select defaultValue={dropdown.value}>
											<SelectTrigger className="h-11 w-full rounded-full border-[#FFEDEB] bg-[#FFEDEB] text-[7.7px] text-yv-orange">
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value={dropdown.value}>
													{dropdown.value}
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								))}
							</div>
						</div>

						<div className="m-5 divide-y">
							{properties.map((property) => (
								<div
									key={property.name}
									className="mt-5 mb-5 flex gap-5 bg-white p-5"
								>
									<div className="h-24 w-28 flex-shrink-0 overflow-hidden rounded-lg sm:h-36 sm:w-40">
										<img
											src={property.image}
											alt={property.name}
											className="h-full w-full object-cover"
											loading="lazy"
											decoding="async"
										/>
									</div>
									<div className="flex-1">
										<div className="flex items-start justify-between">
											<h3 className="text-[20px] font-semibold text-yv-orange">
												{property.name}
											</h3>
											{property.tag && (
												<Badge className="rounded-none bg-yv-orange px-4 py-1.5 text-xs font-bold text-white">
													{property.tag}
												</Badge>
											)}
										</div>
										<p className="mt-1 flex items-center gap-1.5 text-[12px] text-gray-500">
											<MapPin className="size-4" />
											{property.location}
										</p>
										<Badge
											variant="outline"
											className="mt-2 rounded-full border-gray-300 px-3 py-0.5 text-[10px] font-bold text-gray-600"
										>
											{property.badge}
										</Badge>
										<p className="mt-2 text-[10px] font-medium text-yv-orange">
											Starts at
										</p>
										<p className="text-[19px] font-bold text-[#1f1f1f]">
											₹{property.price}{"*"}
											<span className="text-[12px] font-normal text-gray-500">
												/mo
											</span>
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="relative block h-[400px] overflow-hidden bg-gray-100 md:h-auto">
						<iframe
							title="Youthville Hostel Pune Location Map"
							className="absolute inset-0 h-full w-full contrast-[1.1] grayscale-[20%]"
							src="https://www.google.com/maps?q=Youthville+Hostel+Pune&output=embed"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>

						<div className="absolute bottom-6 left-6 rounded-lg border border-gray-100 bg-white/95 p-4 shadow-xl backdrop-blur-sm">
							<p className="mb-2 text-[10px] font-bold tracking-wider text-yv-orange uppercase">
								Location Legend
							</p>
							<div className="flex items-center gap-2">
								<div className="size-2.5 rounded-full bg-green-500" />
								<span className="text-xs font-medium text-gray-700">
									Operational Hostels
								</span>
							</div>
							<div className="mt-1.5 flex items-center gap-2">
								<div className="size-2.5 rounded-full bg-red-500" />
								<span className="text-xs font-medium text-gray-700">
									Coming Soon
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
