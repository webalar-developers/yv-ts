import { z } from "zod/v4";

export const propertyRoomSchema = z.object({
	id: z.string(),
	title: z.string(),
	occupancy: z.string(),
	image: z.string(),
	price: z.number(),
	tag: z.string().optional(),
	description: z.string(),
	meta: z.array(z.string()).optional(),
});
