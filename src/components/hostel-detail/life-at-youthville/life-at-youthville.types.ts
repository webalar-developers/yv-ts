import type { z } from "zod/v4";
import type { lifeAtYouthvilleItemSchema } from "./life-at-youthville.schema";

export type LifeAtYouthvilleItem = z.infer<typeof lifeAtYouthvilleItemSchema>;
