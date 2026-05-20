import type { z } from "zod/v4";
import type { locationHighlightSchema } from "./location-highlights.schema";

export type LocationHighlight = z.infer<typeof locationHighlightSchema>;
