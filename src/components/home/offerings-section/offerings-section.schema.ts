import { z } from "zod/v4";
import { lucideIconSchema } from "@/lib/zod-utils";

export const offeringSchema = z.object({
	title: z.string(),
	icon: lucideIconSchema.nullable(),
	image: z.string(),
	video: z.string().optional(),
	span: z.string(),
	description: z.string().optional(),
});
