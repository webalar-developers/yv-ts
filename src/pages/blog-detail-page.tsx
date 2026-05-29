import { useParams } from "react-router";
import BlogDetailSection from "#/components/blogs-and-news/blog-detail/blog-detail-section";
import { NotFound } from "@/components/layout/not-found/not-found";
import { getBlogBySlug } from "@/data/mock-blogs.data";
import { usePageHead } from "@/hooks/use-page-head";

export function BlogDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = getBlogBySlug(slug ?? "");

    usePageHead({
        title: post
            ? `${post.title} ${post.titleHighlight} | Youthville Blog`
            : "Blog | Youthville",
        description: post?.description ?? "Explore insights on co-living, student life, and modern urban living at Youthville.",
        keywords: post ? `${post.category.toLowerCase()}, youthville, blog, student living, pune` : "youthville blog",
        path: `/blogs-and-news/${slug}`,
    });

    if (!post) return <NotFound />;

    return <BlogDetailSection post={post} />;
}
