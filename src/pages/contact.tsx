import { BottomCtaContact } from "@/components/contact/bottom-cta/bottom-cta";
import { ElevatePillarsContact } from "@/components/contact/elevate-pillars/elevate-pillars";
import { HeroBannerContact } from "@/components/contact/hero-banner-life/hero-banner-life";
import { FaqCommon } from "@/components/shared/faq-common/faq-common";
import { usePageHead } from "@/hooks/use-page-head";

export function ContactPage() {
	usePageHead({
		title: "Contact | Youthville Hostels",
		description:
			"Get in touch with Youthville Hostels for inquiries, bookings, partnerships, or visits. We respond within hours, Mon–Sun.",
		keywords:
			"contact youthville, hostel booking pune, student housing inquiry, youthville sales",
		path: "/contact",
	});

	return (
		<>
			<HeroBannerContact />
			<ElevatePillarsContact />
			<FaqCommon />
			<BottomCtaContact />
		</>
	);
}
