import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function FaqCommon() {
	return (
		<section className="bg-white px-6 py-10 md:px-12 md:py-14">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{/* Left: Got Questions */}
				<div className="rounded-2xl border border-yv-orange/30 bg-white p-8">
					<h3 className="mb-3 text-[20px] font-bold text-[#1f1a17]">
						Got Questions?
					</h3>
					<p className="mb-6 text-[15px] leading-relaxed text-gray-500">
						Find quick answers to common queries about bookings, stays, and
						facilities in our comprehensive help center.
					</p>
					<Link
						to="/faq"
						className="group inline-flex items-center gap-2 text-[15px] font-semibold text-yv-orange"
					>
						View FAQs
						<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
					</Link>
				</div>

				{/* Right: Still have doubts */}
				<div className="rounded-2xl bg-[#fdf1eb] p-8">
					<h3 className="mb-3 text-[20px] font-bold text-[#1f1a17]">
						Still have doubts?
					</h3>
					<p className="mb-6 text-[15px] leading-relaxed text-gray-500">
						Our concierge is available 24/7 to help you out.
					</p>
					<a
						href="tel:+917768002049"
						className="group inline-flex items-center gap-2 text-[15px] font-semibold text-yv-orange"
					>
						Chat with us
						<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
					</a>
				</div>
			</div>
		</section>
	);
}
