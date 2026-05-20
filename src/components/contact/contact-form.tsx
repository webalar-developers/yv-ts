import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm() {
	const [agreed, setAgreed] = useState(false);

	return (
		<Card className="h-fit rounded-none border-0 bg-white/95 py-0 shadow-2xl backdrop-blur-sm">
			<CardContent className="px-8 py-8">
				<h2 className="font-gilda text-[28px] font-normal text-[#1f1a17]">
					Send a Message
				</h2>
				<p className="mt-2 text-sm text-gray-600">
					Have a question? We're here to help.
				</p>
				<form
					action="https://formsubmit.co/info@youthvillehostel.com"
					method="POST"
					className="mt-6 space-y-4"
				>
					{/* Honeypot */}
					<input type="text" name="_honey" style={{ display: "none" }} />
					{/* Disable Captcha */}
					<input type="hidden" name="_captcha" value="false" />
					{/* Custom Subject */}
					<input
						type="hidden"
						name="_subject"
						value="New Contact Message - Youthville Website"
					/>
					{/* Success URL */}
					<input
						type="hidden"
						name="_next"
						value="https://youthville.co.in/contact?success=true"
					/>

					<div>
						<label
							htmlFor="name"
							className="text-[11px] font-semibold tracking-widest text-[#6b635f] uppercase"
						>
							Full Name
						</label>
						<input
							id="name"
							type="text"
							name="name"
							required
							placeholder="Your Name"
							className="mt-1.5 h-11 w-full rounded-md border border-gray-200 bg-gray-50/50 px-4 text-sm outline-none focus:border-yv-orange focus:bg-white"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="text-[11px] font-semibold tracking-widest text-[#6b635f] uppercase"
						>
							Email Address
						</label>
						<input
							id="email"
							type="email"
							name="email"
							required
							placeholder="your@email.com"
							className="mt-1.5 h-11 w-full rounded-md border border-gray-200 bg-gray-50/50 px-4 text-sm outline-none focus:border-yv-orange focus:bg-white"
						/>
					</div>

					<div>
						<label
							htmlFor="phone"
							className="text-[11px] font-semibold tracking-widest text-[#6b635f] uppercase"
						>
							Phone Number
						</label>
						<input
							id="phone"
							type="tel"
							name="phone"
							required
							placeholder="+91 00000 00000"
							className="mt-1.5 h-11 w-full rounded-md border border-gray-200 bg-gray-50/50 px-4 text-sm outline-none focus:border-yv-orange focus:bg-white"
						/>
					</div>

					<div>
						<label
							htmlFor="message"
							className="text-[11px] font-semibold tracking-widest text-[#6b635f] uppercase"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows={3}
							placeholder="How can we help you?"
							className="mt-1.5 w-full rounded-md border border-gray-200 bg-gray-50/50 p-4 text-sm outline-none focus:border-yv-orange focus:bg-white resize-none"
						/>
					</div>

					<div className="flex items-start gap-2 pt-1">
						<input
							type="checkbox"
							id="sms-opt-in-contact"
							className="mt-1 h-4 w-4 rounded border-gray-300 text-yv-orange focus:ring-yv-orange"
							checked={agreed}
							onChange={(e) => setAgreed(e.target.checked)}
							required
						/>
						<label
							htmlFor="sms-opt-in-contact"
							className="text-[11px] leading-tight text-gray-500"
						>
							I agree to receive updates and promotional messages via
							SMS/WhatsApp from Youthville.
							<Link to="/terms" className="ml-1 underline hover:text-yv-orange">
								Terms
							</Link>
						</label>
					</div>

					<Button
						type="submit"
						className="h-14 w-full rounded-md bg-[#E8612D] text-[18px] font-bold text-white transition-all hover:bg-[#D4551F] disabled:opacity-50"
						disabled={!agreed}
					>
						Submit Message
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
