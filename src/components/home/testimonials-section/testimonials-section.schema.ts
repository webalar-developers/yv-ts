import { z } from "zod/v4";

export const testimonialSchema = z.object({
	quote: z.string(),
	name: z.string(),
	role: z.string(),
	avatar: z.string(),
});
