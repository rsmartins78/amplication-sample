import { Customer } from "../customer/Customer";
import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customer?: Customer;
  discount: number | null;
  id: string;
  product?: Product;
  quantity: number;
  totalPrice: number;
  updatedAt: Date;
};
