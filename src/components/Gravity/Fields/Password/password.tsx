import {
  FormFieldTypeEnum,
  PasswordField as PasswordFieldType,
  PasswordInputProperty,
  TextField as TextFieldType
} from "@/graphql/generated/graphql";
import useGravityForm, {
  ACTION_TYPES,
  BaseFieldValue,
  PasswordFieldInput,
  PasswordFieldValues,
  StringFieldValues
} from "@/hooks/use-gravity";
import { GravityFieldErrors } from "@/types/error-helpers";
import {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
  HTMLInputTypeAttribute
} from "react";
import { UnwrapInputProps } from "@/types/mapped";
import { PasswordFieldPartialFragment } from "@/graphql/gravity/queries/get-gravity-form.graphql";
import { useRouter } from "next/router";
import cn from "classnames";

export interface PasswordFieldProps extends GravityFieldErrors {
  field: PasswordFieldType;
  formId?: number | null;
}

const DEFAULT_VALUE: PasswordFieldInput = {};

export const InjectTextInput = ({
  ...props
}: UnwrapInputProps<
  | "className"
  | "type"
  | "name"
  | "id"
  | "required"
  | "value"
  | "min"
  | "onChange"
  | "placeholder"
>) => <input {...props} />;

const PasswordField = ({
  field,
  fieldErrors,
  formId: formmId
}: PasswordFieldProps) => {
  const router = useRouter();
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
    value,
    inputType,
    minPasswordStrength
  } = field;
  const [formIdState, setFormIdState] = useState(id || formmId);

  const formIdRef = useRef(formIdState);
  formmId = id;

  const { state, dispatch } = useGravityForm();

  const fieldValue = state.find(
    (fieldValue: BaseFieldValue) => fieldValue.id === id
  ) as PasswordFieldValues | undefined;

  const passwordValues = fieldValue?.passwordValues ?? DEFAULT_VALUE;

  useEffect(() => {
    const formIdInnerRef = formIdRef.current;
    (function NameFieldIIFE() {
      return formIdInnerRef === id ? "" : setFormIdState(id);
    })();
  }, [id, formmId, formIdState]);

  // const PasswordVals =
  //   (fieldValue?.passwordValues || passwordValues) ?? DEFAULT_VALUE;

  const htmlId = `field_${formIdRef.current}_${id}`;
// const [targetValue, setTargetValue] = useState<ChangeEvent<HTMLInputElement>['target']['value']>("")
  function HandleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    // const newPasswordValues = { ...fieldValue?.passwordValues, [name]: value };
    dispatch({
      type: ACTION_TYPES.updatePasswordFieldValue,
      fieldValue: {
        id,
        passwordValues: {
          value: event.target.value,
          confirmationValue: event.target.value
        }
      }
    });
  }
  return (
    <div
      className={`gfield_${formIdRef.current}_${id} ${cssClass ?? ""}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      <InjectTextInput
        type={"password"}
        name={String(id)}
        placeholder={inputs![0]?.placeholder as string ?? ""}
        id={htmlId}
        required={Boolean(isRequired)}
        value={passwordValues.value as string ?? value as string}
        className={`gfield_${formIdRef.current}_${id}_input_text`}
        onChange={HandleChange}
      />
      {/* {inputs?.map((input, h) => {
        const key = input?.id || h++;
        const inputLabel = input?.label || "";
        const placeholder = input?.placeholder || "";
        const inputId = input?.id ? input.id : h++;
        return (
          <div
            key={key.toString()}
            id={`gform_${formIdRef.current}_field_${id}_rootDiv_${h++}`}
            className={cn(
              `gform_${formIdRef.current}_gfield-rootDiv_${
                router.query.slug as string
              } ${cssClass ?? ""}`.trim()
            )}>
            <label htmlFor={`input_${formIdRef.current}_${id}_${key}`}>
              {inputLabel.includes("Enter Password") ? inputLabel : ""}
            </label>
            <InjectTextInput
              className={cn(
                `gform_${formIdRef.current}_gfield_nameinput_${
                  router.query.slug as string
                }`,
                placeholder !=null
                  ? "not-sr-only min-w-full"
                  : placeholder == null
                  ? "sr-only"
                  : ""
              )}
              type={type ? FormFieldTypeEnum.PASSWORD : "password"}
              name={String(key)}
              id={`input_${formIdRef.current}_${id}_${key}`}
              placeholder={`${
                inputs[Number(key)]
                  ? inputs[Number(key)]?.placeholder
                  : placeholder
                }`}
              onChange={e => {
                e.preventDefault();
                setTargetValue(value ? value : targetValue!);
              }}
              value={targetValue}
            />
          </div>
        );
      })} */}
      {description ? <p className='field-description hidden'>{description}</p> : null}
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
