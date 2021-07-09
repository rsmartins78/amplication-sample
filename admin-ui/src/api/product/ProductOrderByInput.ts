import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  customization?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  itemPrice?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
