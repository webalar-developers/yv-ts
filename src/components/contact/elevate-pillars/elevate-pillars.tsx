const pillars = [
	{
		title: "Hostel Enquiry",
		description:
			"Looking for a premium stay? Get detailed information on our locations and availability.",
		icon: "/contact/svg/hostel.svg",
		variant: "white",
	},
	{
		title: "Partner with Us",
		description:
			"Join the Youthville ecosystem. We're open to strategic real estate and service partnerships.",
		icon: "/contact/svg/partner.svg",
		variant: "white",
	},
	{
		title: "Careers",
		description:
			"Build the future of co-living with us. Explore open positions in management and operations.",
		icon: "/contact/svg/career.svg",
		variant: "peach",
	},
	{
		title: "Collaborate",
		description:
			"Are you an influencer or brand? Let's create unique experiences for our community.",
		icon: "/contact/svg/collab.svg",
		variant: "white",
	},
];

export function ElevatePillarsContact() {
	return (
		<section className="bg-gray-50 px-8 py-8 md:px-10 md:py-10 lg:px-10">
			<div className="mx-auto">
				<h2 className="mb-4 font-gilda text-[26px] text-yv-dark-purple md:text-[38px] lg:text-[50px]">
					How Can We Help You?
				</h2>

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{pillars.map((pillar) => (
						<div
							key={pillar.title}
							className={`flex min-h-[220px] flex-col rounded-md p-6 transition-all duration-300 hover:shadow-xl md:min-h-[350px] md:p-10 ${
								pillar.variant === "peach"
									? "bg-[#FBE2D9]"
									: pillar.variant === "orange"
										? "bg-yv-orange"
										: "border border-gray-100 bg-white"
							}`}
						>
							<div
								className={`mb-8 flex h-14 w-14 items-center justify-center rounded-md ${
									pillar.variant === "white" ? "bg-[#FBE2D9]" : "bg-white"
								} ${pillar.variant === "orange" ? "bg-white/20" : ""}`}
							>
								<img
									src={pillar.icon}
									alt={pillar.title}
									className="h-7 w-7 object-contain"
								/>
							</div>

							<div className="mt-auto">
								<h3
									className={`mb-4 font-gilda text-[26px] leading-tight font-medium ${
										pillar.variant === "orange"
											? "text-white"
											: "text-yv-dark-purple"
									}`}
								>
									{pillar.title}
								</h3>

								<p
									className={`text-[16px] leading-relaxed ${
										pillar.variant === "orange"
											? "text-white/80"
											: "text-gray-600"
									}`}
								>
									{pillar.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
