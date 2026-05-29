import { AboutCta } from "@/components/about/about-cta/about-cta";
import { AboutStats } from "@/components/about/about-stats/about-stats";
import { HeroBannerAbout } from "@/components/about/hero-banner-about/hero-banner-about";
import { KohinoorLegacy } from "@/components/about/kohinoor-legacy/kohinoor-legacy";
import { MeetTeam } from "@/components/about/meet-team/meet-team";
import { MissionVisionValues } from "@/components/about/mission-vision-values/mission-vision-values";
import { OurStory } from "@/components/about/our-story/our-story";
import { VisionToVibrancy } from "@/components/about/vision-to-vibrancy/vision-to-vibrancy";
import { Visionaries } from "@/components/about/visionaries/visionaries";
import { VoicesOfYouthville } from "@/components/about/voices-of-youthville/voices-of-youthville";
import { WhereWorkMeetsPlay } from "@/components/about/where-work-meets-play/where-work-meets-play";
import { usePageHead } from "@/hooks/use-page-head";

export function AboutPage() {
	usePageHead({
		title: "About Us | Youthville Hostels",
		description:
			"Learn about Youthville — our story, mission, vision, team, and the Kohinoor Group legacy that backs India's premium co-living brand for students and working professionals.",
		keywords:
			"about youthville, youthville hostels, co-living pune, kohinoor group, hostel pune, student living india",
		path: "/about",
	});

	return (
		<>
			<HeroBannerAbout />
			<VisionToVibrancy />
			<OurStory />
			<MissionVisionValues />
			<Visionaries />
			<MeetTeam />
			<AboutStats />
			<VoicesOfYouthville />
			<WhereWorkMeetsPlay />
			<KohinoorLegacy />
			<AboutCta />
		</>
	);
}
