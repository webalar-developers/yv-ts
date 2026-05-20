import type { LucideIcon } from "lucide-react";
import { z } from "zod/v4";

export const lucideIconSchema = z.custom<LucideIcon>(
	(val) => typeof val === "function",
);
