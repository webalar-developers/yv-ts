import type { z } from "zod/v4";
import type { featureSchema } from "./features-section.schema";

export type Feature = z.infer<typeof featureSchema>;
