import { Card, CardContent } from "@/components/ui/card";

export function OverviewSection({
	overview,
	whyChooseTitle,
	whyChooseQuote,
}: {
	overview: string;
	whyChooseTitle: string;
	whyChooseQuote: string;
}) {
	return (
		<div id="overview">
			<p className="max-w-4xl text-base text-[#6a6663] md:text-[1.3rem]">
				{overview}
			</p>

			<Card className="mt-10 rounded-xl border-0 bg-[#faede4] py-0 ring-0">
				<CardContent className="border-l-4 border-yv-orange px-8 py-8">
					<h2 className="font-['Gilda_Display'] text-[22px] font-normal text-[#1f1a17]">
						{whyChooseTitle}
					</h2>
					<p className="mt-4 text-[18px] leading-7 font-normal text-[#5f5955] italic">
						"{whyChooseQuote}"
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
