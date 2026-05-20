import type { z } from "zod/v4";
import type { navLinkSchema } from "./site-header.schema";

export type NavLink = z.infer<typeof navLinkSchema>;
