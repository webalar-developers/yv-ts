import { Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
	{
		icon: MapPin,
		label: "CORPORATE ADDRESS",
		content: (
			<>
				Pride Portal, 103, Senapati Bapat Rd, Bahiratwadi,
				<br />
				Bhageerath, Gokhalenagar, Pune, Maharashtra 411016
			</>
		),
		maxWidth: "max-w-2xl",
	},
	{
		icon: Phone,
		label: "PHONE NUMBER",
		content: "7387430080",
	},
	{
		icon: Mail,
		label: "EMAIL ADDRESS",
		content: "info@youthvillehostel.com",
	},
];

export function ContactInfoBanner() {
	return (
		<section className="bg-yv-orange px-6 py-16 text-white md:px-10 lg:px-10">
			<div className="mx-auto">
				<div className="flex flex-col items-start justify-between gap-2 md:flex-row">
					{contactItems.map((item) => (
						<div key={item.label} className="flex items-start gap-5">
							<item.icon
								className="mt-1 h-8 w-8 flex-shrink-0"
								strokeWidth={1}
							/>
							<div className="flex flex-col gap-1">
								<span className="font-sans text-xs font-normal tracking-widest uppercase opacity-70">
									{item.label}
								</span>
								<p
									className={`font-gilda text-lg leading-snug md:text-xl ${item.maxWidth || ""}`}
								>
									{item.content}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
