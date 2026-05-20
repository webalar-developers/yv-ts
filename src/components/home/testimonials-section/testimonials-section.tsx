import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";
import { featuredVideo, testimonials } from "./testimonials-section.data";

const CARDS_PER_PAGE = 3;

export function TestimonialsSection() {
	const [page, setPage] = useState(0);
	const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
	const visible = testimonials.slice(
		page * CARDS_PER_PAGE,
		page * CARDS_PER_PAGE + CARDS_PER_PAGE,
	);

	const prev = () => setPage((p) => Math.max(0, p - 1));
	const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

	return (
		<section className="w-full bg-white px-6 py-16 md:py-24">
			<div className="w-fulll mx-auto">
				<div className="mb-12 text-center">
					<div className="mx-auto mb-3 h-1 w-12 bg-yv-orange" />
					<h2 className="font-gilda text-[40px] font-normal text-gray-900 md:text-4xl">
						Choosen, Trusted, Recommended.
					</h2>
					<p className="font-gilda text-[40px] font-normal text-gray-900 md:text-4xl">
						Instead of Real People Real Experience
					</p>
				</div>

				<div className="relative px-14">
					{/* Left Chevron */}
					<button
						type="button"
						onClick={prev}
						disabled={page === 0}
						className="absolute top-1/2 left-0 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-md bg-orange-100/60 transition-colors hover:bg-orange-100 disabled:opacity-30"
					>
						<ChevronLeft className="size-6 bg-[#FEEFE8] text-gray-700" />
					</button>

					<div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
						{visible.map((t, i) => {
							const isCenter = i === 1;
							return (
								<div key={t.name} className="flex flex-col items-center">
									{/* Center: Video + overlapping card */}
									{isCenter && (
										<div className="relative aspect-[4/4] w-full overflow-hidden rounded-none">
											<img
												src={featuredVideo.image}
												alt={featuredVideo.alt}
												className="h-full w-full object-cover"
												loading="lazy"
												decoding="async"
											/>
											<div className="absolute inset-0 bg-black/15" />
											<button
												type="button"
												className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-white/90 shadow-lg transition-transform hover:scale-110"
											>
												<Play
													className="size-6 text-gray-800"
													fill="currentColor"
												/>
											</button>
										</div>
									)}

									{/* Testimonial Card */}
									<div
										className={`rounded-none bg-white shadow-lg ${
											t.name === "Niharika"
												? "relative z-10 mx-8 -mt-28 w-full max-w-[280px] p-4"
												: `w-full ${isCenter ? "relative z-10 mx-12 -mt-24 p-5" : "p-8"}`
										}`}
									>
										<svg
											width="48"
											height="36"
											viewBox="0 0 48 36"
											fill="none"
											className="z-10 mb-4"
											aria-label="Quote icon"
										>
											<title>Quote</title>
											<text
												x="0"
												y="76"
												fontSize="100"
												fontFamily="serif"
												fill="#F4A7A7"
											>
												&#x201D;
											</text>
										</svg>
										<p className="text-[14px] leading-relaxed text-gray-600">
											&ldquo;{t.quote}&rdquo;
										</p>
										<div className="mt-8 flex items-center gap-3">
											<img
												src={t.avatar}
												alt={t.name}
												className="size-12 rounded-full object-cover"
												loading="lazy"
												decoding="async"
											/>
											<div>
												<p className="text-[14px] font-bold text-gray-900">
													{t.name}
												</p>
												<p className="text-[12px] text-gray-500">{t.role}</p>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>

					{/* Right Chevron */}
					<button
						type="button"
						onClick={next}
						disabled={page === totalPages - 1}
						className="absolute top-1/2 right-0 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-md bg-orange-100/60 transition-colors hover:bg-orange-100 disabled:opacity-30"
					>
						<ChevronRight className="size-6 text-gray-700" />
					</button>
				</div>

				{/* Pagination dots */}
				<div className="mt-8 flex justify-center gap-2">
					{Array.from({ length: totalPages }).map((_, i) => {
						const pageKey = `page${i}`;
						return (
							<button
								type="button"
								key={pageKey}
								onClick={() => setPage(i)}
								className={`h-2 rounded-md transition-all ${
									i === page ? "w-6 bg-yv-orange" : "w-2 bg-gray-300"
								}`}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
