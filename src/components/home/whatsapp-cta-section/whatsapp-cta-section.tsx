import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function WhatsappCtaSection() {
	const [isVisible, setIsVisible] = useState(false);
	const [agreed, setAgreed] = useState(false);

	useEffect(() => {
		const hasSeenPopup = sessionStorage.getItem("hasSeenWhatsappPopup");

		if (!hasSeenPopup) {
			const timer = setTimeout(() => {
				setIsVisible(true);
				sessionStorage.setItem("hasSeenWhatsappPopup", "true");
			}, 10000);

			return () => clearTimeout(timer);
		}
	}, []);

	return (
		<Dialog open={isVisible} onOpenChange={setIsVisible}>
			<DialogContent
				showCloseButton={false}
				className="flex max-w-4xl flex-col gap-0 overflow-hidden rounded-none border-0 p-0 !ring-0 shadow-2xl outline-none sm:max-w-4xl md:flex-row"
			>

				<DialogTitle className="sr-only">
					Get Information On WhatsApp
				</DialogTitle>
				<DialogDescription className="sr-only">
					Submit your details to receive property information via WhatsApp.
				</DialogDescription>

				<div className="flex w-full flex-col justify-center bg-gradient-to-br from-[#092C3C] to-[#1E061D] p-10 text-white md:w-1/2 md:p-16">
					<div className="mb-8 h-1 w-16 rounded-full bg-pink-500" />
					<h2 className="mb-6 font-gilda text-[32px] leading-[1.1] font-normal md:text-[45px]">
						Get Information <br />
						On <span className="text-pink-500">WhatsApp</span>
					</h2>
					<p className="mb-10 text-[15px] leading-relaxed font-light text-white/70">
						Submit your details to receive project details instantly on your
						mobile.
					</p>
					<ul className="space-y-5">
						{[
							{ label: "Property Details", icon: "🏠" },
							{ label: "Property Images", icon: "📸" },
							{ label: "Commercials", icon: "💰" },
						].map((item) => (
							<li
								key={item.label}
								className="flex items-center gap-4 text-[14px] font-medium text-white/80"
							>
								<span className="flex size-6 items-center justify-center rounded-full bg-pink-500/20 text-[10px] text-pink-500 ring-1 ring-pink-500/50">
									{item.icon}
								</span>
								{item.label}
							</li>
						))}
					</ul>
				</div>

				<div className="relative w-full bg-white p-8 md:w-1/2 md:p-12">
					<button
						type="button"
						onClick={() => setIsVisible(false)}
						className="flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200"
						style={{
							position: "absolute",
							top: 16,
							right: 16,
							padding: 0,
							margin: 0,
							zIndex: 10,
						}}
					>
						<X className="size-4" />
					</button>
					<form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
						<div>
							<Label
								htmlFor="fullName"
								className="mb-2 block text-[11px] font-bold tracking-widest text-gray-400 uppercase"
							>
								Full Name
							</Label>
							<Input
								id="fullName"
								placeholder="Enter your name"
								className="h-12 rounded-none border-0 border-b border-b-gray-200 bg-gray-50 px-4 text-[15px] shadow-none transition-colors focus:border-b-yv-orange focus:bg-white focus-visible:ring-0"
							/>
						</div>

						<div>
							<Label
								htmlFor="phone"
								className="mb-2 block text-[11px] font-bold tracking-widest text-gray-400 uppercase"
							>
								Phone Number
							</Label>
							<Input
								id="phone"
								type="tel"
								placeholder="Enter your phone number"
								className="h-12 rounded-none border-0 border-b border-b-gray-200 bg-gray-50 px-4 text-[15px] shadow-none transition-colors focus:border-b-yv-orange focus:bg-white focus-visible:ring-0"
							/>
						</div>

						<div>
							<Label
								htmlFor="location"
								className="mb-2 block text-[11px] font-bold tracking-widest text-gray-400 uppercase"
							>
								Location
							</Label>
							<Input
								id="location"
								placeholder="Enter your Location"
								className="h-12 rounded-none border-0 border-b border-b-gray-200 bg-gray-50 px-4 text-[15px] shadow-none transition-colors focus:border-b-yv-orange focus:bg-white focus-visible:ring-0"
							/>
						</div>

						<div>
							<Label className="mb-2 block text-[11px] font-bold tracking-widest text-gray-400 uppercase">
								Accommodation Type
							</Label>
							<Select defaultValue="sharing">
								<SelectTrigger className="h-12 w-full rounded-none border-0 border-b border-b-gray-200 bg-gray-50 px-4 text-[15px] shadow-none transition-colors focus:border-b-yv-orange focus:bg-white focus:ring-0">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="sharing">Sharing / Private</SelectItem>
									<SelectItem value="private">Private</SelectItem>
									<SelectItem value="shared">Sharing</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="flex items-start gap-3 pt-2">
							<input
								type="checkbox"
								id="sms-opt-in-wa"
								className="mt-1 size-4 rounded border-gray-300 text-yv-orange focus:ring-yv-orange"
								checked={agreed}
								onChange={(e) => setAgreed(e.target.checked)}
							/>
							<label
								htmlFor="sms-opt-in-wa"
								className="text-[12px] leading-snug text-gray-600"
							>
								I agree to receive promotional or informational messages via SMS
								/ Messages from Youthville.{" "}
								<Link
									to="/terms"
									className="font-medium text-yv-orange underline underline-offset-4"
								>
									Terms of Service
								</Link>
							</label>
						</div>

						<Button
							variant="yv-orange"
							className="h-14 w-full rounded-none text-[15px] font-bold tracking-[0.2em] uppercase shadow-lg disabled:opacity-50"
							disabled={!agreed}
						>
							Get Details
						</Button>
					</form>
				</div>
			</DialogContent>
		</Dialog>
	);
}
