import { z } from "zod";

export const propertyCardSchema = z.object({
	id: z.string(),
	name: z.string(),
	location: z.string(),
	area: z.string(),
	gender: z.array(z.enum(["Male", "Female", "Other", "Only Girls"])),
	type: z.string(),
	price: z.string(),
	badge: z.string(),
	badgeVariant: z.enum(["Uncategorized", "Student", "Co-living"]).optional(),
	image: z.string(),
	available: z.boolean(),
});
