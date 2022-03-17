import {
  EmailFieldsGravityPartialFragment,
  NameFieldsGravityPartialFragment,
  FormFieldsGravityPartialFragment,
  // AddressField as AddressFieldType,
  // TextAreaField as TextAreaType,
  // TextField as TextFieldType,
  // SelectField as SelectFieldType,
  RadioField as RadioFieldType,
  FileUploadField as FileUploadFieldType
} from "@/graphql/generated/graphql";
import {
  // AddressField,
  EmailField,
  FileUploadField,
  NameField,
  RadioField,
  // SelectField,
  // TextAreaField,
  // TextField
} from "../Fields/index";
import { GravityFieldErrors } from "@/types/error-helpers";

interface FieldCaseSwitchProps extends GravityFieldErrors {
  field: FormFieldsGravityPartialFragment;
  formId?: number | null;
}

export default function FieldCaseSwitch({
  field,
  formId,
  fieldErrors
}: FieldCaseSwitchProps) {
  switch (field.__typename) {
    // case "AddressField":
    //   return (
    //     <AddressField
    //       field={field as AddressFieldType}
    //       fieldErrors={fieldErrors}
    //       formId={formId}
    //     />
    //   );
    case "EmailField":
      return (
        <EmailField
          field={field as EmailFieldsGravityPartialFragment}
          fieldErrors={fieldErrors}
          formId={formId}
        />
      );
    case "FileUploadField":
      return (
        <FileUploadField
          field={field as FileUploadFieldType}
          fieldErrors={fieldErrors}
          formId={formId}
        />
      );
    case "NameField":
      return (
        <NameField
          field={field as NameFieldsGravityPartialFragment}
          fieldErrors={fieldErrors}
          formId={formId}
        />
      );
    case "RadioField":
      return (
        <RadioField
          field={field as RadioFieldType}
          formId={formId}
          fieldErrors={fieldErrors}
        />
      );
    // case "SelectField":
    //   return (
    //     <SelectField
    //       field={field as SelectFieldType}
    //       fieldErrors={fieldErrors}
    //       formId={formId}
    //     />
    //   );
    // case "TextAreaField":
    //   return (
    //     <TextAreaField
    //       field={field as TextAreaType}
    //       fieldErrors={fieldErrors}
    //       formId={formId}
    //     />
    //   );
    // case "TextField":
    //   return (
    //     <TextField
    //       field={field as TextFieldType}
    //       fieldErrors={fieldErrors}
    //       formId={formId}
    //     />
    //   );
    default:
      return <p>{`Field type not supported: ${field.type}.`}</p>;
  }
}
