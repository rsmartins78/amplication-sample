import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Image" source="image" />
        <NumberInput label="Item Price" source="itemPrice" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
