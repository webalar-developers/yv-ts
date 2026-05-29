import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";

const slides = [
	{
		left: {
			quote:
				"Moving to a new city was daunting, but Youthville made it feel like home instantly. The community events and the supportive staff are unmatched.",
			name: "Aanya Sharma",
			role: "Student, Symbiosis",
			avatar: "https://randomuser.me/api/portraits/women/44.jpg",
		},
		center: {
			image: "/life/png/collage-2.jpg",
			quote:
				"The safety measures and the quality of food were my parents' biggest concerns. Youthville exceeded expectations on both fronts. Highly recommended.",
			name: "Rahul Verma",
			role: "IT Professional",
			avatar: "https://randomuser.me/api/portraits/men/32.jpg",
		},
		right: {
			quote:
				"I love the balance of privacy in my room and the vibrant common areas. It's the perfect environment for both studying and unwinding after a long day.",
			name: "Priya Patel",
			role: "Design Student",
			avatar: "https://randomuser.me/api/portraits/women/28.jpg",
		},
	},
	{
		left: {
			quote:
				"The gym and study rooms are top-notch. I've never felt more motivated to work on my goals. Youthville is more than a hostel — it's a launchpad.",
			name: "Karan Mehta",
			role: "MBA Student",
			avatar: "https://randomuser.me/api/portraits/men/55.jpg",
		},
		center: {
			image: "/life/png/collage-4.jpg",
			quote:
				"I was skeptical at first, but Youthville's community changed my perspective on co-living. The events and friendships I've built here are priceless.",
			name: "Sneha Kapoor",
			role: "Software Engineer",
			avatar: "https://randomuser.me/api/portraits/women/62.jpg",
		},
		right: {
			quote:
				"Clean, well-maintained, and the food is genuinely good. My parents were impressed when they visited. Worth every rupee.",
			name: "Vikram Singh",
			role: "B.Tech Student",
			avatar: "https://randomuser.me/api/portraits/men/71.jpg",
		},
	},
	{
		left: {
			quote:
				"The security and location are unbeatable. I feel safe coming back late at night, and the commute to my office is super easy.",
			name: "Meera Nair",
			role: "Working Professional",
			avatar: "https://randomuser.me/api/portraits/women/19.jpg",
		},
		center: {
			image: "/life/png/collage-3.jpg",
			quote:
				"What sets Youthville apart is its sense of belonging. The staff knows you by name and genuinely cares. I've renewed my stay three times now.",
			name: "Arjun Patil",
			role: "CA Student",
			avatar: "https://randomuser.me/api/portraits/men/45.jpg",
		},
		right: {
			quote:
				"From the cozy rooms to the vibrant common areas, everything about Youthville is thoughtfully designed. Best hostel experience I've had.",
			name: "Riya Desai",
			role: "Design Student, NID",
			avatar: "https://randomuser.me/api/portraits/women/36.jpg",
		},
	},
];

type SideTestimonial = (typeof slides)[0]["left"];
type CenterTestimonial = (typeof slides)[0]["center"];

function QuoteMark() {
	return (
		<span
			className="block font-serif text-[52px] leading-none"
			style={{ color: "#E57373" }}
			aria-hidden
		>
			"
		</span>
	);
}

function SideCard({ t }: { t: SideTestimonial }) {
	return (
		<div className="flex h-full flex-col bg-white p-6 shadow-md">
			<QuoteMark />
			<p className="mt-1 flex-1 text-[13px] leading-relaxed text-gray-600">
				{t.quote}
			</p>
			<div className="mt-6 flex items-center gap-3">
				<img
					src={t.avatar}
					alt={t.name}
					className="h-10 w-10 rounded-full object-cover"
					loading="lazy"
					decoding="async"
				/>
				<div>
					<p className="text-[13px] font-semibold text-gray-900">{t.name}</p>
					<p className="text-[11px] text-gray-400">{t.role}</p>
				</div>
			</div>
		</div>
	);
}

function FeaturedCard({ t }: { t: CenterTestimonial }) {
	return (
		<div>
			<div className="relative overflow-hidden rounded-2xl">
				<img
					src={t.image}
					alt="Testimonial"
					className="h-64 w-full object-cover"
					loading="lazy"
					decoding="async"
				/>
				<div className="absolute inset-0 flex items-center justify-center bg-black/20">
					<div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
						<Play className="ml-1 h-6 w-6 text-gray-700" fill="currentColor" />
					</div>
				</div>
			</div>

			<div className="relative -mt-10 mx-3 bg-white p-5 shadow-lg">
				<QuoteMark />
				<p className="mt-1 text-[13px] leading-relaxed text-gray-700">
					{t.quote}
				</p>
				<div className="mt-4 flex items-center gap-3">
					<img
						src={t.avatar}
						alt={t.name}
						className="h-9 w-9 rounded-full object-cover"
						loading="lazy"
						decoding="async"
					/>
					<div>
						<p className="text-[13px] font-semibold text-gray-900">{t.name}</p>
						<p className="text-[11px] text-yv-orange">{t.role}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export function VoicesOfYouthville() {
	const [page, setPage] = useState(0);
	const current = slides[page];

	return (
		<section className="bg-white px-4 py-8 md:px-10 md:py-12">
			<div className="mx-auto max-w-6xl">
				<div className="mb-8 text-center">
					<h2 className="font-gilda text-[32px] font-normal text-yv-dark-purple md:text-[46px]">
						Voices of Youthville
					</h2>
					<p className="mt-2 text-[15px] text-gray-500">
						Don't just take our word for it - hear from our family.
					</p>
				</div>

				<div className="flex items-center gap-3">
					<button
						type="button"
						onClick={() => setPage((p) => Math.max(0, p - 1))}
						disabled={page === 0}
						className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-yv-orange disabled:opacity-30"
					>
						<ChevronLeft className="h-5 w-5 text-gray-600" />
					</button>

					<div className="grid flex-1 grid-cols-3 items-start gap-4">
						<div>
							<SideCard t={current.left} />
						</div>
						<FeaturedCard t={current.center} />
						<div>
							<SideCard t={current.right} />
						</div>
					</div>

					<button
						type="button"
						onClick={() =>
							setPage((p) => Math.min(slides.length - 1, p + 1))
						}
						disabled={page === slides.length - 1}
						className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-yv-orange disabled:opacity-30"
					>
						<ChevronRight className="h-5 w-5 text-gray-600" />
					</button>
				</div>

				<div className="mt-8 flex justify-center gap-2">
					{slides.map((_, i) => (
						<button
							type="button"
							key={`dot-${i}`}
							onClick={() => setPage(i)}
							className={`h-2 rounded-full transition-all ${
								i === page ? "w-6 bg-yv-orange" : "w-2 bg-gray-300"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
