import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, Mail, Phone, Sparkles } from "lucide-react";

const POST = {
    category: "LIFESTYLE",
    date: "October 24, 2024",
    title: "Beyond the Room:",
    titleHighlight: "The Art of Co-Living",
    heroImage: "/blogs-and-news/blog-details/cover.png",
    body: [
        {
            heading: "Dive Deeper",
            accent: true,
            paragraphs: [
                "Co-living isn't just about sharing a roof; it's about curated connectivity. At Youthville, we believe the environment dictates the energy. The architecture of our common spaces is designed to foster spontaneous interaction while preserving the sanctity of your private sanctuary.",
                "When we designed our spaces, the focus was never just functionality — it was about creating an ecosystem where every corner adds value to your daily life. From focused work zones to social spaces and mindful retreats, every element is thoughtfully crafted to support modern living.",
            ],
            bullets: [
                "Acoustically treated quiet pods for deep focus.",
                "Open-plan communal kitchens where dinner is the dialogue.",
                "Rooftop meditation decks for the sunrise ritual.",
            ],
        },
        {
            heading: "Designing for Connection",
            accent: false,
            paragraphs: [
                "When we designed the latest wing at our Pune flagship, we didn't just think about spaces — we studied how people actually live, move, and interact throughout their day. Students and young professionals today don't follow rigid routines; their days flow between focused work, casual conversations, and moments of relaxation. Instead of forcing structure, we wanted the design to naturally support this fluid lifestyle. Every element was carefully planned to ensure that residents could transition seamlessly between productivity and comfort without feeling restricted by the space around them.",
                "Rather than creating a conventional 'work zone,' we envisioned an ecosystem where each area serves a purpose while still feeling connected to the whole. Quiet pods allow for deep focus when needed, while open communal spaces invite interaction and collaboration. Kitchens become more than just functional areas — they turn into places where conversations begin and friendships grow. The idea was to create an environment where people don't have to choose between privacy and community, but instead experience both in harmony.",
                "At Youthville, design is not just about how a space looks — it's about how it makes you feel and function every day. Every corner is thoughtfully crafted to encourage meaningful connections while still respecting personal boundaries. Whether it's finding inspiration in shared spaces or unwinding in peaceful corners, the environment adapts to your rhythm. This balance between individuality and community is what transforms co-living from a simple concept into a truly enriching lifestyle experience.",
                "Our residents report a 40% increase in productivity when switching from traditional apartment living to our integrated model. It's the 'Youthville Effect' — a synergy of people and place.",
            ],
        },
    ],
    images: [
        "/blogs-and-news/blog-details/image-one.png",
        "/blogs-and-news/blog-details/image-two.png",
    ],
    author: {
        name: "Sarah Sterling",
        avatar: "/blogs-and-news/news/news-1.png",
        bio: "Sarah is the Chief Experience Officer at Youthville. With a decade in urban planning and sociology, she crafts the community rituals that make our houses feel like homes.",
    },
};

const RELATED = [
    {
        id: 1,
        category: "COMMUNITY",
        title: "Finding Your Inner Circle in a New City",
        image: "/blogs-and-news/blog-details/related-blogs/image-one.png",
        href: "#",
    },
    {
        id: 2,
        category: "PRODUCTIVITY",
        title: "Mastering Time Management: A Student's Guide",
        image: "/blogs-and-news/blog-details/related-blogs/image-two.png",
        href: "#",
    },
    {
        id: 3,
        category: "EVENTS",
        title: "Upcoming Winter Socials: What to Expect",
        image: "/blogs-and-news/blog-details/related-blogs/image-three.png",
        href: "#",
    },
];

function ChatGptIcon() {
    return (
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.412-.663zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
        </svg>
    );
}

