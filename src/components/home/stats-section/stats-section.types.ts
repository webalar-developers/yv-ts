import type { z } from "zod/v4";
import type { statItemSchema } from "./stats-section.schema";

export type StatItem = z.infer<typeof statItemSchema>;
