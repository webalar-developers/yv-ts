import { z } from "zod";

export const propertyCardSchema = z.object({
	id: z.string(),
	name: z.string(),
	location: z.string(),
	area: z.string(),
	gender: z.enum(["Male", "Female", "Other"]),
	type: z.string(),
	price: z.string(),
	badge: z.string(),
	badgeVariant: z.enum(["default", "student-housing", "co-living"]).optional(),
	image: z.string(),
	available: z.boolean(),
});
