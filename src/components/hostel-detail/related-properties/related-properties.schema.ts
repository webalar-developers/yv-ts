import { z } from "zod/v4";

export const relatedPropertySchema = z.object({
	id: z.string(),
	name: z.string(),
	location: z.string(),
	image: z.string(),
});
