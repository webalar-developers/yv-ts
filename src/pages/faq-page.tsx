import { FaqSection } from "@/components/shared/faq-section/faq-section";
import { usePageHead } from "@/hooks/use-page-head";

export function FaqPage() {
	usePageHead({
		title: "FAQ | Youthville Hostels",
		description:
			"Answers to common questions about Youthville Hostels — pricing, deposit, lock-in, food, visit policy, refunds, parents, and more.",
		keywords:
			"youthville faq, hostel pricing pune, hostel deposit, hostel food, hostel visit policy",
		path: "/faq",
	});

	return (
		<main className="pt-20">
			<div className="bg-yv-dark-purple py-20 text-center text-white">
				<h1 className="font-gilda text-5xl md:text-6xl">
					Frequently Asked Questions
				</h1>
				<p className="mt-4 text-white/70">
					Find answers to all your queries about life at Youthville
				</p>
			</div>
			<FaqSection />
		</main>
	);
}
