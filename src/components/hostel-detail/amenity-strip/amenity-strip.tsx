import { cn } from "@/lib/utils";
import type { PropertyFeature } from "./amenity-strip.types";

export function AmenityStrip({ amenities }: { amenities: PropertyFeature[] }) {
	return (
		<section
			id="amenities"
			className="mt-8 grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-4"
		>
			{amenities.map((item, index) => {

				const row = Math.floor(index / 4);
				const col = index % 4;
				const isPink = (row + col) % 2 === 0;

				return (
					<div
						key={item.label}
						className={cn(
							"relative flex min-h-30 flex-col justify-between overflow-hidden rounded-xl border p-4 transition-transform hover:-translate-y-1 hover:shadow-lg",
							isPink
								? "border-transparent bg-[#fdeee4]"
								: "border-[#f1dfd2] bg-white",
						)}
					>

						<div className="absolute bottom-2 right-4 opacity-[0.07] text-yv-orange pointer-events-none">
							{typeof item.icon === "string" ? (
								<img
									src={item.icon}
									alt=""
									className="size-16"
									style={{
										filter:
											"brightness(0) saturate(100%) invert(43%) sepia(50%) saturate(2339%) hue-rotate(349deg) brightness(98%) contrast(92%)",
									}}
									loading="lazy"
									decoding="async"
								/>
							) : (
								<item.icon className="size-16" strokeWidth={1.5} />
							)}
						</div>

						<div
							className={cn(
								"flex size-10 shrink-0 items-center justify-center rounded-xl",
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
								<item.icon className="size-5" strokeWidth={2.5} />
							)}
						</div>

						<div className="relative z-10 mt-3">
							<h4 className="font-['Gilda_Display'] text-[16px] font-normal leading-tight text-[#231f1c]">
								{item.label}
							</h4>
							{item.subtitle && (
								<p className="mt-1 text-[12px] font-medium text-[#766f6a]">
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
