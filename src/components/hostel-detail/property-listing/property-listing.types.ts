import type { z } from "zod/v4";
import type { propertyListingSchema } from "./property-listing.schema";

export type PropertyListing = z.infer<typeof propertyListingSchema>;
