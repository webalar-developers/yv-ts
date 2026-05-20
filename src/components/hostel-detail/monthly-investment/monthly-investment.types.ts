import type { z } from "zod/v4";
import type { investmentLineItemSchema } from "./monthly-investment.schema";

export type InvestmentLineItem = z.infer<typeof investmentLineItemSchema>;
