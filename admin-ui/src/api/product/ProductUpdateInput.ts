import { JsonValue } from "type-fest";

export type ProductUpdateInput = {
  customization?: JsonValue | null;
  description?: string | null;
  image?: string | null;
  itemPrice?: number | null;
  name?: string | null;
};
