const visionaries = [
	{
		name: "Mr. Vineet Goyal",
		image: "/about/founders/vineet-goyal.png",
		description:
			"At Youthville, the vision is driven by its founder Vineet Goyal, who also serves as the Joint Managing Director of Kohinoor Group. A dynamic leader with strong strategic insight, he plays a key role in driving growth and setting new industry benchmarks. Through Youthville, he brings a forward-thinking approach to redefine modern youth living and create meaningful experiences for the next generation.",
	},
	{
		name: "Mr. Rupesh Mittal",
		image: "/about/founders/rupes-mittal.png",
		description:
			"At Youthville, the vision is led by its Director Rupesh Mittal from Kohinoor Group. With over two decades of experience, he drives the brand's growth and community-focused approach to youth living. He has played a key role in establishing Youthville as a trusted name in co-living. Under his leadership, the brand is expanding across Pune and Mumbai with a focus on safe, tech-enabled living spaces.",
	},
];

export function Visionaries() {
	return (
		<section className="bg-white px-6 py-8 md:px-10 md:py-12 lg:px-16">
			<div className="mx-auto max-w-7xl">
				<h2 className="mb-14 text-center font-gilda text-[28px] font-normal text-yv-dark-purple md:text-[40px] lg:text-[48px]">
					Meet the Visionaries Behind <br className="hidden sm:block" />
					Youthville
				</h2>

				<div className="grid gap-12 md:grid-cols-2 md:gap-16">
					{visionaries.map((person) => (
						<div key={person.name} className="flex gap-6">
							<div className="shrink-0">
								<img
									src={person.image}
									alt={person.name}
									className="h-56 w-44 rounded-lg object-cover object-top grayscale md:h-72 md:w-56"
									loading="lazy"
									decoding="async"
								/>
							</div>

							<div>
								<h3 className="mb-3 font-gilda text-3xl font-normal text-yv-orange">
									{person.name}
								</h3>
								<p className="text-base font-roboto leading-relaxed text-gray-500">
									{person.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
