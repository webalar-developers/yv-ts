import { z } from "zod/v4";
import { lucideIconSchema } from "@/lib/zod-utils";

export const propertyFeatureSchema = z.object({
	icon: z.union([lucideIconSchema, z.string()]),
	label: z.string(),
	subtitle: z.string().optional(),
});
