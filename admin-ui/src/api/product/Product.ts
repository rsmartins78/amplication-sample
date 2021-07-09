import { JsonValue } from "type-fest";
import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  customization: JsonValue | null;
  description: string | null;
  id: string;
  image: string | null;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
