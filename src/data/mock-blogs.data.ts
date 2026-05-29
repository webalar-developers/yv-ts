import type { BlogPost } from "./mock-blogs.types";

const AUTHORS = {
    sarah: {
        name: "Sarah Sterling",
        avatar: "/blogs-and-news/news/news-1.png",
        bio: "Sarah is the Chief Experience Officer at Youthville. With a decade in urban planning and sociology, she crafts the community rituals that make our houses feel like homes.",
    },
    rahul: {
        name: "Rahul Mehta",
        avatar: "/blogs-and-news/news/news-2.png",
        bio: "Rahul is a personal finance writer and student mentor at Youthville. He specialises in helping young professionals navigate their first salary and spending habits.",
    },
    priya: {
        name: "Priya Nair",
        avatar: "/blogs-and-news/news/news-3.png",
        bio: "Priya covers urban culture, wellness, and student life. A former resident of Youthville Pune, she writes from lived experience.",
    },
    amit: {
        name: "Amit Sharma",
        avatar: "/blogs-and-news/news/news-4.png",
        bio: "Amit is a journalist covering real estate and urban development. He has reported for national publications and now contributes exclusively to Youthville Insights.",
    },
};

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "why-youthville-is-punes-most-premium-hostel",
        category: "LIFESTYLE",
        date: "May 20, 2025",
        title: "Why Youthville Is Pune's",
        titleHighlight: "Most Premium Hostel",
        description:
            "When it comes to premium student accommodation in Pune, Youthville stands in a class of its own — a sanctuary where comfort, safety, and community converge.",
        heroImage: "/blogs-and-news/blog-details/cover.png",
        trendingIndex: "01",
        sections: ["trending", "news-hero", "next-read"],
        newsCta: "READ MORE",
        body: [
            {
                heading: "A Premium Experience, By Design",
                accent: true,
                paragraphs: [
                    "When it comes to premium student accommodation in Pune, Youthville Serviced Hostel stands in a class of its own. Unlike ordinary paying guest facilities or budget hostels, Youthville has been architected as a lifestyle destination — a sanctuary where comfort, safety, and community converge to create an experience that is genuinely world-class.",
                    "Located across prime localities in Pune including Balewadi, Karve Nagar, SBR, Hinjewadi, Kiwale, Yerwada, and more, Youthville properties are strategically positioned near top educational institutions and corporate parks. For students at Symbiosis International University, MIT-WPU, and NMIMS, as well as professionals working at ICC Tech Towers and Amar Tech Park, the commute is minimal and lifestyle is maximized.",
                    "What defines Youthville as a premium hostel is the attention to detail in every amenity. Residents enjoy hot, freshly cooked meals prepared on-site every day — no more worrying about where your next meal is coming from or whether it meets hygiene standards.",
                ],
                bullets: [
                    "Hot, freshly cooked meals prepared on-site every day.",
                    "Professional housekeeping and integrated laundry services.",
                    "All rooms WiFi-enabled with high-speed internet connectivity.",
                    "CCTV surveillance, trained staff, and controlled visitor access.",
                ],
            },
            {
                heading: "Beyond Accommodation",
                accent: false,
                paragraphs: [
                    "Safety is non-negotiable at Youthville. The properties feature CCTV surveillance, trained on-site staff, controlled visitor access, and a secure environment that gives parents complete peace of mind. For young women and men living away from home for the first time, this is the kind of safe haven that makes the transition to independent living genuinely comfortable.",
                    "The community living experience at Youthville is another dimension entirely. Common areas are designed for connection — from the Coffeeville café corner to the Gyaani reading nook, the fitness zone, and event spaces where residents celebrate festivals and milestones together.",
                    "At Youthville, you don't just rent a bed — you join a family. For anyone searching for the best hostel in Pune or the finest PG accommodation near Symbiosis or MIT, the answer is clear. Youthville is not just the best option — it is the only option that truly combines premium living with safety, convenience, and community.",
                ],
            },
        ],
        images: [
            "/blogs-and-news/blog-details/image-one.png",
            "/blogs-and-news/blog-details/image-two.png",
        ],
        author: AUTHORS.sarah,
        takeaways: [
            "Youthville is positioned near Pune's top educational institutions and corporate parks.",
            "Premium amenities include on-site meals, housekeeping, laundry, and high-speed WiFi.",
            "Safety infrastructure includes 24/7 CCTV, controlled access, and background-verified staff.",
            "Youthville offers community and belonging, not just accommodation.",
        ],
        relatedSlugs: [
            "safety-first-why-parents-trust-youthville",
            "hot-home-cooked-meals-youthville-dining",
            "best-hostel-near-symbiosis-pune",
        ],
    },
    {
        slug: "hot-home-cooked-meals-youthville-dining",
        category: "DINING",
        date: "May 15, 2025",
        title: "Hot, Home-Cooked Meals Every Day:",
        titleHighlight: "The Youthville Dining Experience",
        description:
            "At Youthville, freshly cooked meals are served three times a day by professional kitchen staff. No more instant noodles, no more food anxiety — just great food, every day.",
        heroImage: "/blogs-and-news/news/news-1.png",
        trendingIndex: "02",
        sections: ["trending", "news-row-1"],
        newsCta: "READ MORE",
        body: [
            {
                heading: "The Food Problem, Solved",
                accent: true,
                paragraphs: [
                    "One of the greatest anxieties for students moving to a new city is the question of food. Will the canteen food be edible? Will I survive on instant noodles? Is there a hygienic, affordable restaurant nearby? At Youthville Serviced Hostel in Pune and Mumbai, this entire category of worry simply disappears.",
                    "Youthville offers on-site, freshly cooked meals every single day — breakfast, lunch, and dinner — prepared by professional kitchen staff in fully equipped, hygienic catering kitchens. The food is not cafeteria-grade assembly-line servings. It is home-style, nutritious, varied, and made with the kind of care that reminds you of your mother's kitchen.",
                    "For students who are already stretching brainpower across lectures, assignments, and internships, proper nutrition is not optional — it is fuel. Research consistently shows that students with access to regular, balanced meals perform significantly better academically. Youthville understands this deeply.",
                ],
                bullets: [
                    "Breakfast, lunch, and dinner cooked fresh on-site daily.",
                    "Rotating menu: Maharashtra thalis, north Indian, continental, and festive specials.",
                    "Strict hygiene protocols with vaccinated, health-certified kitchen staff.",
                    "Dietary preferences accommodated where possible.",
                ],
            },
            {
                heading: "More Than Just Meals",
                accent: false,
                paragraphs: [
                    "Meals at Youthville are typically inclusive in the accommodation package, removing the daily financial and logistical burden of hunting for food. Residents are freed from the 7 PM rush to nearby dhabas or the expensive habit of ordering from food delivery apps every night.",
                    "The menu rotates to ensure variety — from traditional Maharashtra-style thalis to north Indian staples, occasional continental options, and festive special menus during Diwali, Holi, and other celebrations.",
                    "For working professionals staying at Youthville properties near corporate hubs in Balewadi and Hinjewadi, the morning breakfast and evening dinner service means one less thing to think about after a demanding workday. In a city where food delivery bills can quickly become a significant monthly expense, Youthville's inclusive meal model is not just convenient — it is genuinely economical.",
                ],
            },
        ],
        images: [
            "/blogs-and-news/news/news-2.png",
            "/blogs-and-news/news/news-3.png",
        ],
        author: AUTHORS.priya,
        takeaways: [
            "Youthville serves freshly cooked breakfast, lunch, and dinner every day on-site.",
            "Menus rotate across regional and continental cuisines with festive special meals.",
            "Inclusive meal packages eliminate the hidden monthly cost of food delivery apps.",
            "Proper nutrition directly improves academic and professional performance.",
        ],
        relatedSlugs: [
            "why-youthville-is-punes-most-premium-hostel",
            "laundry-housekeeping-youthville-chore-free",
            "best-hostel-near-symbiosis-pune",
        ],
    },
    {
        slug: "safety-first-why-parents-trust-youthville",
        category: "SAFETY",
        date: "May 10, 2025",
        title: "Safety First:",
        titleHighlight: "Why Parents Trust Youthville",
        description:
            "Sending a child to a new city is one of the most complex experiences a parent navigates. Youthville's safety infrastructure gives families complete peace of mind from day one.",
        heroImage: "/blogs-and-news/news/news-3.png",
        trendingIndex: "03",
        sections: ["trending", "news-row-1", "next-read"],
        newsCta: "READ MORE",
        body: [
            {
                heading: "Safety by Design",
                accent: true,
                paragraphs: [
                    "Sending a child to a new city for higher education is one of the most emotionally complex experiences a parent can navigate. The pride of watching your child step into independence is shadowed by a very real anxiety: will they be safe? At Youthville Serviced Hostel in Pune and Mumbai, the answer to that question is an unequivocal yes.",
                    "Youthville has been designed from the ground up with safety as a foundational value, not an afterthought. The properties feature comprehensive CCTV surveillance across all common areas, entrances, exits, and corridors — a 24/7 monitoring system that ensures every inch of the campus is covered.",
                    "Access control is stringent. All residents register on entry, and visitors are restricted to designated lobbies during specified hours. Non-residents are not permitted beyond the reception area after 8 PM, and all guests must be formally announced and logged.",
                ],
                bullets: [
                    "24/7 CCTV surveillance across all common areas and corridors.",
                    "Controlled visitor access with formal logging after 8 PM.",
                    "Background-verified, health-screened on-site staff.",
                    "Dedicated all-girls properties like YV SBR 2 for female residents.",
                ],
            },
            {
                heading: "The Human Safety Network",
                accent: false,
                paragraphs: [
                    "The on-site staff at Youthville includes trained facility managers, Youthville Buddy support personnel, housekeeping professionals, and kitchen staff — all of whom have undergone background verification and health screening. Staff are equipped to handle medical emergencies with basic first aid capabilities.",
                    "The psychological safety at Youthville is equally important. The Youthville Buddy program ensures that new residents have a peer support contact who helps them settle in, navigate the property rules, and feel welcomed from day one. Homesickness and anxiety are common in the first weeks of hostel life, and having a structured peer support system makes a profound difference.",
                    "Parents across India have expressed their gratitude and relief in Youthville testimonials — appreciating not just the safety infrastructure but the warmth and attentiveness of the staff. This is Youthville's promise: your child's new home is safe, supervised, and supportive.",
                ],
            },
        ],
        images: [
            "/blogs-and-news/news/news-4.png",
            "/blogs-and-news/blog-details/image-one.png",
        ],
        author: AUTHORS.amit,
        takeaways: [
            "24/7 CCTV surveillance covers every inch of all Youthville properties.",
            "Strict visitor access control keeps the environment secure without being restrictive.",
            "All staff undergo background verification and health screening before joining.",
            "The Youthville Buddy program provides structured peer support for new residents.",
        ],
        relatedSlugs: [
            "why-youthville-is-punes-most-premium-hostel",
            "high-speed-wifi-rooms-youthville",
            "laundry-housekeeping-youthville-chore-free",
        ],
    },
    {
        slug: "laundry-housekeeping-youthville-chore-free",
        category: "LIFESTYLE",
        date: "May 5, 2025",
        title: "Laundry & Housekeeping:",
        titleHighlight: "Chore-Free Student Living",
        description:
            "Professional laundry services and regular housekeeping are built into the Youthville lifestyle — so you can focus on what matters, never a pile of unwashed clothes.",
        heroImage: "/blogs-and-news/trending/co-living.png",
        trendingIndex: "04",
        sections: ["trending", "news-row-1"],
        newsCta: "READ MORE",
        body: [
            {
                heading: "The Chore Problem, Eliminated",
                accent: true,
                paragraphs: [
                    "There is a particular kind of fatigue that sets in after a long semester — not just academic tiredness, but the accumulated exhaustion of managing every domestic chore alongside a demanding academic or professional schedule. For students and young professionals, laundry, room cleaning, and maintenance can consume hours every week that could be spent studying, resting, networking, or simply enjoying life.",
                    "Youthville Serviced Hostel in Pune was designed to solve this problem completely. The hostel's premium service model includes both professional laundry services and regular housekeeping — ensuring that residents live in a perpetually clean, organized, and pleasant space without lifting a finger.",
                    "The laundry service at Youthville operates on a scheduled basis, ensuring that clothes are collected, washed, dried, and returned in excellent condition. Unlike self-service laundromats or hand-washing scenarios common in ordinary PG accommodations, Youthville's managed laundry service is part of the lifestyle package.",
                ],
                bullets: [
                    "Scheduled laundry collection, washing, and return service.",
                    "Professional housekeeping on a regular cycle — floors, bathrooms, linen.",
                    "Common areas and amenity spaces maintained to hospitality standards.",
                    "Sanitized environment that supports focused study and genuine rest.",
                ],
            },
            {
                heading: "The Youthville Standard",
                accent: false,
                paragraphs: [
                    "Professional housekeeping teams maintain rooms on a regular cycle. Floors are swept and mopped, bathrooms are sanitized, bedsheets are changed, and common areas are kept pristine. The housekeeping team works to international hospitality standards — a commitment that reflects Youthville's positioning as a premium, serviced hostel.",
                    "This level of service has a measurable impact on residents' mental well-being. Studies consistently show that clean, organized living environments reduce stress, improve sleep quality, and increase cognitive performance. Students at Youthville have a structured, clutter-free environment that supports focused study and genuine rest.",
                    "The Youthville difference is visible in every corner of every property. Spotless bathrooms, neatly made beds, freshly laundered curtains, and sanitized common areas are the standard — not the exception. This is what it means to live well while living independently.",
                ],
            },
        ],
        images: [
            "/blogs-and-news/trending/morning-routines.png",
            "/blogs-and-news/blog-details/image-two.png",
        ],
        author: AUTHORS.priya,
        takeaways: [
            "Managed laundry and housekeeping eliminate hours of weekly domestic chores.",
            "Clean environments directly reduce stress and improve cognitive performance.",
            "Youthville's housekeeping operates to international hospitality standards.",
            "The serviced hostel model is more economical than managing chores independently.",
        ],
        relatedSlugs: [
            "hot-home-cooked-meals-youthville-dining",
            "why-youthville-is-punes-most-premium-hostel",
            "high-speed-wifi-rooms-youthville",
        ],
    },
    {
        slug: "high-speed-wifi-rooms-youthville",
        category: "TECH",
        date: "April 28, 2025",
        title: "High-Speed WiFi Rooms:",
        titleHighlight: "Powering Your Academic Journey",
        description:
            "In the digital age, reliable high-speed WiFi is infrastructure. Youthville's enterprise-grade connectivity keeps residents productive, connected, and never frustrated.",
        heroImage: "/blogs-and-news/news/news-2.png",
        trendingIndex: "05",
        sections: ["trending", "news-row-1"],
        newsCta: "READ MORE",
        body: [
            {
                heading: "Connectivity as Infrastructure",
                accent: true,
                paragraphs: [
                    "In the digital age, connectivity is not a luxury — it is infrastructure. For students attending online lectures, submitting assignments on learning management systems, and attending virtual internship interviews, a reliable high-speed internet connection is as essential as a desk and a chair. For working professionals who work hybrid or remote models, bandwidth is productivity itself.",
                    "Youthville Serviced Hostel provides fully WiFi-enabled rooms across all its properties in Pune and Mumbai. This is not a shared, throttled, dormitory-grade connection that gives up during peak hours. It is a genuine high-speed network designed to support multiple simultaneous users without degradation.",
                    "The WiFi infrastructure at Youthville properties is maintained by dedicated technical staff and upgraded regularly to meet increasing bandwidth demands. Residents studying at Symbiosis International University, MIT-WPU, or NMIMS frequently participate in data-intensive online learning platforms and cloud-based research tools.",
                ],
                bullets: [
                    "High-speed WiFi in every room and all common areas.",
                    "Enterprise-grade network supporting multiple simultaneous users.",
                    "Dedicated technical staff for regular maintenance and upgrades.",
                    "Supports streaming, video calls, coding environments, and remote work.",
                ],
            },
            {
                heading: "The Digital Advantage",
                accent: false,
                paragraphs: [
                    "For working professionals at Youthville's properties near Balewadi and Hinjewadi tech parks, the ability to work from the room on a reliable connection is a significant quality-of-life differentiator. An unexpected work-from-home day should not be a crisis — and at Youthville, it never is.",
                    "Beyond work and study, high-speed WiFi enables residents to maintain strong digital social connections. Video calls home to parents, streaming entertainment after a long day, staying connected to friends across cities — these are the rhythms of modern young adult life, and Youthville ensures they are never interrupted by poor connectivity.",
                    "When you compare Youthville's technology infrastructure to typical PG accommodations in Pune — where WiFi is often a shared 50 Mbps connection split across 20 residents, prone to daily downtime — the difference is stark. Youthville invests in connectivity because for its residents, being connected is not optional.",
                ],
            },
        ],
        images: [
            "/blogs-and-news/news/news-5.png",
            "/blogs-and-news/trending/rule-for-students.png",
        ],
        author: AUTHORS.rahul,
        takeaways: [
            "Youthville provides enterprise-grade WiFi, not the throttled connections typical in PGs.",
            "High-speed connectivity supports remote work, online learning, and video calls.",
            "Dedicated technical staff ensure consistent uptime and regular infrastructure upgrades.",
            "Reliable WiFi is now as essential to student accommodation as any physical amenity.",
        ],
        relatedSlugs: [
            "laundry-housekeeping-youthville-chore-free",
            "why-youthville-is-punes-most-premium-hostel",
            "safety-first-why-parents-trust-youthville",
        ],
    },
    {
        slug: "best-hostel-near-symbiosis-pune",
        category: "GUIDE",
        date: "April 20, 2025",
        title: "The Best Hostel",
        titleHighlight: "Near Symbiosis, Pune",
        description:
            "For students admitted to Symbiosis International University, Youthville's SBR properties offer the perfect blend of proximity, premium living, and a thriving academic community.",
        heroImage: "/blogs-and-news/news/news-5.png",
        trendingIndex: "06",
        sections: ["trending", "news-row-2", "next-read"],
        newsCta: "READ MORE",
        body: [
            {
                heading: "The Right Location Changes Everything",
                accent: true,
                paragraphs: [
                    "If you are a student admitted to Symbiosis International University (SIU) or any of its constituent institutes in Pune, one of the most consequential decisions you will make before classes begin is where you will live. The right accommodation shapes your academic performance, mental health, social life, and overall experience of living in Pune.",
                    "Youthville Serviced Hostel is the finest choice for students seeking accommodation near Symbiosis International University. Multiple Youthville properties — including YV SBR 1, YV SBR 2, YV SBR 3, and Youthville Kiwale — are located within walking distance or a very short commute from SIU's campuses.",
                    "But proximity is just the starting point. What truly makes Youthville the best hostel near Symbiosis is the totality of the living experience it delivers. Students at Youthville enjoy freshly cooked meals three times a day, professionally maintained rooms, laundry services, high-speed WiFi, and a community of like-minded peers.",
                ],
                bullets: [
                    "YV SBR 1, SBR 2, SBR 3, and Kiwale — all within minutes of SIU campuses.",
                    "Co-ed and all-girls property options available.",
                    "Academic community of students from law, management, engineering, and media.",
                    "Gyaani reading space and Coffeeville corner for informal study sessions.",
                ],
            },
            {
                heading: "A Campus Away From Campus",
                accent: false,
                paragraphs: [
                    "The SBR corridor of Pune — where Symbiosis is located — is a thriving academic and professional zone. Youthville's SBR properties are designed for students who want to be embedded in this energy while also having a serene, organized retreat to return to after long days of classes, case studies, and group projects.",
                    "Youthville's co-ed properties in this area foster a balanced, intellectually stimulating community. Residents from different Symbiosis programs — law, management, engineering, media — live together and frequently form study groups, debate partnerships, and lifelong friendships.",
                    "For parents of Symbiosis students, the Youthville assurance is particularly important. The controlled visitor access, CCTV coverage, on-site staff, and regular communication channels give families complete visibility and peace of mind about where their children are living. If you are searching for student accommodation near Symbiosis Pune, the search begins and ends with Youthville.",
                ],
            },
        ],
        images: [
            "/blogs-and-news/next-read/shared-living.png",
            "/blogs-and-news/blog-details/related-blogs/image-one.png",
        ],
        author: AUTHORS.sarah,
        takeaways: [
            "Multiple Youthville properties are within walking distance of SIU campuses.",
            "Residents from different SIU programs create a naturally intellectually diverse community.",
            "The Gyaani reading space and Coffeeville corner function as informal academic hubs.",
            "Parents benefit from full visibility via CCTV coverage and regular communication channels.",
        ],
        relatedSlugs: [
            "why-youthville-is-punes-most-premium-hostel",
            "safety-first-why-parents-trust-youthville",
            "hot-home-cooked-meals-youthville-dining",
        ],
    },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getTrendingPosts(): BlogPost[] {
    return BLOG_POSTS.filter((p) => p.sections.includes("trending")).sort(
        (a, b) => (a.trendingIndex ?? "99").localeCompare(b.trendingIndex ?? "99"),
    );
}

export function getNextReadPosts(): BlogPost[] {
    return BLOG_POSTS.filter((p) => p.sections.includes("next-read"));
}

export function getNewsSectionData(): {
    rowOne: BlogPost[];
    hero: BlogPost;
    rowSmall: BlogPost[];
} {
    const rowOne = BLOG_POSTS.filter((p) => p.sections.includes("news-row-1"));
    const hero = BLOG_POSTS.find((p) => p.sections.includes("news-hero"))!;
    const rowSmall = BLOG_POSTS.filter((p) => p.sections.includes("news-row-2"));
    return { rowOne, hero, rowSmall };
}

export function getRelatedPosts(slug: string): BlogPost[] {
    const post = getBlogBySlug(slug);
    if (!post) return [];
    return post.relatedSlugs
        .map((s) => getBlogBySlug(s))
        .filter((p): p is BlogPost => p !== undefined)
        .slice(0, 3);
}
