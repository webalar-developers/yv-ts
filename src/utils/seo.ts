export const SITE_URL = "https://youthville.co.in";

export const siteUrl = (path = "/") => {
	const trimmed = path.startsWith("/") ? path : `/${path}`;
	return `${SITE_URL}${trimmed === "/" ? "/" : trimmed}`;
};

export const canonical = (path = "/") => ({
	rel: "canonical",
	href: siteUrl(path),
});

export const seo = ({
	title,
	description,
	keywords,
	image,
	url,
	type = "website",
	siteName = "Youthville Hostels",
}: {
	title: string;
	description?: string;
	image?: string;
	keywords?: string;
	url?: string;
	type?: string;
	siteName?: string;
}) => {
	const tags = [
		{ title },
		{ name: "description", content: description },
		{ name: "keywords", content: keywords },
		{ name: "robots", content: "index, follow" },
		{ name: "theme-color", content: "#f36e21" },

		{ property: "og:type", content: type },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:site_name", content: siteName },
		...(url ? [{ property: "og:url", content: url }] : []),

		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{
			name: "twitter:card",
			content: image ? "summary_large_image" : "summary",
		},

		...(image
			? [
					{ name: "twitter:image", content: image },
					{ property: "og:image", content: image },
				]
			: []),
	];

	return tags;
};

export const jsonLd = (data: Record<string, unknown>) => ({
	type: "application/ld+json",
	children: JSON.stringify(data),
});

export const organizationSchema = () => ({
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Youthville Hostels",
	url: SITE_URL,
	logo: `${SITE_URL}/shared/png/yv_logo.png`,
	description:
		"Premium student housing and co-living in Pune. Fully-furnished private and shared rooms, all-inclusive amenities, and a vibrant student community.",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Pune",
		addressRegion: "Maharashtra",
		addressCountry: "IN",
	},
	areaServed: {
		"@type": "City",
		name: "Pune",
	},
});

export const lodgingBusinessSchema = ({
	id,
	name,
	description,
	image,
}: {
	id: string;
	name: string;
	description: string;
	image?: string;
}) => ({
	"@context": "https://schema.org",
	"@type": "LodgingBusiness",
	"@id": siteUrl(`/hostels/${id}`),
	name,
	description,
	url: siteUrl(`/hostels/${id}`),
	...(image ? { image } : {}),
	address: {
		"@type": "PostalAddress",
		addressLocality: "Pune",
		addressRegion: "Maharashtra",
		addressCountry: "IN",
	},
	brand: {
		"@type": "Organization",
		name: "Youthville Hostels",
	},
});
