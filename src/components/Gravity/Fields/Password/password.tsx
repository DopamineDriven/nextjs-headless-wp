import {
  PasswordField as PasswordFieldType,
  TextField as TextFieldType
} from "@/graphql/generated/graphql";
import useGravityForm, {
  ACTION_TYPES,
  BaseFieldValue,
  StringFieldValue
} from "@/hooks/use-gravity";
import { GravityFieldErrors } from "@/types/error-helpers";
import { useEffect, useRef, useState } from "react";
import { UnwrapInputProps } from "@/types/mapped";

export interface PasswordFieldProps extends GravityFieldErrors {
  field: PasswordFieldType;
  formId?: number | null;
}

const DEFAULT_VALUE = "";

export const InjectTextInput = ({
  ...props
}: UnwrapInputProps<
  | "className"
  | "type"
  | "name"
  | "id"
  | "required"
  | "value"
  | "onChange"
  | "placeholder"
>) => <input {...props} />;

const PasswordField = ({
  field,
  fieldErrors,
  formId: formmId
}: PasswordFieldProps) => {
  const {
    id,
    __typename,
    type,
    label,
    description,
    cssClass,
    isRequired,
    errorMessage,
    inputs,
    inputType,
    minPasswordStrength
  } = field;
  const [formIdState, setFormIdState] = useState(id || formmId);

  const formIdRef = useRef(formIdState);
  formmId = id;

  const { state, dispatch } = useGravityForm();

  const fieldValue = state.find(
    (fieldValue: BaseFieldValue) => fieldValue.id === id
  ) as StringFieldValue | undefined;

  const value = fieldValue?.value ?? DEFAULT_VALUE;

  useEffect(() => {
    const formIdInnerRef = formIdRef.current;
    (function NameFieldIIFE() {
      return formIdInnerRef === id ? "" : setFormIdState(id);
    })();
  }, [id, formmId, formIdState]);

  const htmlId = `field_${formIdRef.current}_${id}`;

  return (
    <div
      className={`gfield_${formIdRef.current}_${id} ${cssClass ?? ""}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <InjectTextInput
        type={"password"}
        name={String(id)}
        id={htmlId}
        required={Boolean(isRequired)}
        value={value}
        className={`gfield_${formIdRef.current}_${id}_input_text`}
        onChange={event => {
          dispatch({
            type: ACTION_TYPES.updateTextFieldValue,
            fieldValue: {
              id,
              value: event.target.value
            }
          });
        }}
      />
      {description ? <p className='field-description'>{description}</p> : null}
      {fieldErrors?.length
        ? fieldErrors.map(fieldError => (
            <p key={fieldError?.id} className='error-message'>
              {fieldError?.message}
            </p>
          ))
        : null}
    </div>
  );
};

export default PasswordField;
