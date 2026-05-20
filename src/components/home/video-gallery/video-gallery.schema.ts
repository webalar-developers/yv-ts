import { z } from "zod/v4";

export const videoItemSchema = z.object({
	image: z.string(),
	alt: z.string(),
	reelUrl: z.string().optional(),
	videoUrl: z.string().optional(),
});