function ClaudeIcon() {
    return (
        <svg viewBox="0 0 24 24" className="size-4" fill="#D97757">
            <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-1.768-.122-.571-.121-.524-.413-.158-.62.048-.547.376-.51.583-.17 1.756.34 1.342.28 2.212.389 1.852.376h.128l.073-.091-.055-.14-.334-.42-1.67-2.288-1.281-1.853-.937-1.415-.481-.754-.243-.766.073-.656.425-.534.547-.316.668-.012.547.158.444.43.43.559 1.002 1.537 1.135 1.756 1.19 1.792.34.535.14.164h.107l.097-.164-.042-2.86-.048-1.927.006-1.927.086-1.476.188-.668.522-.462.693-.146.644.14.522.437.231.62-.019 1.537-.103 1.927-.128 2.87v.146l.097.14.116-.14.68-1.062 1.38-2.02 1.026-1.403.832-1.01.596-.608.656-.267.693.091.559.364.346.559.048.656-.158.547-.534.717-1.026 1.39-1.415 1.854-.729 1.014-.522.851.006.14.055.037h.14l1.708-.619 1.927-.644 1.415-.413 1.14-.267.662.073.522.462.267.668-.055.668-.377.546-.571.304-1.39.28-2.03.559-1.756.547-.437.176-.104.14.073.14.48.42 1.562 1.33 1.683 1.39 1.14 1.05.607.729.28.632-.073.729-.377.583-.547.34-.644.043-.705-.28-.76-.596-1.44-1.257-1.354-1.135-.292-.231h-.073v.14l.403.571.948 1.38.949 1.44.619.985.316.668.043.656-.243.583-.474.413-.632.14-.631-.158-.425-.34-1.026-1.55-1.27-1.83-1.26-1.927-.334-.462-.097-.073-.14.073v.182l.14 2.09.048 2.518-.019 1.83-.14.79-.388.608-.62.316-.668.073-.583-.243-.462-.462-.231-.729.049-1.415.097-1.927.097-2.627v-.146l-.097-.073-.128.073-.486.79-1.44 2.31-1.062 1.683-.777 1.062-.619.729-.668.364-.656-.043-.571-.316-.364-.535-.012-.631.243-.632.79-1.135 1.307-1.902z" />
        </svg>
    );
}

function GoogleAiIcon() {
    return (
        <svg viewBox="0 0 24 24" className="size-4">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
    );
}

function GrokIcon() {
    return (
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
            <path d="M13.557 4.643L9.345 12l4.212 7.358H9.843L5.63 12l4.212-7.357h3.714zm.857 0h3.713L13.915 12l4.212 7.358h-3.713L10.2 12l4.214-7.357z" />
        </svg>
    );
}

function PerplexityIcon() {
    return (
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
            <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-10-6l-1.5 4H7l3.25 2.5L9 17l3-2.5 3 2.5-1.25-4.5L17 10h-3.5L12 6z" />
        </svg>
    );
}

const AI_TOOLS = [
    { name: "ChatGPT", icon: <ChatGptIcon /> },
    { name: "Claude", icon: <ClaudeIcon /> },
    { name: "Google AI", icon: <GoogleAiIcon /> },
    { name: "Grok", icon: <GrokIcon /> },
    { name: "Perplexity", icon: <PerplexityIcon /> },
];

const SKELETON_WIDTHS = ["w-4/5", "w-full", "w-3/5", "w-11/12","w-2/3","w-4/5"];

