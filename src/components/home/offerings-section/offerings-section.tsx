import { useState } from "react";
import { GalleryDialog } from "./gallery-dialog";
import { offerings } from "./offerings-section.data";

export function OfferingsSection() {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	return (
		<section className="w-full bg-[#ed6f34] px-6 py-12 md:px-10 md:py-14">
			<div className="w-full">
				{/* Section Header */}
				<div className="mb-10">
					<div className="mb-3 h-1 w-12 bg-[#a3d356]" />
					<h2 className="font-gilda text-[40px] font-normal text-white md:text-4xl">
						Thoughtful Offerings
					</h2>
				</div>

				{/* Offerings Grid */}
				<div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
					{offerings.map((offering, i) => (
						<button
							type="button"
							key={offering.title}
							onClick={() => setSelectedIndex(i)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									setSelectedIndex(i);
								}
							}}
							className={`group relative cursor-pointer overflow-hidden rounded-md text-left ${offering.span} ${offering.span.includes("row-span") ? "h-56 md:h-auto" : "h-56 md:h-80"}`}
						>
							<img
								src={offering.image}
								alt={offering.title || "Offering"}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
								loading="lazy"
								decoding="async"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />

							<div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 group-hover:bg-[#1f1a17]/80">
								<div className="mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
									{offering.icon && (
										<offering.icon className="mb-1.5 size-11 text-white/80" />
									)}
									{offering.title && (
										<h3 className="text-[20px] font-semibold text-white md:text-2xl">
											{offering.title}
										</h3>
									)}
								</div>

								{offering.description && (
									<p className="max-h-0 overflow-hidden text-sm leading-relaxed text-white/90 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
										{offering.description}
									</p>
								)}
							</div>
						</button>
					))}
				</div>
			</div>

			<GalleryDialog
				isOpen={selectedIndex !== null}
				onClose={() => setSelectedIndex(null)}
				offerings={offerings}
				initialIndex={selectedIndex ?? 0}
			/>
		</section>
	);
}
