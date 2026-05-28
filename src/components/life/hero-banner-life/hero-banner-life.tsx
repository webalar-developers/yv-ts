import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ScheduleVisitForm } from "@/components/hostel-detail/schedule-visit-form/schedule-visit-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function HeroBannerLife() {
	const images = [
		"/life/png/collage-1.jpg",
		"/life/png/collage-2.jpg",
		"/life/png/collage-3.jpg",
		"/life/png/collage-4.jpg",
		"/life/png/collage-5.jpg",
	];
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	useEffect(() => {
		const intervalId = window.setInterval(() => {
			setActiveImageIndex((currentIndex) => (currentIndex + 1) % images.length);
		}, 4000);

		return () => window.clearInterval(intervalId);
	}, [images.length]);

	return (
		<section className="relative m-2 h-[50vh] min-h-[280px] overflow-hidden rounded-lg sm:m-5 sm:h-[60vh] md:min-h-[400px] lg:min-h-[500px]">
			<div className="absolute inset-0">
				{images.map((image, index) => (
					<img
						key={image}
						src={image}
						alt="Youthville life banner"
						className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
							index === activeImageIndex ? "opacity-100" : "opacity-0"
						}`}
						loading={index === 0 ? "eager" : "lazy"}
						decoding="async"
					/>
				))}
				<div className="absolute inset-0 bg-black/40" />
				<div
					className="absolute inset-0"
					style={{
						background: "linear-gradient(to right, #E8612D, #430F44)",
						opacity: 0.2,
					}}
				/>
			</div>

			<div className="relative flex h-full max-w-4xl flex-col items-start justify-center px-6 leading-none md:px-12 lg:px-20">
				<h2 className="mb-6 font-gilda text-[28px] text-white sm:text-[38px] md:text-[56px] lg:text-[83px]">
					Live fully, belong deeply, celebrate memorably
				</h2>
				<div>
					<Button
						variant="yv-orange"
						className="rounded-md px-4 py-4 text-[14px] font-medium sm:px-7 sm:py-7 sm:text-[16px]"
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
