import type { z } from "zod/v4";
import type { footerColumnPropsSchema } from "./site-footer.schema";

export type FooterColumnProps = z.infer<typeof footerColumnPropsSchema>;
