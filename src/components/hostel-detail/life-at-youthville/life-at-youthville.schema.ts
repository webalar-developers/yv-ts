import { z } from "zod/v4";

export const lifeAtYouthvilleItemSchema = z.object({
	title: z.string(),
	subtitle: z.string(),
	image: z.string(),
});
