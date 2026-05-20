import { z } from "zod/v4";
import { lucideIconSchema } from "@/lib/zod-utils";

export const featureSchema = z.object({
	icon: lucideIconSchema,
	title: z.string(),
	subt: z.string(),
	description: z.string(),
});
