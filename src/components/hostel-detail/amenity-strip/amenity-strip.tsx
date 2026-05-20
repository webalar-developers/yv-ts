import { cn } from "@/lib/utils";
import type { PropertyFeature } from "./amenity-strip.types";

export function AmenityStrip({ amenities }: { amenities: PropertyFeature[] }) {
	return (
		<section
			id="amenities"
			className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
		>
			{amenities.map((item, index) => {
				// Create a checkerboard pattern for 4 columns
				const row = Math.floor(index / 4);
				const col = index % 4;
				const isPink = (row + col) % 2 === 0;

				return (
					<div
						key={item.label}
						className={cn(
							"relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-xl border p-7 transition-transform hover:-translate-y-1 hover:shadow-lg",
							isPink
								? "border-transparent bg-[#fdeee4]"
								: "border-[#f1dfd2] bg-white",
						)}
					>
						{/* Watermark Icon */}
						<div className="absolute bottom-2 right-4 opacity-[0.07] text-yv-orange pointer-events-none">
							{typeof item.icon === "string" ? (
								<img
									src={item.icon}
									alt=""
									className="size-24"
									style={{
										filter:
											"brightness(0) saturate(100%) invert(43%) sepia(50%) saturate(2339%) hue-rotate(349deg) brightness(98%) contrast(92%)",
									}}
									loading="lazy"
									decoding="async"
								/>
							) : (
								<item.icon className="size-24" strokeWidth={1.5} />
							)}
						</div>

						{/* Top Icon Container */}
						<div
							className={cn(
								"flex size-14 shrink-0 items-center justify-center rounded-2xl",
								isPink
									? "bg-white text-yv-orange shadow-sm"
									: "bg-[#fdeee4] text-yv-orange",
							)}
						>
							{typeof item.icon === "string" ? (
								<img
									src={item.icon}
									alt=""
									className="size-6"
									style={{
										filter:
											"brightness(0) saturate(100%) invert(43%) sepia(50%) saturate(2339%) hue-rotate(349deg) brightness(98%) contrast(92%)",
									}}
									loading="lazy"
									decoding="async"
								/>
							) : (
								<item.icon className="size-6" strokeWidth={2.5} />
							)}
						</div>

						{/* Content */}
						<div className="relative z-10 mt-6">
							<h4 className="font-['Gilda_Display'] text-[20px] font-normal leading-tight text-[#231f1c]">
								{item.label}
							</h4>
							{item.subtitle && (
								<p className="mt-2 text-[13px] font-medium text-[#766f6a]">
									{item.subtitle}
								</p>
							)}
						</div>
					</div>
				);
			})}
		</section>
	);
}
