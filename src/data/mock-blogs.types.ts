export type BlogSection = {
    heading: string;
    accent: boolean;
    paragraphs: string[];
    bullets?: string[];
};

export type BlogAuthor = {
    name: string;
    avatar: string;
    bio: string;
};

export type BlogPost = {
    slug: string;
    category: string;
    date: string;
    title: string;
    titleHighlight: string;
    description: string;
    heroImage: string;
    trendingIndex?: string;
    sections: string[];
    body: BlogSection[];
    images: string[];
    author: BlogAuthor;
    takeaways: string[];
    relatedSlugs: string[];
    newsCta?: string;
};
