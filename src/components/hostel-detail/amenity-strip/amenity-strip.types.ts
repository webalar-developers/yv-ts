import type { z } from "zod/v4";
import type { propertyFeatureSchema } from "./amenity-strip.schema";

export type PropertyFeature = z.infer<typeof propertyFeatureSchema>;
