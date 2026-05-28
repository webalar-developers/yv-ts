import { cn } from "#/lib/utils";

const ROW_ONE = [
    {
        id: 1,
        category: "POLITICS",
        date: "January 24, 2025",
        image: "/blogs-and-news/news/news-1.png",
        title: "The Shift: How Local Governance is Redefining Youthville",
        description:
            "As the administrative landscape changes, we look at the leaders driving reform in the heart of the city.",
        cta: "READ MORE",
        href: "#",
    },
    {
        id: 2,
        category: "TECH",
        date: "January 22, 2025",
        image: "/blogs-and-news/news/news-2.png",
        title: "Future Tense: The AI Revolution in Creative Hubs",
        description:
            "Innovation doesn't sleep. Exploring the new tools that are reshaping our local design studios.",
        cta: "READ MORE",
        href: "#",
    },
    {
        id: 3,
        category: "CULTURE",
        date: "January 19, 2025",
        image: "/blogs-and-news/news/news-3.png",
        title: "Urban Echoes: The Resurgence of Vinyl in Youthville",
        description:
            "In a digital world, the physical medium finds its voice once again in the small alleys of our city.",
        cta: "READ MORE",
        href: "#",
    },
    {
        id: 4,
        category: "LIFESTYLE",
        date: "January 15, 2025",
        image: "/blogs-and-news/news/news-4.png",
        title: "The Art of Slowing Down: Mindful City Living",
        description: "Finding peace in the chaos. Our top picks for mindful escapes in the urban jungle.",
        cta: "READ MORE",
        href: "#",
    },
];

const ROW_TWO_HERO = {
    id: 5,
    category: "ECONOMY",
    date: "January 10, 2025",
    image: "/blogs-and-news/news/news-5.png",
    title: "Real Estate Reckoning: What 2025 Means for New Homeowners",
    description:
        "An in-depth analysis of the market trends shaping the future of housing in our fastest-growing suburbs.",
    cta: "READ FULL REPORT",
    href: "#",
};

const ROW_TWO_SMALL = [
    {
        id: 6,
        category: "SUSTAINABILITY",
        date: "January 05, 2025",
        image: "/blogs-and-news/news/news-6.png",
        title: "Green Lanes: The Push for a 100% Car-Free Center",
        description:
            "New proposals aim to return the streets to pedestrians and cyclists by the end of next year.",
        cta: "READ MORE",
        href: "#",
    },
    {
        id: 7,
        category: "DINING",
        date: "January 02, 2025",
        image: "/blogs-and-news/news/news-7.png",
        title: "Taste of Youthville: The Best New Openings of the Month",
        description:
            "From hidden ramen spots to rooftop lounges, explore our curated guide to the city's newest bites.",
        cta: "READ MORE",
        href: "#",
    },
];

function CategoryBadge({ label }: { label: string }) {
    return (
        <span className="absolute left-3 top-3 font-roboto bg-yv-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            {label}
        </span>
    );
}

interface CardProps {
    category: string;
    date: string;
    image: string;
    title: string;
    description: string;
    cta: string;
    href: string;
    imageHeight?: string;
    titleSize?: string;
}

function NewsCard({
    category,
    date,
    image,
    title,
    description,
    cta,
    href,
    imageHeight = "h-[170px]",
    titleSize = "text-[28px]",
}: CardProps) {
    return (
        <a href={href} className="group flex flex-col gap-3">
            <div className={`relative w-full overflow-hidden ${imageHeight}`}>
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                />
                <CategoryBadge label={category} />
            </div>

            <p className="text-[11px] font-medium uppercase tracking-widest text-yv-orange font-roboto">
                {date}
            </p>

            <h3
                className={cn(
                    "font-gilda leading-[1.35] line-clamp-2 text-gray-900 transition-colors duration-200 group-hover:text-[#E8612D] ",
                    titleSize
                )}
            >
                {title}
            </h3>
            <p className="line-clamp-2 text-[13px] leading-[1.65] text-gray-500 font-roboto line-clamp-2">
                {description}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-yv-orange transition-opacity duration-200 group-hover:opacity-75 font-roboto">
                {cta}
                <span className="text-[13px]">→</span>
            </p>
        </a>
    );
}

export default function NewsSectionBlogsAndNews() {
    return (
        <section className="w-full bg-white px-6 py-12 md:px-10 lg:px-14">
            <h2 className="mb-8 font-gilda text-[24px] leading-tight text-gray-900 sm:text-[30px] md:text-[34px]">
                In the News
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
                {ROW_ONE.map((a) => (
                    <NewsCard
                        key={a.id}
                        category={a.category}
                        date={a.date}
                        image={a.image}
                        title={a.title}
                        description={a.description}
                        cta={a.cta}
                        href={a.href}
                        imageHeight="h-[220px] sm:h-[300px] md:h-[400px]"
                        titleSize="text-[24px]"
                    />
                ))}
            </div>

            <div className="my-10 h-px w-full bg-gray-100" />
            <div className="grid grid-cols-1 gap-6 md:[grid-template-columns:5fr_3.5fr_3.5fr]">
                <NewsCard
                    key={ROW_TWO_HERO.id}
                    category={ROW_TWO_HERO.category}
                    date={ROW_TWO_HERO.date}
                    image={ROW_TWO_HERO.image}
                    title={ROW_TWO_HERO.title}
                    description={ROW_TWO_HERO.description}
                    cta={ROW_TWO_HERO.cta}
                    href={ROW_TWO_HERO.href}
                    imageHeight="h-[220px] md:h-[400px]"
                    titleSize="text-[28px]"
                />

                {ROW_TWO_SMALL.map((a) => (
                    <NewsCard
                        key={a.id}
                        category={a.category}
                        date={a.date}
                        image={a.image}
                        title={a.title}
                        description={a.description}
                        cta={a.cta}
                        href={a.href}
                        imageHeight="h-[220px] md:h-[450px]"
                        titleSize="text-[20px]"
                    />
                ))}
            </div>
        </section>
    );
}
