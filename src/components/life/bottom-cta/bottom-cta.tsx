import { ScheduleVisitForm } from "@/components/hostel-detail/schedule-visit-form/schedule-visit-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function BottomCta() {
	return (
		<section className="bg-[#f7f7f7] px-6 py-16 md:px-12 lg:px-20">
			<div
				className="mx-auto max-w-7xl rounded-[58px] px-8 py-16 text-center md:py-24"
				style={{
					background: "linear-gradient(to right, #330E32, #5D235C)",
				}}
			>
				<h2 className="mb-6 font-gilda text-[32px] text-white md:text-[48px] lg:text-[56px]">
					Thinking about your next place to live?
				</h2>

				<p className="mb-12 text-lg text-white/80 md:text-xl lg:text-[24px]">
					Don't just book a room. Experience the lifestyle you deserve.
				</p>

				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Dialog>
						<DialogTrigger
							render={
								<Button className="h-14 rounded-none bg-white px-10 text-[18px] font-bold text-yv-orange hover:bg-white/90" />
							}
						>
							Book a Visit
						</DialogTrigger>
						<DialogContent className="max-w-md border-none p-0">
							<ScheduleVisitForm />
						</DialogContent>
					</Dialog>
					<Button
						variant="outline"
						className="h-14 rounded-none border-2 border-white bg-transparent px-10 text-[18px] font-bold text-white hover:bg-white/10"
						onClick={() => {
							window.location.href = "tel:+917385777377";
						}}
					>
						Call Now
					</Button>
				</div>
			</div>
		</section>
	);
}
