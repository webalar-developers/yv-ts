import type { z } from "zod/v4";
import type { testimonialSchema } from "./testimonials-section.schema";

export type Testimonial = z.infer<typeof testimonialSchema>;
