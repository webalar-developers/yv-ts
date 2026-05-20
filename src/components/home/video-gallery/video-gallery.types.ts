import type { z } from "zod/v4";
import type { videoItemSchema } from "./video-gallery.schema";

export type VideoItem = z.infer<typeof videoItemSchema>;
