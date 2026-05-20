import { z } from "zod/v4";
import { lucideIconSchema } from "@/lib/zod-utils";

export const locationHighlightSchema = z.object({
	icon: z.union([lucideIconSchema, z.string()]),
	title: z.string(),
	subtitle: z.string(),
});
