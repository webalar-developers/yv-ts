import { z } from "zod/v4";

export const footerColumnPropsSchema = z.object({
	title: z.string(),
	children: z.custom<React.ReactNode>(),
});
