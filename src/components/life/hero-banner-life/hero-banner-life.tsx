import { ArrowDown, ArrowRight } from "lucide-react";
import { ScheduleVisitForm } from "@/components/hostel-detail/schedule-visit-form/schedule-visit-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function HeroBannerLife() {
	return (
		<section className="relative m-5 h-[60vh] min-h-[500px] overflow-hidden rounded-lg">
			{/* Background image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('/life/png/hero-life.png')",
				}}
			>
				<div className="absolute inset-0 bg-black/40" />
				<div
					className="absolute inset-0"
					style={{
						background: "linear-gradient(to right, #E8612D, #430F44)",
						opacity: 0.2,
					}}
				/>
			</div>

			{/* Content */}
			<div className="relative flex h-full max-w-4xl flex-col items-start justify-center px-6 leading-[1] md:px-12 lg:px-20">
				<h2 className="mb-6 font-gilda text-[56px] text-white lg:text-[83px]">
					Live fully, belong deeply, celebrate memorably
				</h2>
				<div>
					<Button
						variant="yv-orange"
						className="rounded-md px-7 py-7 text-[16px] font-medium"
						onClick={() => {
							window.location.href = "tel:+917385777377";
						}}
					>
						Make a Call
						<ArrowRight className="ml-2 size-7" />
					</Button>
					<Dialog>
						<DialogTrigger
							render={
								<Button className="ml-3 rounded-md bg-white px-7 py-7 text-[16px] font-medium text-yv-dark-purple" />
							}
						>
							Book a visit
						</DialogTrigger>
						<DialogContent className="max-w-md border-none p-0">
							<ScheduleVisitForm />
						</DialogContent>
					</Dialog>
				</div>
			</div>

			<a href="#build-grid" className="absolute inset-x-0 bottom-6 flex justify-center">
				<div className="absolute right-8 bottom-8 flex size-12 animate-bounce items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg">
				<ArrowDown className="size-5" />
			</div>
			</a>
		</section>
	);
}
