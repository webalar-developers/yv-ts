import { z } from "zod/v4";
import { propertyFeatureSchema } from "../amenity-strip/amenity-strip.schema";
import { faqItemSchema } from "../faq-section/faq-section.schema";
import { lifeAtYouthvilleItemSchema } from "../life-at-youthville/life-at-youthville.schema";
import { locationHighlightSchema } from "../location-highlights/location-highlights.schema";
import { investmentLineItemSchema } from "../monthly-investment/monthly-investment.schema";
import { relatedPropertySchema } from "../related-properties/related-properties.schema";
import { propertyRoomSchema } from "../room-cards/room-cards.schema";

export const propertyListingSchema = z.object({
	id: z.string(),
	name: z.string(),
	rating: z.number().nullable(),
	ratingLabel: z.string().optional(),
	reviewCountLabel: z.string().optional(),
	location: z.string(),
	fullAddress: z.string(),
	city: z.string(),
	area: z.string(),
	gender: z.string(),
	occupancy: z.string().optional(),
	feature: z.string().optional(),
	meals: z.string().optional(),
	proximity: z.string().optional(),
	price: z.number(),
	badge: z.string(),
	badgeVariant: z.enum(["premium", "metro", "new-opening", "offers"]),
	category: z.enum(["student", "professional"]).optional(),
	image: z.string(),
	isFavorited: z.boolean(),
	featureTags: z.array(z.string()),
	gallery: z.array(z.string()),
	amenityStrip: z.array(propertyFeatureSchema),
	overview: z.string(),
	whyChooseTitle: z.string(),
	whyChooseQuote: z.string(),
	sidebarEyebrow: z.string(),
	sidebarTitle: z.string(),
	sidebarFeatures: z.array(propertyFeatureSchema),
	testimonial: z.object({
		name: z.string(),
		since: z.string(),
		quote: z.string(),
		avatar: z.string(),
	}),
	map: z.object({
		lat: z.number(),
		lng: z.number(),
		label: z.string(),
	}),
	rooms: z.array(propertyRoomSchema),
	investmentBreakdown: z.array(investmentLineItemSchema),
	locationHighlights: z.array(locationHighlightSchema),
	lifeAtYouthville: z.array(lifeAtYouthvilleItemSchema),
	faqs: z.array(faqItemSchema),
	googleReviews: z
		.array(
			z.object({
				author_name: z.string(),
				profile_photo_url: z.string(),
				rating: z.number(),
				relative_time_description: z.string(),
				text: z.string(),
			}),
		)
		.optional(),
	relatedProperties: z.array(relatedPropertySchema),
});
