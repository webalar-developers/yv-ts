import { CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const comparisons = [
	{ standard: "Safe & Secure Living", pg: "Safety concerns" },
	{ standard: "All-Inclusive Pricing", pg: "Hidden charges" },
	{ standard: "Clean & Hygienic Spaces", pg: "Poor maintenance" },
	{ standard: "Strong Community Culture", pg: "No community feeling" },
	{ standard: "Easy Booking & Support", pg: "Complicated processes" },
	{ standard: "Prime Locations", pg: "Limited locations" },
];

export function WhyYouthville() {
	return (
		<section className="bg-[#f5f3f0] px-6 py-16 md:px-10 md:py-20">
			{/* Centred two-line heading */}
			<h2 className="mb-12 text-center font-gilda text-[36px] leading-tight text-[#1f1a17] md:text-[52px]">
				Why Youthville is a
				<br />
				<span className="text-yv-orange">Smarter</span> Way to Live
			</h2>

			{/* Body */}
			<div className="mx-auto flex flex-col gap-6 lg:flex-row lg:items-stretch">
				{/* Left: image card — tall portrait */}
				<div className="relative w-full overflow-hidden rounded-3xl lg:w-[35%]">
					<img
						src="/life/png/why.png"
						alt="Youthville Building"
						className="absolute inset-0 h-full w-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
					<div className="relative z-10 flex h-full min-h-[640px] flex-col justify-end p-7">
						<Badge className="mb-3 w-fit rounded-md bg-yv-orange px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase hover:bg-yv-orange">
							The Youthville Standard
						</Badge>
						<p className="font-gilda text-[30px] leading-tight text-white">
							Elevating Student Living
						</p>
					</div>
				</div>

				{/* Right: comparison table — 3 distinct column tints */}
				<div className="grid w-full grid-cols-3 overflow-hidden rounded-2xl bg-white lg:w-[65%]">
					{/* Column 1: Feature */}
					<div className="flex flex-col">
						<div className="flex h-[88px] items-center bg-[#f9f9f9] px-6">
							<span className="text-[16px] font-medium text-[#1f1a17]">
								Feature
							</span>
						</div>
						{comparisons.map((item) => (
							<div
								key={item.standard}
								className="flex items-center px-6 py-5 md:py-8"
							>
								<span className="text-[16px] text-gray-600">
									{item.standard}
								</span>
							</div>
						))}
					</div>

					{/* Column 2: Youthville */}
					<div className="flex flex-col">
						<div className="flex h-[88px] items-center gap-2 bg-[#faf7f3] px-6">
							<span className="font-gilda text-[22px] text-[#1f1a17]">
								Youthville
							</span>
							<Badge className="rounded-md bg-yv-orange px-2 py-0.5 text-[9px] tracking-wider text-white hover:bg-yv-orange">
								BEST
							</Badge>
						</div>
						{comparisons.map((item) => (
							<div
								key={item.standard}
								className="flex items-center gap-2 bg-[#fefdfa] px-6 py-5 md:py-8"
							>
								<CheckCircle2 className="size-5 shrink-0 text-green-500" />
								<span className="text-[16px] text-green-600">
									{item.standard}
								</span>
							</div>
						))}
					</div>

					{/* Column 3: Traditional PGs */}
					<div className="flex flex-col">
						<div className="flex h-[88px] items-center bg-[#fefdfa] px-6">
							<span className="text-[16px] font-medium text-[#1f1a17]">
								Traditional PGs
							</span>
						</div>
						{comparisons.map((item) => (
							<div
								key={item.standard}
								className="flex items-center gap-2 px-6 py-5 md:py-8"
							>
								<XCircle className="size-5 shrink-0 text-red-400" />
								<span className="text-[16px] text-red-400">{item.pg}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
