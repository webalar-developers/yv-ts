import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "../contact-form";

export function BottomCtaContact() {
	return (
		<section className="bg-[#f7f7f7] px-6 py-16 md:px-12 lg:px-20">
			<div
				className="mx-auto max-w-7xl rounded-[58px] py-16 text-center md:py-24"
				style={{
					background: "linear-gradient(to right, #330E32, #5D235C)",
				}}
			>
				<h2 className="mb-6 font-gilda text-[32px] text-white md:text-[48px] lg:text-[56px]">
					Let’s Get You Connected
				</h2>

				<p className="mb-12 text-lg text-white/80 md:text-xl lg:text-[24px]">
					Whether you're looking for a stay or a partnership, we’re here to
					help.
				</p>

				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Dialog>
						<DialogTrigger
							render={
								<Button className="h-14 rounded-md bg-white px-10 text-[18px] font-bold text-yv-orange hover:bg-white/90" />
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

					<Button
						variant="outline"
						className="h-14 rounded-md border-2 border-white bg-transparent px-10 text-[18px] font-bold text-white hover:bg-white/10"
						nativeButton={false}
						render={<Link to="/hostels" />}
					>
						View Locations
					</Button>
				</div>
			</div>
		</section>
	);
}
