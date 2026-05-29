import { lazy, type ReactNode, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { DefaultCatchBoundary } from "@/components/layout/default-catch-boundary/default-catch-boundary";
import { NotFound } from "@/components/layout/not-found/not-found";
import { RootLayout } from "@/components/layout/root-layout";

const HomePage = lazy(() =>
	import("@/pages/home-page").then((module) => ({ default: module.HomePage })),
);
const HostelsPage = lazy(() =>
	import("@/pages/hostels-page").then((module) => ({
		default: module.HostelsPage,
	})),
);
const HostelDetailPage = lazy(() =>
	import("@/pages/hostel-detail-page").then((module) => ({
		default: module.HostelDetailPage,
	})),
);
const ContactPage = lazy(() =>
	import("@/pages/contact").then((module) => ({ default: module.ContactPage })),
);
const TermsPage = lazy(() =>
	import("@/pages/terms-page").then((module) => ({
		default: module.TermsPage,
	})),
);
const PrivacyPolicyPage = lazy(() =>
	import("@/pages/privacy-policy-page").then((module) => ({
		default: module.PrivacyPolicyPage,
	})),
);
const DisclaimerPage = lazy(() =>
	import("@/pages/disclaimer-page").then((module) => ({
		default: module.DisclaimerPage,
	})),
);
const RefundPolicyPage = lazy(() =>
	import("@/pages/refund-policy-page").then((module) => ({
		default: module.RefundPolicyPage,
	})),
);
const FaqPage = lazy(() =>
	import("@/pages/faq-page").then((module) => ({ default: module.FaqPage })),
);
const LifeYvPage = lazy(() =>
	import("@/pages/life-yv-page").then((module) => ({
		default: module.LifeYvPage,
	})),
);

const BlogsAndNewsPage = lazy(() =>
	import("@/pages/blogs-and-new-page").then((module) => ({
		default: module.BlogsAndNewsPage,
	})),
);

const BlogDetailPage = lazy(() =>
	import("@/pages/blog-detail-page").then((module) => ({
		default: module.BlogDetailPage,
	})),
);

const AboutPage = lazy(() =>
	import("@/pages/about-page").then((module) => ({
		default: module.AboutPage,
	})),
);

function withSuspense(element: ReactNode) {
	return <Suspense fallback={null}>{element}</Suspense>;
}

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <DefaultCatchBoundary />,
		children: [
			{
				index: true,
				element: withSuspense(<HomePage />),
			},
			{
				path: "hostels",
				element: withSuspense(<HostelsPage />),
			},
			{
				path: "hostels/:id",
				element: withSuspense(<HostelDetailPage />),
			},
			{
				path: "contact",
				element: withSuspense(<ContactPage />),
			},
			{
				path: "terms",
				element: withSuspense(<TermsPage />),
			},
			{
				path: "privacy-policy",
				element: withSuspense(<PrivacyPolicyPage />),
			},
			{
				path: "disclaimer",
				element: withSuspense(<DisclaimerPage />),
			},
			{
				path: "refund-policy",
				element: withSuspense(<RefundPolicyPage />),
			},
			{
				path: "faq",
				element: withSuspense(<FaqPage />),
			},
			{
				path: "life-yv",
				element: withSuspense(<LifeYvPage />),
			},
			{
				 path: "blogs-and-news",
				 element: withSuspense(<BlogsAndNewsPage />),
			},
			{
				path: "blogs-and-news/:slug",
				element: withSuspense(<BlogDetailPage />),
			},
			{
				path: "about",
				element: withSuspense(<AboutPage />),
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);
