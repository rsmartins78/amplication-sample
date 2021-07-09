import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  customer: CustomerWhereUniqueInput;
  discount?: number | null;
  product: ProductWhereUniqueInput;
  quantity: number;
  totalPrice: number;
};
