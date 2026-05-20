import type { z } from "zod/v4";
import type { relatedPropertySchema } from "./related-properties.schema";

export type RelatedProperty = z.infer<typeof relatedPropertySchema>;
