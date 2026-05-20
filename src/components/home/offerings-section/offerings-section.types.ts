import type { z } from "zod/v4";
import type { offeringSchema } from "./offerings-section.schema";

export type Offering = z.infer<typeof offeringSchema>;
