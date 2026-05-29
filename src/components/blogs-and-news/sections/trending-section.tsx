import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { getTrendingPosts } from "#/data/mock-blogs.data";

const articles = getTrendingPosts();

function ArticleCard({ article }: { article: (typeof articles)[number] }) {
    return (
        <Link
            to={`/blogs-and-news/${article.slug}`}
            className="group flex w-[min(92vw,600px)] flex-none overflow-hidden rounded-[44px] bg-[#F8F6F6] transition-shadow duration-300 hover:shadow-md"
            draggable={false}
        >
            <div className="relative h-60 w-40 shrink-0 overflow-hidden md:w-70">
                <img
                    src={article.heroImage}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                />
            </div>

            <div className="flex flex-1 flex-col justify-between px-5 py-5">
                <div>
                    <p className="mb-2 text-[11px] font-semibold font-roboto uppercase tracking-[0.12em] text-[#E8612D]">
                        {article.category}
                    </p>
                    <h3 className="mb-3 font-gilda text-[18px] leading-[1.35] text-gray-900">
                        {article.title} {article.titleHighlight}
                    </h3>
                    <p className="text-[13px] leading-[1.6] text-gray-500 font-roboto line-clamp-3">
                        {article.description}
                    </p>
                </div>

                <p className="mt-4 text-[13px] font-semibold text-[#E8612D] transition-opacity duration-200 group-hover:opacity-80 font-roboto">
                    {article.trendingIndex}&nbsp;—&nbsp;Read More
                </p>
            </div>
        </Link>
    );
}

export default function TrendingSectionBlogsAndNews() {
    const trackRef = useRef<HTMLDivElement>(null);

    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const scrollStartLeft = useRef(0);

    const onPointerDown = useCallback((e: React.PointerEvent) => {
        if (!trackRef.current) return;
        isDragging.current = true;
        dragStartX.current = e.clientX;
        scrollStartLeft.current = trackRef.current.scrollLeft;
        trackRef.current.style.cursor = "grabbing";
        trackRef.current.setPointerCapture(e.pointerId);
    }, []);

    const onPointerMove = useCallback((e: React.PointerEvent) => {
        if (!isDragging.current || !trackRef.current) return;
        const delta = dragStartX.current - e.clientX;
        trackRef.current.scrollLeft = scrollStartLeft.current + delta;
    }, []);

    const onPointerUp = useCallback(() => {
        isDragging.current = false;
        if (trackRef.current) trackRef.current.style.cursor = "grab";
    }, []);

    const CARD_WIDTH = 720 + 16;
    const scroll = (dir: "left" | "right") => {
        if (!trackRef.current) return;
        trackRef.current.scrollBy({
            left: dir === "right" ? CARD_WIDTH : -CARD_WIDTH,
            behavior: "smooth",
        });
    };

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const onScroll = () => {
        const el = trackRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    return (
        <section id="trending" className="w-full overflow-hidden py-10">
            <div className="mb-7 flex items-start justify-between px-6 md:px-10 lg:px-14">
                <div className="max-w-lg">
                    <h2 className="mb-2 font-gilda text-[34px] leading-tight text-gray-900">
                        Trending This Week
                    </h2>
                    <p className="text-[14px] leading-[1.6] text-gray-500 font-roboto">
                        Don't miss the hottest reads that our community loves - insights,
                        hacks, and stories that resonate.
                    </p>
                </div>

                <div className="flex shrink-0 items-center gap-4 pt-1">
                    <Link
                        to="/blogs-and-news"
                        className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8612D] transition-opacity hover:opacity-75"
                    >
                        Read Now
                    </Link>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className="flex size-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all hover:border-[#E8612D] hover:text-[#E8612D] disabled:cursor-not-allowed disabled:opacity-30"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="size-4" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className="flex size-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-all hover:border-[#E8612D] hover:text-[#E8612D] disabled:cursor-not-allowed disabled:opacity-30"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="size-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-white to-transparent" />

                <div
                    ref={trackRef}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerLeave={onPointerUp}
                    onScroll={onScroll}
                    className="flex gap-4 overflow-x-auto scroll-smooth px-6 pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden md:px-10 lg:px-14"
                    style={{ cursor: "grab" }}
                >
                    {articles.map((article) => (
                        <ArticleCard key={article.slug} article={article} />
                    ))}

                    <div className="w-4 shrink-0" />
                </div>
            </div>
        </section>
    );
}
