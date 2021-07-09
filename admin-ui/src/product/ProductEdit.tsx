import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Image" source="image" />
        <NumberInput label="Item Price" source="itemPrice" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
