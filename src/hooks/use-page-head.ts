import { useHead } from "@unhead/react";
import { canonical, seo, siteUrl } from "@/utils/seo";

type UsePageHeadOptions = {
	title: string;
	description?: string;
	keywords?: string;
	image?: string;
	path: string;
	structuredData?: Record<string, unknown>[];
};

export function usePageHead({
	title,
	description,
	keywords,
	image,
	path,
	structuredData,
}: UsePageHeadOptions) {
	useHead({
		title,
		meta: seo({
			title,
			description,
			keywords,
			image,
			url: siteUrl(path),
		}),
		link: [canonical(path)],
		script: structuredData?.map((data, index) => ({
			key: `structured-data-${path}-${index}`,
			type: "application/ld+json",
			textContent: JSON.stringify(data),
		})),
	});
}
