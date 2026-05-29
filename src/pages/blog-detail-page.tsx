import BlogDetailSection from "#/components/blogs-and-news/blog-detail/blog-detail-section";
import { usePageHead } from "@/hooks/use-page-head";

export function BlogDetailPage() {
    usePageHead({
        title: "Beyond the Room: The Art of Co-Living | Youthville Blog",
        description:
            "Co-living isn't just about sharing a roof — it's about curated connectivity. Explore how Youthville designs spaces that foster spontaneous interaction and community.",
        keywords: "co-living, lifestyle, youthville, student living, community living, coliving blog",
        path: "/blogs-and-news/beyond-the-room-art-of-co-living",
    });

    return (
        <>
            <BlogDetailSection />
        </>
    );
}
