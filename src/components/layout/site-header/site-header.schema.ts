import { z } from "zod/v4";

export const navLinkSchema = z.object({
	label: z.string(),
	href: z.string(),
});
