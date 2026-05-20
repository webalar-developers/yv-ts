const gridItems = [
	{
		title: "Comfort",
		description:
			"Ergonomic spaces designed specifically for rest, productivity, and personal peace.",
		icon: "/life/svg/comfort-logo.svg",
		bgIcon: "/life/svg/comfort-bg.svg",
		hasBg: false,
	},
	{
		title: "Convenience",
		description:
			"Hassle-free living with all essential services like laundry and cleaning managed for you.",
		icon: "/life/svg/conv-logo.svg",
		bgIcon: "/life/svg/conv-bg.svg",
		hasBg: true,
	},
	{
		title: "Vibrant Living",
		description:
			"Strategic mentorship and networking avenues for the visionaries.",
		icon: "/life/svg/vibrant-logo.svg",
		bgIcon: "/life/svg/vibrant-bg.svg",
		hasBg: false,
	},
	{
		title: "Empowering Environment",
		description:
			"Supporting your growth with the right ecosystem, study zones, and networking opportunities.",
		icon: "/life/svg/emp-logo.svg",
		bgIcon: "/life/svg/emp-bg.svg",
		hasBg: true,
	},
	{
		title: "Credibility & Trust",
		description:
			"A professional management brand you can rely on for safety, quality, and transparency.",
		icon: "/life/svg/cred-logo.svg",
		bgIcon: "/life/svg/cred-bg.svg",
		hasBg: false,
	},
	{
		title: "Community & Belonging",
		description:
			"A place where you don't just live, but truly belong and make lifelong friendships.",
		icon: "/life/svg/comm-logo.svg",
		bgIcon: "/life/svg/comm-bg.svg",
		hasBg: true,
	},
	{
		title: "Safety & Security",
		description:
			"Round-the-clock surveillance and professional staff ensuring you always feel safe at home.",
		icon: "/life/svg/cred-logo.svg",
		bgIcon: "/life/svg/cred-bg.svg",
		hasBg: false,
	},
	{
		title: "Health & Wellness",
		description:
			"Dedicated gym, wellness spaces, and nutritious meals to keep your mind and body at their best.",
		icon: "/life/svg/vibrant-logo.svg",
		bgIcon: "/life/svg/vibrant-bg.svg",
		hasBg: true,
	},
];

export function BuildGrid() {
	return (
		<section className="bg-white px-6 py-16 md:px-12 md:py-10 lg:px-10">
			<div>
				<h2 className="mx-auto mb-16 max-w-4xl text-center font-gilda text-[32px] leading-tight text-yv-dark-purple md:text-[40px] lg:text-[48px]">
					Youthville is built around what truly matters in everyday living.
				</h2>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{gridItems.map((item) => (
						<div
							key={item.title}
							className={`relative flex min-h-[350px] flex-col justify-center overflow-hidden rounded-xl p-10 transition-all duration-300 hover:shadow-lg ${
								item.hasBg ? "bg-[#FBE2D9]" : "border border-gray-100 bg-white"
							}`}
						>
							{/* Ghost Icon Decoration */}
							<img
								src={item.bgIcon}
								alt=""
								className="pointer-events-none absolute -right-2 -bottom-2 h-26 w-26 opacity-[0.05]"
							/>

							<div
								className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${
									item.hasBg ? "bg-white" : "bg-[#FBE2D9]"
								}`}
							>
								<img src={item.icon} alt={item.title} className="h-7 w-7" />
							</div>

							<h3 className="mb-4 font-gilda text-[26px] font-medium text-yv-dark-purple">
								{item.title}
							</h3>

							<p className="text-[15px] leading-relaxed text-gray-600">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
