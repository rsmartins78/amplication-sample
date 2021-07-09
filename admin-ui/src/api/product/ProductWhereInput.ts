import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  customization?: JsonNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  itemPrice?: FloatNullableFilter;
  name?: StringNullableFilter;
};
