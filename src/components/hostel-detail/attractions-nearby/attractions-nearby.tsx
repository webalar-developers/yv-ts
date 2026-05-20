import { Navigation } from "lucide-react";

const attractions = [
	{
		img: "/hostel-detail/jpg/Location1.jpg",
		title: "Cafes & Hangouts",
		distance: "7 mins away",
	},
	{
		img: "/hostel-detail/jpg/Location2.jpg",
		title: "Shopping & Malls",
		distance: "8 mins away",
	},
	{
		img: "/hostel-detail/jpg/Location3.jpg",
		title: "Fitness & Gyms",
		distance: "3 mins away",
	},
	{
		img: "/hostel-detail/jpg/Location4.jpg",
		title: "Parks & Open Spaces",
		distance: "10 mins away",
	},
	{
		img: "/shared/jpg/Image6.jpg",
		title: "Restaurants",
		distance: "5 mins away",
	},
	{
		img: "/shared/jpg/Image8.jpg",
		title: "Entertainment Zones",
		distance: "12 mins away",
	},
];

export function AttractionsNearby() {
	return (
		<section>
			<h3 className="font-['Gilda_Display'] text-[27px] font-normal text-[#1f1a17]">
				Attractions Nearby
			</h3>
			<div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3">
				{attractions.map((item) => (
					<div
						key={item.title}
						className="relative h-[200px] overflow-hidden rounded-xl md:h-[260px]"
					>
						<img
							src={item.img}
							alt={item.title}
							className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
							loading="lazy"
							decoding="async"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
						<div className="absolute bottom-0 left-0 p-4">
							<p className="text-[15px] font-semibold leading-tight text-white">
								{item.title}
							</p>
							<div className="mt-1 flex items-center gap-1 text-white/80">
								<Navigation className="size-3" />
								<span className="text-[12px]">{item.distance}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
