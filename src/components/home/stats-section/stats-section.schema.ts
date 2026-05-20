import { z } from "zod/v4";

export const statItemSchema = z.object({
	value: z.string(),
	suffix: z.string().optional(),
	label: z.string(),
});
