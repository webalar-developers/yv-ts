import { z } from "zod/v4";

export const investmentLineItemSchema = z.object({
	label: z.string(),
	amount: z.number(),
});
