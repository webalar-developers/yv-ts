import { ArrowRight, MessageCircle } from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		id: "day-to-day",
		question: "What will my day-to-day life look like here?",
		answer:
			"Think hassle-free living—clean rooms, fast WiFi, chill zones, gym access, and people around your age to connect with.",
	},
	{
		id: "privacy",
		question: "Will I get privacy even in shared rooms?",
		answer: "Yes, rooms are designed to balance sharing with personal space.",
	},
	{
		id: "chores",
		question: "How do I manage daily chores like laundry and cleaning?",
		answer:
			"Housekeeping is taken care of, and laundry (up to 10kg/month) is included—so you can focus on your routine.",
	},
	{
		id: "hidden-charges",
		question: "Are there any hidden charges I should worry about?",
		answer:
			"No—pricing is transparent. You'll know exactly what you're paying for.",
	},
	{
		id: "deposit",
		question: "What happens to my deposit when I move out?",
		answer: "It's refundable, subject to standard deductions if applicable.",
	},
	{
		id: "real-look",
		question: "Is this place actually as good as it looks online?",
		answer:
			"That's why we encourage visits and real resident feedback—you can experience it yourself before deciding.",
	},
];

export function FaqSection() {
	return (
		<section className="bg-white px-6 py-5 md:px-12 md:py-10">
			<div className="mx-auto max-w-7xl">
				<div className="grid gap-8 md:gap-16 lg:grid-cols-[1fr_1.5fr]">

					<div className="flex flex-col">
						<div className="mb-4 h-1 w-12 rounded-full bg-yv-orange" />
						<h2 className="mb-8 font-gilda text-[26px] leading-tight font-normal text-gray-900 sm:text-[34px] md:text-[40px] lg:text-5xl">
							Got Questions?
							<br />
							<span className="text-yv-orange">We've Got Answers.</span>
						</h2>

						<p className="mb-10 max-w-md text-[18px] leading-relaxed text-gray-500">
							Everything you need to know about staying at Youthville. If you
							can't find what you're looking for, feel free to reach out.
						</p>

						<div className="mt-auto rounded-3xl bg-gray-50 p-8">
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
									key={faq.id}
									value={faq.id}
									className="rounded-2xl border border-gray-100 bg-white px-6 transition-all hover:border-yv-orange/20 hover:shadow-sm data-[state=open]:border-yv-orange/30 data-[state=open]:shadow-md"
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
			</div>
		</section>
	);
}
