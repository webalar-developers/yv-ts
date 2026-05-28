import { cn } from "#/lib/utils";
import { useEffect, useState } from "react";

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
	const [columns, setColumns] = useState(1);

	useEffect(() => {
		const updateColumns = () => {
			if (window.innerWidth >= 1024) {
				setColumns(4);
				return;
			}

			if (window.innerWidth >= 768) {
				setColumns(2);
				return;
			}

			setColumns(1);
		};

		updateColumns();
		window.addEventListener("resize", updateColumns);

		return () => window.removeEventListener("resize", updateColumns);
	}, []);

	return (
		<section id="build-grid" className="bg-white px-6 py-8 md:px-12 md:py-8 lg:px-10">
			<div>
				<h2 className="mx-auto mb-8 max-w-4xl text-center font-gilda text-[28px] leading-tight text-slate-900 md:text-[34px] lg:text-[40px]">
					Youthville is built around what truly matters in everyday living.
				</h2>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-6">
					{gridItems.map((item, idx) => {
						const row = Math.floor(idx / columns);
						const col = idx % columns;
						const isLight = (row + col) % 2 === 0;

						return (
						<article
							key={item.title}
							className={
								cn("relative flex min-h-[120px] flex-col justify-between overflow-hidden rounded-lg p-4 transition-transform duration-200 border border-border hover:-translate-y-1 hover:shadow-sm",
									isLight ? "bg-white" : "bg-[#f5f3f0]"
								)}
							tabIndex={0}
						>
							<div className="flex items-center gap-4">
								<div className={`flex h-12 w-12 items-center justify-center rounded-md shrink-0 ${item.hasBg ? "bg-white ring-1 ring-gray-100" : "bg-white"}`}>
									<img src={item.icon} alt="" className="h-6 w-6" aria-hidden />
								</div>

								<h3 className="text-[16px] font-gilda font-semibold text-slate-900">
									{item.title}
								</h3>
							</div>
							<div className="flex gap-4" >
								<div className="h-12 w-12" />
								<p className="mt-3 text-[14px] text-slate-700">{item.description}</p>
							</div>
						</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
