import { BuildGrid } from "@/components/life/build-grid/build-grid";
import { CommunitySectionLife } from "@/components/life/community-section/community-section";
import { HeroBannerLife } from "@/components/life/hero-banner-life/hero-banner-life";
// import { ElevatePillars } from "@/components/life/elevate-pillars/elevate-pillars"
import { Testimonials } from "@/components/life/testimonials/testimonials";
// import { OnePrice } from "@/components/life/one-price/one-price"
// import { CommunityGrid } from "@/components/life/community-grid/community-grid"
import { WhyYouthville } from "@/components/life/why-youthville/why-youthville";
import { FaqCommon } from "@/components/shared/faq-common/faq-common";
import { usePageHead } from "@/hooks/use-page-head";

export function LifeYvPage() {
	usePageHead({
		title: "Life at YV | Youthville Hostels",
		description:
			"Inside life at Youthville — the resident community, events, festivals, and a day-in-the-life across our Pune hostels.",
		keywords:
			"life at youthville, hostel community pune, student life pune, hostel events",
		path: "/life-yv",
	});

	return (
		<>
			<HeroBannerLife />
			<BuildGrid />
			<CommunitySectionLife />
			{/* <OnePrice /> */}
			{/* <CommunityGrid /> */}
			<WhyYouthville />
			<Testimonials />
			{/* <ElevatePillars /> */}
			<FaqCommon />
			{/* <BottomCta /> */}
		</>
	);
}
