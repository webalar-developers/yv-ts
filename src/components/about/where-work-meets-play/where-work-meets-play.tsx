const images = [
	{ src: "/about/work-and-play/one.png", alt: "Pool table and games area" },
	{ src: "/about/work-and-play/two.png", alt: "Community dining together" },
	{ src: "/about/work-and-play/three.png", alt: "Rooftop lounge at sunset" },
	{ src: "/about/work-and-play/four.png", alt: "Work from home setup" },
	{ src: "/about/work-and-play/five.png", alt: "Cozy bedroom" },
	{ src: "/about/work-and-play/six.png", alt: "Fully equipped gym" },
];

export function WhereWorkMeetsPlay() {
	return (
		<section className="bg-white px-6 py-8 md:px-10 md:py-12 lg:px-16">
			<div className="mx-auto max-w-6xl">
				<h2 className="mb-10 text-center font-gilda text-[28px] font-normal text-yv-dark-purple md:text-[40px]">
					Where Work Meets Play
				</h2>

				<div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
					{images.map((img) => (
						<div key={img.src} className="overflow-hidden rounded-xl">
							<img
								src={img.src}
								alt={img.alt}
								className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-60 lg:h-64"
								loading="lazy"
								decoding="async"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
