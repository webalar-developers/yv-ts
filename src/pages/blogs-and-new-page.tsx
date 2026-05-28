import { HeroBannerBlogsAndNews } from "#/components/blogs-and-news/hero-banner/hero-banner";
import TrendingSectionBlogsAndNews from "#/components/blogs-and-news/sections/trending-section";
import NextReadSectionBlogsAndNews from "#/components/blogs-and-news/sections/next-read-section";
import NewsSectionBlogsAndNews from "#/components/blogs-and-news/sections/news-section";
import CtaSectionBlogsAndNews from "#/components/blogs-and-news/sections/cta-section";

export function BlogsAndNewsPage() {
    return (
        <>
            <HeroBannerBlogsAndNews />
            <TrendingSectionBlogsAndNews />
            <NextReadSectionBlogsAndNews />
            <NewsSectionBlogsAndNews />
            <CtaSectionBlogsAndNews />
        </>
    );
}