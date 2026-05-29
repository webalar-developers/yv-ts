import { Link } from "react-router";
import { getNextReadPosts } from "#/data/mock-blogs.data";

const articles = getNextReadPosts();

function NextReadCard({ article }: { article: (typeof articles)[number] }) {
    return (
        <Link
            to={`/blogs-and-news/${article.slug}`}
            className="group flex flex-col overflow-hidden max-w-[432px] rounded-[44px] bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
            <div className="relative h-[288px] max-w-[432px] w-full overflow-hidden">
                <img
                    src={article.heroImage}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                />
            </div>

            <div className="flex flex-1 flex-col justify-between px-6 py-6">
                <div>
                    <h3 className="mb-3 font-gilda text-[22px] leading-[1.35] text-gray-900">
                        {article.title} {article.titleHighlight}
                    </h3>
                    <p className="text-[13.5px] leading-[1.65] text-gray-500 line-clamp-3 font-roboto">
                        {article.description}
                    </p>
                </div>

                <p className="mt-5 text-[13.5px] font-semibold text-[#E8612D] transition-opacity duration-200 group-hover:opacity-75 font-roboto">
                    Read More
                </p>
            </div>
        </Link>
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
                {articles.map((article) => (
                    <NextReadCard key={article.slug} article={article} />
                ))}
            </div>
        </section>
    );
}
