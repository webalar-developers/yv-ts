import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PropertyRoom } from "./room-cards.types";
import { Dialog, DialogContent, DialogTrigger } from "#/components/ui/dialog";
import { ScheduleVisitForm } from "../schedule-visit-form/schedule-visit-form";

export function RoomCards({ rooms }: { rooms: PropertyRoom[] }) {
	const handleVisitProperty = () => {
		window.location.href = "/contact";
	};

	const handleScheduleVisit = () => {
		window.location.href = "/contact#location";
	};

	const handleEnquireNow = () => {
		window.open("https://wa.me/919595200200", "_blank", "noopener,noreferrer");
	};

	return (
		<section id="rooms" className="mt-16">
			<h2 className="font-['Gilda_Display'] text-[27px] font-normal text-[#1f1a17]">
				Availability &amp; Room Types
			</h2>
			<div className="mt-7 space-y-5">
				{rooms.map((room) => (
					<Card
						key={room.id}
						className="overflow-hidden rounded-sm border-0 bg-white py-0 ring-black/6"
					>
						<div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
							<img
								src={room.image}
								alt={room.title}
								className="h-48 w-full object-cover md:h-full md:min-h-44"
								loading="lazy"
								decoding="async"
							/>
							<div className="flex flex-col gap-3 p-4 md:p-6">
								<div className="flex items-start justify-between">
									<h3 className="font-['Gilda_Display'] text-[22px] font-normal text-[#1f1a17]">
										{room.title}
									</h3>
									{room.tag && (
										<span className="rounded-sm bg-[#fff1e9] px-4 py-1.5 text-[0.7rem] font-bold tracking-wider text-yv-orange uppercase">
											{room.tag}
										</span>
									)}
								</div>

								<p className="text-[16px] font-normal text-[#0c0b0aa5]">
									{room.description}
								</p>

								{room.meta && room.meta.length > 0 && (
									<div className="flex flex-wrap gap-8 text-[14px] font-medium tracking-[0.16em] text-[#5a5450] uppercase">
										{room.meta.map((item) => (
											<span key={item}>{item}</span>
										))}
									</div>
								)}

								<div className="mt-auto flex flex-col gap-3 pt-3">
									<p className="text-[22px] font-bold text-yv-orange">
										₹{room.price.toLocaleString("en-IN")}{"*"}
										<span className="ml-1.5 text-[16px] font-normal text-[#7d7671]">
											/ month
										</span>
									</p>
									<div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
										<Button
											variant="yv-orange"
											type="button"
											onClick={handleVisitProperty}
											className="h-10 w-full px-4 text-[15px] font-semibold shadow-[0_14px_30px_rgba(232,109,51,0.24)]"
										>
											Visit Property
										</Button>
										<Dialog>
											<DialogTrigger className="w-full">
												<Button
													variant="yv-orange-outline"
													type="button"
													className="h-10 w-full px-4 text-[15px] font-semibold shadow-sm"
												>
													Schedule Visit
												</Button>
											</DialogTrigger>
											<DialogContent className="max-w-lg border-0 bg-transparent p-0 shadow-none sm:max-w-[500px]">
												<ScheduleVisitForm />
											</DialogContent>
										</Dialog>
										<Button
											variant="yv-orange"
											type="button"
											onClick={handleEnquireNow}
											className="h-10 w-full bg-[#1f1a17] px-4 text-[15px] font-semibold text-white shadow-[0_14px_30px_rgba(31,26,23,0.22)] hover:bg-[#2d2622]"
										>
											Enquire Now
										</Button>
									</div>
								</div>
							</div>
						</div>
					</Card>
				))}
			</div>
		</section>
	);
}
