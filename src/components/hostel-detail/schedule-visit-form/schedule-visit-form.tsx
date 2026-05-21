import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockProperties } from "@/data/mock-properties";

const allLocations = [
	...new Set(mockProperties.map((p) => p.location)),
].sort();


const cityOptions = [
	...new Set(
		allLocations.map((loc) => {
			const parts = loc.split(",");
			return parts.length > 1 ? parts[parts.length - 1].trim() : loc;
		}),
	),
].sort();

export function ScheduleVisitForm() {
	const [agreed, setAgreed] = useState(false);
	const [selectedCity, setSelectedCity] = useState("");
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		city: "",
		location: "",
		visitDate: "",
	});
	const [errors, setErrors] = useState<Record<string, string>>({});

	const locationOptions = selectedCity
		? allLocations.filter((loc) => {
				const parts = loc.split(",");
				const city = parts.length > 1 ? parts[parts.length - 1].trim() : loc;
				return city === selectedCity;
			})
		: allLocations;

	const validateForm = (): boolean => {
		const newErrors: Record<string, string> = {};
		if (!formData.name.trim()) {
			newErrors.name = "Full name is required";
		} else if (formData.name.trim().length < 2) {
			newErrors.name = "Full name must be at least 2 characters";
		} else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
			newErrors.name = "Full name can only contain letters and spaces";
		}


		if (!formData.phone.trim()) {
			newErrors.phone = "Phone number is required";
		} else {
			const digitsOnly = formData.phone.replace(/\D/g, "");
			if (digitsOnly.length !== 10) {
				newErrors.phone = "Phone number must be exactly 10 digits";
			}
		}

		if (!formData.city) {
			newErrors.city = "Please select a city";
		}

		if (!formData.location) {
			newErrors.location = "Please select a location";
		}

		if (!formData.visitDate) {
			newErrors.visitDate = "Visit date is required";
		} else {
			const selectedDate = new Date(formData.visitDate);
			const today = new Date();
			today.setHours(0, 0, 0, 0);
			if (selectedDate < today) {
				newErrors.visitDate = "Visit date cannot be in the past";
			}
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setSelectedCity(value);
		setFormData((prev) => ({ ...prev, city: value, location: "" }));
		if (errors.city) {
			setErrors((prev) => ({ ...prev, city: "" }));
		}
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		if (!validateForm()) {
			e.preventDefault();
		}
	};

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
					onSubmit={handleFormSubmit}
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
							Full Name <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="full-name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							required
							placeholder="John Doe"
							className={`mt-2 h-12 w-full rounded-xl border ${
								errors.name ? "border-red-500" : "border-[#ddd7d2]"
							} bg-[#FAFAFA] px-5 text-sm text-[#231f1c] outline-none placeholder:text-[#b0a9a3] focus:border-yv-orange`}
						/>
						{errors.name && (
							<p className="mt-1 text-xs text-red-500">{errors.name}</p>
						)}
					</div>
					<div>
						<label
							htmlFor="phone-number"
							className="text-[12px] font-normal tracking-[0.16em] text-[#6b635f] uppercase"
						>
							Phone Number <span className="text-red-500">*</span>
						</label>
						<input
							type="number"
							id="phone-number"
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}
							required
							placeholder="+91 00000 00000"
							className={`mt-2 h-12 w-full rounded-xl border ${
								errors.phone ? "border-red-500" : "border-[#ddd7d2]"
							} bg-[#FAFAFA] px-5 text-sm text-[#231f1c] outline-none placeholder:text-[#b0a9a3] focus:border-yv-orange`}
						/>
						{errors.phone && (
							<p className="mt-1 text-xs text-red-500">{errors.phone}</p>
						)}
					</div>
					<div>
						<label
							htmlFor="city"
							className="text-[12px] font-normal tracking-[0.16em] text-[#6b635f] uppercase"
						>
							City <span className="text-red-500">*</span>
						</label>
						<div className="relative mt-2">
							<select
								id="city"
								name="city"
								value={formData.city}
								onChange={handleCityChange}
								className={`h-12 w-full appearance-none rounded-xl border ${
									errors.city ? "border-red-500" : "border-[#ddd7d2]"
								} bg-[#FAFAFA] px-5 pr-10 text-sm text-[#231f1c] outline-none focus:border-yv-orange`}
							>
								<option value="">Select a city</option>
								{cityOptions.map((city) => (
									<option key={city} value={city}>
										{city}
									</option>
								))}
							</select>
							<ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-[#6b635f]" />
						</div>
						{errors.city && (
							<p className="mt-1 text-xs text-red-500">{errors.city}</p>
						)}
					</div>
					<div>
						<label
							htmlFor="location"
							className="text-[12px] font-normal tracking-[0.16em] text-[#6b635f] uppercase"
						>
							Location <span className="text-red-500">*</span>
						</label>
						<div className="relative mt-2">
							<select
								id="location"
								name="location"
								value={formData.location}
								onChange={handleSelectChange}
								required
								disabled={!selectedCity}
								className={`h-12 w-full appearance-none rounded-xl border ${
									errors.location ? "border-red-500" : "border-[#ddd7d2]"
								} ${!selectedCity ? "bg-[#f0f0f0]" : "bg-[#FAFAFA]"} px-5 pr-10 text-sm ${
									!selectedCity ? "text-[#b0a9a3]" : "text-[#231f1c]"
								} outline-none focus:border-yv-orange disabled:bg-[#f0f0f0] disabled:text-[#b0a9a3]`}
							>
								<option value="" disabled>
									{selectedCity ? "Select a location" : "Select a city first"}
								</option>
								{locationOptions.map((loc) => (
									<option key={loc} value={loc}>
										{loc}
									</option>
								))}
							</select>
							<ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-[#6b635f]" />
						</div>
						{errors.location && (
							<p className="mt-1 text-xs text-red-500">{errors.location}</p>
						)}
					</div>
					<div>
						{/* <div>
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
						</div> */}
						<div>
							<label
								htmlFor="visit-date"
								className="text-[12px] font-normal tracking-[0.16em] text-[#6b635f] uppercase"
							>
								Visit Date <span className="text-red-500">*</span>
							</label>
							<input
								type="date"
								id="visit-date"
								name="visitDate"
								value={formData.visitDate}
								onChange={handleInputChange}
								required
								className={`mt-2 h-12 w-full rounded-xl border ${
									errors.visitDate ? "border-red-500" : "border-[#ddd7d2]"
								} bg-[#FAFAFA] px-5 text-sm text-[#231f1c] outline-none focus:border-yv-orange`}
							/>
							{errors.visitDate && (
								<p className="mt-1 text-xs text-red-500">{errors.visitDate}</p>
							)}
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
						disabled={!agreed || !formData.name || !formData.phone || !formData.city || !formData.location || !formData.visitDate}
					>
						Schedule Visit
					</Button>
					{/* <p className="text-center text-[10px] font-normal tracking-[0.16em] text-[#6b635f] uppercase">
						Secured &amp; Encrypted
					</p> */}
				</form>
			</CardContent>
		</Card>
	);
}
