import { lazy, Suspense, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { AmenityStrip } from "@/components/hostel-detail/amenity-strip/amenity-strip";
import { DetailTabs } from "@/components/hostel-detail/detail-tabs/detail-tabs";
import { MapTestimonialCard } from "@/components/hostel-detail/map-testimonial-card/map-testimonial-card";
import { OverviewSection } from "@/components/hostel-detail/overview-section/overview-section";
import { PhotoGallery } from "@/components/hostel-detail/photo-gallery/photo-gallery";
import { PropertyHeader } from "@/components/hostel-detail/property-header/property-header";
import { RoomCards } from "@/components/hostel-detail/room-cards/room-cards";
import { ScheduleVisitForm } from "@/components/hostel-detail/schedule-visit-form/schedule-visit-form";
import { SidebarFeatures } from "@/components/hostel-detail/sidebar-features/sidebar-features";
import { getPropertyById } from "@/data/mock-properties";
import { usePageHead } from "@/hooks/use-page-head";
import { lodgingBusinessSchema } from "@/utils/seo";

const MonthlyInvestment = lazy(() =>
	import(
		"@/components/hostel-detail/monthly-investment/monthly-investment"
	).then((m) => ({ default: m.MonthlyInvestment })),
);
const LocationHighlights = lazy(() =>
	import(
		"@/components/hostel-detail/location-highlights/location-highlights"
	).then((m) => ({ default: m.LocationHighlights })),
);
const WhatsAround = lazy(() =>
	import("@/components/hostel-detail/whats-around/whats-around").then((m) => ({
		default: m.WhatsAround,
	})),
);
// const AttractionsNearby = lazy(() =>
// 	import(
// 		"@/components/hostel-detail/attractions-nearby/attractions-nearby"
// 	).then((m) => ({ default: m.AttractionsNearby })),
// );
const LifeAtYouthville = lazy(() =>
	import(
		"@/components/hostel-detail/life-at-youthville/life-at-youthville"
	).then((m) => ({ default: m.LifeAtYouthville })),
);
const FaqSection = lazy(() =>
	import("@/components/hostel-detail/faq-section/faq-section").then((m) => ({
		default: m.FaqSection,
	})),
);
const RelatedProperties = lazy(() =>
	import(
		"@/components/hostel-detail/related-properties/related-properties"
	).then((m) => ({ default: m.RelatedProperties })),
);
const CtaSection = lazy(() =>
	import("@/components/hostel-detail/cta-section/cta-section").then((m) => ({
		default: m.CtaSection,
	})),
);

const Skeleton = ({ h = "h-64" }: { h?: string }) => (
	<div className={`${h} animate-pulse rounded-xl bg-muted/30`} />
);

export function HostelDetailPage() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const property = id ? getPropertyById(id) : undefined;
	const description = property
		? `${property.overview.substring(0, 157)}...`
		: undefined;
	const image = property?.gallery[0];

	useEffect(() => {
		if (!property) navigate("/hostels", { replace: true });
	}, [property, navigate]);

	usePageHead({
		title: property
			? `${property.name} | Youthville Hostels`
			: "Youthville Hostels",
		description,
		image,
		path: property ? `/hostels/${property.id}` : "/hostels",
		structuredData:
			property && description
				? [
						lodgingBusinessSchema({
							id: property.id,
							name: property.name,
							description,
							image,
						}),
					]
				: undefined,
	});

	if (!property) return null;

	return (
		<main className="bg-[#f8f6f6]">
			<div className="w-full px-6 md:px-5">
				<PropertyHeader property={property} />
				<DetailTabs />

				<section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1.2fr_0.6fr_0.58fr]">
					<PhotoGallery gallery={property.gallery} name={property.name} />
					<MapTestimonialCard
						map={property.map}
						testimonial={property.testimonial}
						googleReviews={property.googleReviews}
					/>
				</section>

				<AmenityStrip amenities={property.amenityStrip} />

				<section className="mt-10 grid gap-10 md:grid-cols-1 xl:grid-cols-[1fr_0.42fr]">
					<div>
						<OverviewSection
							overview={property.overview}
							whyChooseTitle={property.whyChooseTitle}
							whyChooseQuote={property.whyChooseQuote}
						/>
						<RoomCards rooms={property.rooms} />

						<section className="mt-12 space-y-12">
							<Suspense fallback={<Skeleton />}>
								<MonthlyInvestment items={property.investmentBreakdown} />
							</Suspense>
							<Suspense fallback={<Skeleton />}>
								<LocationHighlights
									propertyId={property.id}
									highlights={property.locationHighlights}
								/>
							</Suspense>
							{/* <Suspense fallback={<Skeleton />}>
								<WhatsAround propertyId={property.id} />
							</Suspense> */}
							{/* <Suspense fallback={<Skeleton />}>
								<AttractionsNearby />
							</Suspense> */}
							<Suspense fallback={<Skeleton />}>
								<LifeAtYouthville items={property.lifeAtYouthville} />
							</Suspense>
							<Suspense fallback={<Skeleton />}>
								<FaqSection faqs={property.faqs} />
							</Suspense>
							<Suspense fallback={<Skeleton />}>
								<RelatedProperties properties={property.relatedProperties} />
							</Suspense>
						</section>
					</div>

					<div className="sticky top-28 h-fit space-y-5">
						<ScheduleVisitForm />
						<SidebarFeatures
							eyebrow={property.sidebarEyebrow}
							title={property.sidebarTitle}
							features={property.sidebarFeatures}
						/>
					</div>
				</section>
			</div>
			<Suspense fallback={<Skeleton h="h-48" />}>
				<CtaSection />
			</Suspense>
		</main>
	);
}
