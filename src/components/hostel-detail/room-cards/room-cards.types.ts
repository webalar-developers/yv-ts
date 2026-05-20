import type { z } from "zod/v4";
import type { propertyRoomSchema } from "./room-cards.schema";

export type PropertyRoom = z.infer<typeof propertyRoomSchema>;
