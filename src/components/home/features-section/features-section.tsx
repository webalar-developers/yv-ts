const cards = [
	{
		img: "/home/8-point/prime-locations.png",
		title: "Prime Locations",
	},
	{
		img: "/home/8-point/safety-security.jpg",
		title: "24/7 Safety & Security",
	},
	{
		img: "/home/8-point/daily-meals.jpeg",
		title: "Daily Fresh Meals",
	},
	{
		img: "/home/8-point/community.jpg",
		title: "Vibrant Community",
	},
	{
		img: "/home/8-point/muscle-factory.jpeg",
		title: "Muskal Factory",
	},
	{
		img: "/home/8-point/locations.jpg",
		title: "18+ Locations To Choose",
	},
	{
		img: "/home/8-point/trusted.jpg",
		title: "Trusted By Thousands",
	},
	{
		img: "/home/8-point/events.jpg",
		title: "Events & Experiences",
	},
];

export function FeaturesSection() {
	return (
		<section className="w-full bg-[#f7f7f7] px-6 py-16 md:px-10 md:py-[40px]">
			<div className="mx-auto flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-[60px]">
				{/* Left Side: Grid Cards */}
				<div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:w-[60%] md:gap-[18px] lg:grid-cols-4">
					{cards.map((item) => (
						<div
							key={item.title}
							className="flex flex-col overflow-hidden rounded-xl bg-white pb-3 shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-0.5"
						>
							<div className="h-[120px] w-full overflow-hidden p-2 md:h-[150px]">
								<img
									src={item.img}
									alt={item.title}
									className="h-full w-full rounded-md object-cover"
									loading="lazy"
									decoding="async"
								/>
							</div>
							<div className="flex flex-col px-2">
								<p className="text-[12px] leading-tight font-bold text-[#333] md:text-[14px] md:font-bold lg:font-bold">
									{item.title}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Right Side: Text Content */}
				<div className="flex w-full flex-col justify-center md:w-[40%] md:px-5">
					<div className="mb-3 h-0.5 w-10 rounded-sm bg-[#ff5a3c]" />
					<h2 className="mb-4 font-century-gothic text-2xl leading-[1.3] font-normal text-[#1f1f1f] md:text-[36px]">
						 How You Can Live Unforgettably how Youth will be living in India
					</h2>
					<p className="mb-3.5 text-[16px] leading-relaxed text-[#666] text-justify md:text-[18px]">
						At Youthville, we build vibrant co-living communities for students
						and working professionals where connection and collaboration come
						naturally. Our spaces are designed to encourage peer learning,
						networking, and personal growth, making everyday interactions
						meaningful. By combining comfortable living with skill development,
						we create an environment where residents don’t just stay—they grow
						and thrive.
					</p>
					<p className="mb-5 text-[16px] leading-relaxed text-[#666] text-justify md:text-[18px]">
						Youthville is more than just a hostel—it’s a smarter way to
						experience community living and professional development.
					</p>
				</div>
			</div>
		</section>
	);
}
