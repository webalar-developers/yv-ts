
const ARTICLES = [
    {
        id: 1,
        image: "/blogs-and-news/next-read/shared-living.png",
        title: "The Art of Shared Living: Making Friends in Co-living Spaces",
        description:
            "Moving to a new city can be daunting. In this guide, we explore how to turn neighbors into family and make the most of Youthville's vibrant communal...",
        href: "#",
    },
    {
        id: 2,
        image: "/blogs-and-news/next-read/internships.png",
        title: "5 Internships in Pune You Shouldn't Miss This Summer",
        description:
            "Pune is a hub of opportunities. We've curated a list of the hottest internships across tech, marketing, and design for the upcoming summer break to...",
        href: "#",
    },
    {
        id: 3,
        image: "/blogs-and-news/next-read/weekend-getaways.png",
        title: "Budget Friendly Weekend Getaways Near Pune",
        description:
            "Need a break from the books? Check out these five hidden gems around Pune that are accessible by bus and won't burn a hole in your monthly living...",
        href: "#",
    },
];

function NextReadCard({ article }: { article: (typeof ARTICLES)[number] }) {
    return (
        <a
            href={article.href}
            className="group flex flex-col overflow-hidden max-w-[432px] rounded-[44px] bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
            <div className="relative h-[288px] max-w-[432px] w-full overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                />
            </div>

            <div className="flex flex-1 flex-col justify-between px-6 py-6">
                <div>
                    <h3 className="mb-3 font-gilda text-[22px] leading-[1.35] text-gray-900">
                        {article.title}
                    </h3>
                    <p className="text-[13.5px] leading-[1.65] text-gray-500 line-clamp-3 font-roboto">
                        {article.description}
                    </p>
                </div>

                <p className="mt-5 text-[13.5px] font-semibold text-[#E8612D] transition-opacity duration-200 group-hover:opacity-75 font-roboto">
                    Read More
                </p>
            </div>
        </a>
    );
}

export default function NextReadSectionBlogsAndNews() {
    return (
        <section id="next-read" className="w-full bg-[#F8F6F6] px-6 py-12 md:px-10 lg:px-14">
            <div className="mb-10">
                <h2 className="mb-3 font-gilda text-[34px] leading-tight text-gray-900">
                    Your Next Read Awaits
                </h2>
                <p className="max-w-xl text-[14px] leading-[1.65] text-gray-500 font-roboto">
                    Handpicked articles, guides, and tips for students and young
                    professionals - bite-sized previews, easy to scan, fully packed with
                    value.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {ARTICLES.map((article) => (
                    <NextReadCard key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
}
