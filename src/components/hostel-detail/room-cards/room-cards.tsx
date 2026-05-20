import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { PropertyRoom } from "./room-cards.types";

export function RoomCards({ rooms }: { rooms: PropertyRoom[] }) {
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
						<div className="grid grid-cols-1 md:grid-cols-[300px_1fr]">
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

								<div className="mt-auto flex flex-col gap-3 pt-3 md:flex-row md:items-center md:justify-between">
									<p className="text-[22px] font-bold text-yv-orange">
										₹{room.price.toLocaleString("en-IN")}
										<span className="ml-1.5 text-[16px] font-normal text-[#7d7671]">
											/ month
										</span>
									</p>
									<div className="flex items-center gap-2 md:gap-3">
										<Button
											variant="yv-orange"
											type="button"
											onClick={() => {
												window.open(
													"https://wa.me/919595200200",
													"_blank",
													"noopener,noreferrer",
												);
											}}
											className="h-10 flex-1 rounded-lg px-4 text-[16px] font-medium md:h-12 md:px-7"
										>
											Book Now
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
