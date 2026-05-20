import { ArrowRight, MessageCircle } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "./faq-section.types";

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
	return (
		<section className="mt-20">
			<div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
				{/* Left Column: Heading and CTA */}
				<div className="flex flex-col">
					<div className="mb-4 h-1 w-12 rounded-full bg-yv-orange" />
					<h2 className="mb-8 font-gilda text-[40px] leading-tight font-normal text-gray-900 md:text-5xl">
						Frequent
						<br />
						<span className="text-yv-orange">Questions.</span>
					</h2>

					<p className="mb-10 max-w-md text-[18px] leading-relaxed text-gray-500">
						Everything you need to know about staying at this property. If you
						can't find what you're looking for, feel free to reach out.
					</p>

					<div className="mt-auto rounded-3xl bg-[#f8ebdf]/50 p-8 ring-1 ring-[#ead8ca]/50">
						<div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-white shadow-sm">
							<MessageCircle className="size-6 text-yv-orange" />
						</div>
						<h3 className="mb-2 text-xl font-bold text-gray-900">
							Still have doubts?
						</h3>
						<p className="mb-6 text-sm text-gray-500">
							Our concierge is available 24/7 to help you out with any queries
							you might have.
						</p>
						<a
							href="https://wa.me/917768002049"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-2 text-sm font-bold tracking-widest text-yv-orange uppercase"
						>
							Chat with us
							<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
						</a>
					</div>
				</div>

				{/* Right Column: Accordion List */}
				<div>
					<Accordion className="w-full space-y-4">
						{faqs.map((faq) => (
							<AccordionItem
								key={faq.question.slice(0, 20)}
								value={`faq-${faq.question.slice(0, 20)}`}
								className="rounded-2xl border border-[#eee7e2] bg-white px-6 transition-all hover:border-yv-orange/20 hover:shadow-sm data-[state=open]:border-yv-orange/30 data-[state=open]:shadow-md"
							>
								<AccordionTrigger className="py-6 text-left text-lg font-medium text-gray-900 hover:no-underline">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="pb-6 text-base leading-relaxed text-gray-600">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
