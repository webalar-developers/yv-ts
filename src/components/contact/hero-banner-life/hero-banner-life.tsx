import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "../contact-form";

export function HeroBannerContact() {
	return (
		<section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
			{/* Background image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('/contact/jpg/contact-hero.jpg')",
				}}
			>
				<div className="absolute inset-0 bg-black/40" />
				<div
					className="absolute inset-0"
					style={{
						background: "linear-gradient(to bottom, #E8612D, #521751)",
						opacity: 0.3,
					}}
				/>
			</div>

			{/* Content */}
			<div className="relative flex h-full max-w-5xl flex-col items-start justify-center px-6 md:px-12 lg:px-20">
				<h1 className="mb-10 font-gilda text-[38px] leading-tight md:text-[50px] lg:text-[67px]">
					<span className="mb-4 inline-block pb-2">
						<span className="text-[#F4E290]">Connect.</span>{" "}
						<span className="text-white">Belong.</span>
					</span>
					<br />
					<span className="inline-block pb-2 text-white">
						We're Here Always.
					</span>
				</h1>

				<p className="mb-12 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl lg:text-[22px]">
					Reach out for stays, partnerships, or opportunities — we're just a
					message away. Our team is dedicated to crafting your perfect co-living
					journey.
				</p>

				<Dialog>
					<DialogTrigger
						render={
							<Button className="h-16 rounded-md bg-[#E8612D] px-10 py-9 text-[20px] font-medium text-white hover:bg-[#D4551F]" />
						}
					>
						Send a Message
					</DialogTrigger>
					<DialogContent className="max-w-lg border-0 bg-transparent p-0 shadow-none sm:max-w-[500px]">
						<DialogHeader className="sr-only">
							<DialogTitle>Send a Message</DialogTitle>
						</DialogHeader>
						<ContactForm />
					</DialogContent>
				</Dialog>
			</div>

			{/* Scroll down indicator */}
			<div className="absolute right-8 bottom-8 flex size-12 animate-bounce items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg">
				<ArrowDown className="size-5" />
			</div>
		</section>
	);
}
