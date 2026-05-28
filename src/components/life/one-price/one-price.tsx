import { Check } from "lucide-react";

const features = [
	"Fully furnished A/C rooms",
	"Daily fresh meals",
	"Housekeeping & maintenance",
	"High-speed Wi-Fi",
	"24/7 Power backup",
	"Security & wardens",
	"Common areas & activity zones",
];

export function OnePrice() {
	return (
		<section className="flex min-h-[600px] flex-col overflow-hidden lg:flex-row">

			<div
				className="flex flex-1 flex-col justify-center px-6 py-16 md:px-12 lg:px-20"
				style={{
					background: "linear-gradient(to right, #FFFFFF 30%, #FBE2D9 100%)",
				}}
			>
				<h2 className="mb-12 font-gilda text-[36px] leading-[1.1] text-yv-dark-purple md:text-[44px] lg:text-[60px]">
					One price. <span className="text-yv-orange">Clear value.</span>
				</h2>

				<div className="mb-12 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
					{features.map((feature) => (
						<div key={feature} className="flex items-center gap-3">
							<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yv-orange">
								<Check className="h-4 w-4 text-white" strokeWidth={4} />
							</div>
							<span className="text-[16px] font-medium text-yv-dark-purple/80 md:text-[18px]">
								{feature}
							</span>
						</div>
					))}
				</div>

				<div className="relative max-w-lg rounded-r-none border-l-4 border-yv-orange bg-[#FFF7ED] p-6">
					<p className="text-[18px] font-medium text-yv-orange md:text-[20px]">
						"No separate bills. No last-minute add-ons."
					</p>
				</div>
			</div>

			<div className="flex-1">
				<img
					src="/shared/jpg/1.jpg"
					alt="Youthville Community"
					className="h-full min-h-[400px] w-full object-cover"
				/>
			</div>
		</section>
	);
}
