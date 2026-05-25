import { lazy, Suspense } from "react";
import { FeaturesSection } from "@/components/home/features-section/features-section";
import { HeroBanner } from "@/components/home/hero-banner/hero-banner";
import { OfferingsSection } from "@/components/home/offerings-section/offerings-section";
import { RoomsSection } from "@/components/home/rooms-section/rooms-section";
import { SearchBar } from "@/components/home/search-bar/search-bar";
import { WhatsappCtaSection } from "@/components/home/whatsapp-cta-section/whatsapp-cta-section";
import { FaqCommon } from "@/components/shared/faq-common/faq-common";
import { usePageHead } from "@/hooks/use-page-head";
import { organizationSchema } from "@/utils/seo";

const VideoGallery = lazy(() =>
	import("@/components/home/video-gallery/video-gallery").then((m) => ({
		default: m.VideoGallery,
	})),
);

const MapExplorerSection = lazy(() =>
	import("@/components/home/map-explorer-section/map-explorer-section").then(
		(m) => ({ default: m.MapExplorerSection }),
	),
);

const CommunitySection = lazy(() =>
	import("@/components/home/community-section/community-section").then((m) => ({
		default: m.CommunitySection,
	})),
);

const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
	<div className={`${height} animate-pulse rounded-xl bg-muted/30`} />
);

export function HomePage() {
	usePageHead({
		title: "Youthville | Premium Serviced Hostel in Pune & Mumbai | PG with Meals, WiFi & Housekeeping",
		description:
			"Premium student housing and co-living in Pune. Fully-furnished private and shared rooms, all-inclusive amenities, and a vibrant community across Kiwale, Hinjewadi, and Wakad.",
		keywords:
			"student hostels pune, co-living pune, premium student housing, youthville hostels, student accommodation pune",
		path: "/",
		structuredData: [organizationSchema()],
	});

	return (
		<>
			<HeroBanner />
			<SearchBar />
			<FeaturesSection />
			<OfferingsSection />
			<Suspense fallback={<SectionSkeleton />}>
				<VideoGallery />
			</Suspense>
			<RoomsSection />
			<Suspense fallback={<SectionSkeleton />}>
				<CommunitySection />
			</Suspense>
			<Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
				<MapExplorerSection />
			</Suspense>
			<WhatsappCtaSection />
			<FaqCommon />
		</>
	);
}