function AiPanel() {
    const [unlocked, setUnlocked] = useState(false);

    const TAKEAWAYS = [
        "Co-living environments directly impact resident productivity and well-being.",
        "Youthville spaces are designed to balance privacy with spontaneous social interaction.",
        "Common areas function as catalysts for community building and collaboration.",
        "The 'Youthville Effect' shows a measurable 40% productivity increase vs traditional apartments.",
    ];

    return (
        <div className="my-8 rounded-xl border border-gray-200 bg-white px-6 py-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 size-5 shrink-0 text-[#E8612D]" />
                    <div>
                        <p className="text-lg font-semibold text-gray-900 font-gilda">
                            Get Instant Insights with AI
                        </p>
                        <p className="font-roboto text-[12px] text-gray-500">
                            Summarize key takeaways and explore insights from this article using AI tools.
                        </p>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={() => setUnlocked(true)}
                    className="shrink-0  bg-[#E8612D] px-5 py-4 font-roboto text-[13px] text-white transition-opacity hover:opacity-90 sm:self-start"
                >
                    Generate Summary →
                </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-4">
                {AI_TOOLS.map((tool) => (
                    <div
                        key={tool.name}
                        className="flex items-center gap-2 rounded-full border border-yv-orange/20 bg-white px-4 py-3 shadow-xs"
                    >
                        {tool.icon}
                        <span className="font-roboto text-base font-normal text-yv-orange">{tool.name}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4  border-t border-border">
                <p className="px-4 py-2.5 font-roboto text-xs font-bold uppercase tracking-widest text-gray-400">
                    Key Takeaways Preview
                </p>
                <div className="relative px-4 pt-4">
                    {!unlocked ? (
                        <div className="space-y-3 relative">
                            {SKELETON_WIDTHS.map((w, i) => (
                                <div
                                    key={i}
                                    className={`h-4 rounded-full bg-[#E5E7EB] ${w}`}
                                />
                            ))}
                            <div className="flex justify-center pt-2">
                                <button
                                    type="button"
                                    onClick={() => setUnlocked(true)}
                                    className="rounded-full bg-yv-orange/10 px-6 absolute bottom-8 py-4 font-roboto text-sm font-medium text-gray-800 transition-colors hover:bg-[#f0d5cc]"
                                >
                                    Click to unlock AI summary
                                </button>
                            </div>
                        </div>
                    ) : (
                        <ul className="space-y-2">
                            {TAKEAWAYS.map((t) => (
                                <li key={t} className="flex items-start gap-2">
                                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#E8612D]" />
                                    <span className="font-roboto text-[13px] leading-[1.6] text-gray-700">{t}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

function Sidebar({ onBooking }: { onBooking?: () => void }) {
    const [email, setEmail] = useState("");

    return (
        <aside className="flex flex-col gap-5">
            <div className="rounded-2xl bg-[#1A1A1A] px-6 py-6 text-white">
                <h3 className="mb-2 font-gilda text-[20px] leading-snug">
                    See It Before You Move
                </h3>
                <p className="mb-5 font-roboto text-[12.5px] leading-[1.65] text-white/70">
                    Experience the vibe firsthand with a physical tour or guided VR walkthrough from anywhere in the world.
                </p>
                <button
                    type="button"
                    onClick={onBooking}
                    className="mb-3 w-full rounded-full bg-[#E8612D] py-2.5 font-roboto text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                    Book Now
                </button>
                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-white/30 py-2.5 font-roboto text-[13px] font-semibold text-white transition-colors hover:border-white/60"
                >
                    <Phone className="size-3.5" />
                    Call Now
                </button>
            </div>

            <div className="rounded-2xl bg-yv-orange/10 border-yv-orange/20 border px-6 py-6">
                <div className="mb-3 flex size-9 items-center justify-center rounded-full bg-[#E8612D]/15">
                    <Mail className="size-4 text-[#E8612D]" />
                </div>
                <h3 className="mb-1 font-gilda text-[18px] leading-snug text-gray-900">
                    The Weekly Journal
                </h3>
                <p className="mb-4 font-roboto text-[12px] text-gray-500">
                    Modern living insights delivered every Tuesday.
                </p>
                <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2.5 w-full rounded-full border border-gray-200 bg-white px-4 py-2.5 font-roboto text-[12.5px] text-gray-700 placeholder:text-gray-400 outline-none focus:border-[#E8612D]"
                />
                <button
                    type="button"
                    onClick={() => setEmail("")}
                    className="w-full rounded-full bg-[#1A1A1A] py-2.5 font-roboto text-[12px] font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-80"
                >
                    Subscribe
                </button>
            </div>
        </aside>
    );
}

function RelatedReads() {
    return (
        <section className="border-t bg-white border-gray-100 px-6 py-12 md:px-10 lg:px-14">
            <h2 className="mb-8 text-center font-gilda text-[30px] text-gray-900">Related Reads</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {RELATED.map((item) => (
                    <Link
                        to={item.href}
                        key={item.id}
                        className="group flex flex-col overflow-hidden rounded-2xl bg-[#F8F6F6] shadow-md  hover:shadow-lg "
                    >
                        <div className="h-[300px] overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <span className="font-roboto text-[11px] font-bold uppercase tracking-widest text-[#E8612D]">
                                {item.category}
                            </span>
                            <h3 className="font-gilda text-2xl leading-snug text-gray-900 transition-colors group-hover:text-[#E8612D]">
                                {item.title}
                            </h3>
                            <p className="font-roboto text-[12px] font-bold text-gray-800">
                                Read More
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

function CtaBanner() {
    return (
        <section className="px-6 pb-12 md:px-10 lg:px-14 max-w-7xl mx-auto">
            <div className="rounded-2xl bg-linear-to-r from-[#340F33] to-[#6D396C] px-8 py-14 text-center">
                <h2 className="mb-3 font-gilda text-[32px] leading-snug text-white md:text-[38px]">
                    Be a Part of Youthville
                </h2>
                <p className="mb-7 font-roboto text-lg text-white/75">
                    More than just living, it's about belonging to a community that inspires your everyday growth.
                </p>
                <button
                    type="button"
                    className="bg-white px-8 py-3 font-roboto text-[14px] font-semibold text-[#E8612D] transition-opacity hover:opacity-90"
                >
                    Get Started
                </button>
            </div>
        </section>
    );
}

export default function BlogDetailSection() {
    return (
        <div className="bg-[#F8F6F6] container mx-auto">
            <div className="px-6 pt-6 md:px-10 lg:px-14">
                <Link
                    to="/blogs-and-news"
                    className="inline-flex items-center gap-1.5 font-roboto text-[12px] font-semibold uppercase tracking-widest text-gray-500 transition-colors hover:text-[#E8612D]"
                >
                    <ArrowLeft className="size-3.5" />
                    Back to Blogs
                </Link>
            </div>

            <div className="px-6 pt-6 text-center md:px-10 lg:px-14">
                <div className="mb-3 flex items-center justify-center gap-3">
                    <span className="bg-[#E8612D] rounded-4xl px-3 py-1 font-roboto text-[10px] font-bold uppercase tracking-widest text-black">
                        {POST.category}
                    </span>
                    <span className="font-roboto text-[12px] text-gray-400">{POST.date}</span>
                </div>
                <h1 className="mx-auto max-w-3xl font-gilda text-[36px] leading-[1.2] text-gray-900 sm:text-[44px] md:text-[52px]">
                    {POST.title}
                    <br />
                    <span className="text-[#E8612D]">{POST.titleHighlight}</span>
                </h1>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl  max-w-7xl mx-auto">
                <img
                    src={POST.heroImage}
                    alt={POST.title}
                    className="h-[280px] w-full object-cover sm:h-[380px] md:h-[480px]"
                />
            </div>

            <div className="px-6 md:px-10 lg:px-14">
                <AiPanel />
            </div>

            <div className="px-6 pb-4 md:px-10 lg:px-14">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
                    <article>
                        {POST.body.map((section) => (
                            <div key={section.heading} className="mb-8">
                                <h2
                                    className={`mb-4 font-gilda text-[24px] text-gray-900 md:text-[26px] ${
                                        section.accent
                                            ? "border-l-4 border-[#E8612D] pl-4"
                                            : ""
                                    }`}
                                >
                                    {section.heading}
                                </h2>

                                {section.paragraphs.map((p) => (
                                    <p
                                        key={p.slice(0, 30)}
                                        className="mb-4 font-roboto text-[14px] leading-[1.85] text-gray-600"
                                    >
                                        {p}
                                    </p>
                                ))}

                                {section.bullets && (
                                    <ul className="mt-3 space-y-2">
                                        {section.bullets.map((b) => (
                                            <li key={b} className="flex items-start gap-2.5">
                                                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#E8612D]" />
                                                <span className="font-roboto text-[14px] leading-[1.7] text-gray-600">
                                                    {b}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                        <div className="mb-8 grid grid-cols-2 gap-4">
                            {POST.images.map((src, i) => (
                                <div key={src} className="overflow-hidden rounded-xl">
                                    <img
                                        src={src}
                                        alt={`Article image ${i + 1}`}
                                        className="h-[180px] w-full object-cover sm:h-[220px]"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="mb-10 flex flex-wrap items-center gap-3">
                            <button
                                type="button"
                                className=" bg-[#E8612D] px-7 py-3 font-roboto text-[13px] text-white transition-opacity hover:opacity-90"
                            >
                                Book a Viewing
                            </button>
                            <button
                                type="button"
                                className="border border-gray-300 px-7 py-3 font-roboto text-[13px] text-gray-700 transition-colors bg-black/10 hover:bg-black/20"
                            >
                                Read More Blogs
                            </button>
                        </div>

                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="flex items-start gap-4">
                                <img
                                    src={POST.author.avatar}
                                    alt={POST.author.name}
                                    className="size-14 shrink-0 rounded-full object-cover ring-2 ring-[#E8612D] ring-offset-2"
                                />
                                <div>
                                    <p className="mb-1 font-gilda text-[18px] text-gray-900">
                                        {POST.author.name}
                                    </p>
                                    <p className="mb-3 font-roboto text-justify text-[13px] leading-[1.65] text-gray-500">
                                        {POST.author.bio}
                                    </p>
                                    <button
                                        type="button"
                                        className="font-roboto text-[12px] text-[#E8612D] underline-offset-2 hover:underline"
                                    >
                                        Know More
                                    </button>
                                    <div className="mb-4 h-[2px] w-16 bg-yv-orange" />
                                </div>
                            </div>
                        </div>
                    </article>

                    <div className="hidden lg:block">
                        <div className="sticky top-24">
                            <Sidebar />
                        </div>
                    </div>
                </div>

                <div className="mt-8 lg:hidden">
                    <Sidebar />
                </div>
            </div>

            <RelatedReads />
            <CtaBanner />
        </div>
    );
}
