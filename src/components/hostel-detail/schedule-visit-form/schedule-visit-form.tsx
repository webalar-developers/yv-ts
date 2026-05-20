import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockProperties } from "@/data/mock-properties";

const locationOptions = [
	...new Set(mockProperties.map((p) => p.location)),
].sort();

export function ScheduleVisitForm() {
	const [agreed, setAgreed] = useState(false);

	return (
		<Card className="h-fit rounded-none border-0 bg-white py-0 ring-1 ring-[#e8e2dd]">
			<CardContent className="px-9 pt-8 pb-8">
				<h2 className="font-['Gilda_Display'] text-[25px] font-normal text-[#1f1a17]">
					Schedule a Visit
				</h2>
				<form
					action="https://formsubmit.co/info@youthvillehostel.com"
					method="POST"
					className="mt-7 space-y-5"
				>
					{/* Honeypot */}
					<input type="text" name="_honey" style={{ display: "none" }} />
					{/* Disable Captcha */}
					<input type="hidden" name="_captcha" value="false" />

					<div>
						<label
							htmlFor="full-name"
							className="text-[12px] font-normal tracking-[0.16em] text-[#6b635f] uppercase"
						>
							Full Name
						</label>
						<input
							type="text"
							id="full-name"
							name="name"
							required
							placeholder="John Doe"
							className="mt-2 h-12 w-full rounded-xl border border-[#ddd7d2] bg-[#FAFAFA] px-5 text-sm text-[#231f1c] outline-none placeholder:text-[#b0a9a3] focus:border-yv-orange"
						/>
					</div>
					<div>
						<label
							htmlFor="phone-number"
							className="text-[12px] font-normal tracking-[0.16em] text-[#6b635f] uppercase"
						>
							Phone Number
						</label>
						<input
							type="tel"
							id="phone-number"
							name="phone"
							required
							placeholder="+91 00000 00000"
							className="mt-2 h-12 w-full rounded-xl border border-[#ddd7d2] bg-[#FAFAFA] px-5 text-sm text-[#231f1c] outline-none placeholder:text-[#b0a9a3] focus:border-yv-orange"
						/>
					</div>
					<div>
						<label
							htmlFor="location"
							className="text-[12px] font-normal tracking-[0.16em] text-[#6b635f] uppercase"
						>
							Location
						</label>
						<div className="relative mt-2">
							<select
								id="location"
								name="location"
								required
								defaultValue=""
								className="h-12 w-full appearance-none rounded-xl border border-[#ddd7d2] bg-[#FAFAFA] px-5 pr-10 text-sm text-[#231f1c] outline-none focus:border-yv-orange"
							>
								<option value="" disabled>
									Select a location
								</option>
								{locationOptions.map((loc) => (
									<option key={loc} value={loc}>
										{loc}
									</option>
								))}
							</select>
							<ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-[#6b635f]" />
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div>
							<label
								htmlFor="room-type"
								className="text-[12px] font-normal tracking-[0.16em] text-[#6b635f] uppercase"
							>
								Room Type
							</label>
							<div className="relative mt-2">
								<select
									id="room-type"
									name="room_type"
									className="h-12 w-full appearance-none rounded-xl border border-[#ddd7d2] bg-[#FAFAFA] px-5 pr-10 text-sm text-[#231f1c] outline-none focus:border-yv-orange"
								>
									<option>Private</option>
									<option>Twin Sharing</option>
									<option>Triple Sharing</option>
								</select>
								<ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-[#6b635f]" />
							</div>
						</div>
						<div>
							<label
								htmlFor="visit-date"
								className="text-[12px] font-normal tracking-[0.16em] text-[#6b635f] uppercase"
							>
								Visit Date
							</label>
							<input
								type="date"
								id="visit-date"
								name="visit_date"
								required
								className="mt-2 h-12 w-full rounded-xl border border-[#ddd7d2] bg-[#FAFAFA] px-5 text-sm text-[#231f1c] outline-none focus:border-yv-orange"
							/>
						</div>
					</div>
					<div className="flex items-start gap-2 pt-2">
						<input
							type="checkbox"
							id="sms-opt-in-schedule"
							className="mt-0.5"
							checked={agreed}
							onChange={(e) => setAgreed(e.target.checked)}
							required
						/>
						<label
							htmlFor="sms-opt-in-schedule"
							className="text-[12px] leading-tight font-normal text-[#6b635f]"
						>
							I agree to receive promotional or informational messages via SMS /
							Messages from Youthville.
							<br />
							<Link
								to="/terms"
								className="mt-1 inline-block underline hover:text-yv-orange"
							>
								Terms of Service
							</Link>
						</label>
					</div>
					<Button
						type="submit"
						variant="yv-orange"
						className="h-14 w-full rounded-md text-[18px] font-medium disabled:opacity-50"
						disabled={!agreed}
					>
						Schedule Visit
					</Button>
					<p className="text-center text-[10px] font-normal tracking-[0.16em] text-[#6b635f] uppercase">
						Secured &amp; Encrypted
					</p>
				</form>
			</CardContent>
		</Card>
	);
}
