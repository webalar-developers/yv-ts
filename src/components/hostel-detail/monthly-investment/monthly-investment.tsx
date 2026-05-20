import { Card, CardContent } from "@/components/ui/card";
import type { InvestmentLineItem } from "./monthly-investment.types";

export function MonthlyInvestment({ items }: { items: InvestmentLineItem[] }) {
	return (
		<Card className="rounded-xl border-0 bg-[#faede4] py-0 ring-0">
			<CardContent className="px-8 py-8">
				<h3 className="font-['Gilda_Display'] text-[27px] font-normal text-[#1f1a17]">
					Monthly Investment
				</h3>

				<div className="mt-8 rounded-xl bg-transparent">
					<div className="grid grid-cols-[1fr_auto] border-b border-[#ead6c8] pb-4 text-[16px] font-bold tracking-[0.14em] text-[#231f1c] uppercase md:grid-cols-[1fr_auto]">
						<p>Item</p>
						<p>Amount</p>
					</div>

					{items.map((item) => (
						<div
							key={item.label}
							className="grid grid-cols-[1fr_auto] border-b border-[#eadfD5] py-3 text-[18px] font-normal text-[#655d58] md:py-5"
						>
							<p>{item.label}</p>
							<p className="text-[18px] font-medium text-[#231f1c]">
								₹{item.amount.toLocaleString("en-IN")}
							</p>
						</div>
					))}

					<div className="mt-4 grid grid-cols-[1fr_auto] rounded-sm bg-[#f8dfcf] px-4 py-5 text-yv-orange">
						<p className="text-[18px] font-bold">Total Monthly Investment</p>
						<p className="text-[20px] font-bold">
							₹
							{items
								.reduce((sum, item) => sum + item.amount, 0)
								.toLocaleString("en-IN")}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
