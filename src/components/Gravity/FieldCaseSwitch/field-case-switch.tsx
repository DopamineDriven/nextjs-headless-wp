import {
  EmailFieldsGravityPartialFragment,
  NameFieldsGravityPartialFragment,
  FormFieldsGravityPartialFragment,
  PasswordFieldPartialFragment,
  RadioField as RadioFieldType,
  FileUploadField as FileUploadFieldType
} from "@/graphql/generated/graphql";
import {
  EmailField,
  FileUploadField,
  NameField,
  PasswordField,
  RadioField
} from "../Fields/index";
import type { GravityFieldErrors } from "@/types/error-helpers";

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
    case "PasswordField":
      return (
        <PasswordField
          field={field as PasswordFieldPartialFragment}
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
    default:
      return <p>{`Field type not supported: ${field.type}.`}</p>;
  }
}
