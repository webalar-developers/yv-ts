import type { z } from "zod/v4";
import type { faqItemSchema } from "./faq-section.schema";

export type FaqItem = z.infer<typeof faqItemSchema>;
