import { useHead } from "@unhead/react";
import { Outlet } from "react-router";
import { ScrollToTop } from "@/components/layout/scroll-to-top/scroll-to-top";
import { SiteFooter } from "@/components/layout/site-footer/site-footer";
import { SiteHeader } from "@/components/layout/site-header/site-header";
import { ThemeProvider } from "@/components/layout/theme-provider/theme-provider";
import { WhatsAppButton } from "@/components/layout/whatsapp-button/whatsapp-button";
import { seo } from "@/utils/seo";

export function RootLayout() {
	useHead({
		htmlAttrs: { lang: "en" },
		title: "Youthville Hostels | Premium Student Living & Co-living in Pune",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			...seo({
				title:
					"Youthville Hostels | Premium Student Living & Co-living in Pune",
				description:
					"Experience premium student housing and co-living at Youthville Hostels. Modern amenities, safe environment, and a vibrant community in Pune.",
				keywords:
					"student hostels pune, co-living pune, premium student housing, youthville hostels, student accommodation pune",
			}),
		],
		link: [
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/shared/png/yv_logo.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/shared/png/yv_logo.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/shared/png/yv_logo.png",
			},
			{ rel: "manifest", href: "/site.webmanifest" },
			{ rel: "icon", href: "/shared/png/yv_logo.png" },
		],
	});

	return (
		<ThemeProvider>
			<div className="relative min-h-svh bg-white">
				<ScrollToTop />
				<SiteHeader />
				<Outlet />
				<SiteFooter />
				<WhatsAppButton />
			</div>
		</ThemeProvider>
	);
}
