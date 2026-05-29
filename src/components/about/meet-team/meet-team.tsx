const team = [
	{
		name: "Abhinav Joshi",
		role: "VP – Global and Sales",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
	},
	{
		name: "Rajeev Kulkarni",
		role: "VP – Operations",
		image: "https://randomuser.me/api/portraits/men/45.jpg",
	},
	{
		name: "Rohit Sandhi",
		role: "GM – Sales, Hostel Housing",
		image: "https://randomuser.me/api/portraits/men/22.jpg",
	},
	{
		name: "Ankit Aggarwal",
		role: "GM – Sales, Co-Living",
		image: "https://randomuser.me/api/portraits/men/67.jpg",
	},
	{
		name: "Vijay Dudhunti",
		role: "GM – Marketing",
		image: "https://randomuser.me/api/portraits/men/14.jpg",
	},
	{
		name: "Priti Shinde",
		role: "AGM – Sales",
		image: "https://randomuser.me/api/portraits/women/28.jpg",
	},
	{
		name: "Dinesh Alias",
		role: "Cluster Manager – Co-living",
		image: "https://randomuser.me/api/portraits/men/55.jpg",
	},
	{
		name: "Nikhil",
		role: "Doctor",
		image: "https://randomuser.me/api/portraits/men/38.jpg",
	},
	{
		name: "Vanshika",
		role: "GM – Inside Sales",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
	},
	{
		name: "Vilas Sale",
		role: "GM – F&B",
		image: "https://randomuser.me/api/portraits/men/71.jpg",
	},
	{
		name: "Prathamesh Jawale",
		role: "Management Trainee",
		image: "https://randomuser.me/api/portraits/men/19.jpg",
	},
	{
		name: "Santan Shivsharan",
		role: "Management Trainee",
		image: "https://randomuser.me/api/portraits/men/83.jpg",
	},
	{
		name: "Preety Dongare",
		role: "GM – Architect",
		image: "https://randomuser.me/api/portraits/women/62.jpg",
	},
];

export function MeetTeam() {
	return (
		<section className="bg-white px-6 py-8 md:px-10 md:py-12 lg:px-16">
			<div className="mx-auto max-w-7xl">
				<h2 className="mb-12 font-gilda text-[28px] font-normal text-yv-dark-purple md:text-[38px] text-center">
					Meet Our Team
				</h2>

				<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
					{team.map((member) => (
						<article key={member.name} className="flex flex-col items-center text-center">
							<div className="mb-3 h-28 w-28 overflow-hidden rounded-xl bg-gray-100 md:h-32 md:w-32">
								<img
									src={member.image}
									alt={member.name}
									className="h-full w-full object-cover"
									loading="lazy"
									decoding="async"
								/>
							</div>
							<p className="text-lg font-semibold leading-snug text-yv-dark-purple">
								{member.name}
							</p>
							<p className="mt-1 text-base leading-snug text-gray-500">
								{member.role}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
