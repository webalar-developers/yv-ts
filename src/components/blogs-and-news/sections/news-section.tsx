import { Link } from "react-router";
import { cn } from "#/lib/utils";
import { getNewsSectionData } from "#/data/mock-blogs.data";
import type { BlogPost } from "#/data/mock-blogs.types";

const { rowOne, hero, rowSmall } = getNewsSectionData();

function CategoryBadge({ label }: { label: string }) {
    return (
        <span className="absolute left-3 top-3 font-roboto bg-yv-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            {label}
        </span>
    );
}

interface CardProps {
    post: BlogPost;
    imageHeight?: string;
    titleSize?: string;
}

function NewsCard({ post, imageHeight = "h-[170px]", titleSize = "text-[28px]" }: CardProps) {
    return (
        <Link to={`/blogs-and-news/${post.slug}`} className="group flex flex-col gap-3">
            <div className={`relative w-full overflow-hidden ${imageHeight}`}>
                <img
                    src={post.heroImage}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                />
                <CategoryBadge label={post.category} />
            </div>

            <p className="text-[11px] font-medium uppercase tracking-widest text-yv-orange font-roboto">
                {post.date}
            </p>

            <h3
                className={cn(
                    "font-gilda leading-[1.35] line-clamp-2 text-gray-900 transition-colors duration-200 group-hover:text-[#E8612D]",
                    titleSize,
                )}
            >
                {post.title} {post.titleHighlight}
            </h3>
            <p className="line-clamp-2 text-[13px] leading-[1.65] text-gray-500 font-roboto">
                {post.description}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-yv-orange transition-opacity duration-200 group-hover:opacity-75 font-roboto">
                {post.newsCta ?? "READ MORE"}
                <span className="text-[13px]">→</span>
            </p>
        </Link>
    );
}

export default function NewsSectionBlogsAndNews() {
    return (
        <section className="w-full bg-white px-6 py-12 md:px-10 lg:px-14">
            <h2 className="mb-8 font-gilda text-[24px] leading-tight text-gray-900 sm:text-[30px] md:text-[34px]">
                In the News
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
                {rowOne.map((post) => (
                    <NewsCard
                        key={post.slug}
                        post={post}
                        imageHeight="h-[220px] sm:h-[300px] md:h-[400px]"
                        titleSize="text-[24px]"
                    />
                ))}
            </div>

            <div className="my-10 h-px w-full bg-gray-100" />

            <div className="grid grid-cols-1 gap-6 md:[grid-template-columns:5fr_3.5fr_3.5fr]">
                <NewsCard
                    post={hero}
                    imageHeight="h-[220px] md:h-[400px]"
                    titleSize="text-[28px]"
                />
                {rowSmall.map((post) => (
                    <NewsCard
                        key={post.slug}
                        post={post}
                        imageHeight="h-[220px] md:h-[450px]"
                        titleSize="text-[20px]"
                    />
                ))}
            </div>
        </section>
    );
}
