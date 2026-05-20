import { z } from "zod/v4";

export const faqItemSchema = z.object({
	question: z.string(),
	answer: z.string(),
});
