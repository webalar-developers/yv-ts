import type { z } from "zod";
import type { propertyCardSchema } from "./rooms-section.schema";

export type PropertyCard = z.infer<typeof propertyCardSchema>;
