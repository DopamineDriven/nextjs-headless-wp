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
  StringFieldValue,
  StringFieldValues
} from "@/hooks/use-gravity";
import { GravityFieldErrors } from "@/types/error-helpers";
import React, {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
  HTMLInputTypeAttribute,
  useCallback
} from "react";
import Unwrap from "unwrap-react";

import { PasswordFieldPartialFragment } from "@/graphql/gravity/queries/get-gravity-form.graphql";
import { useRouter } from "next/router";
import cn from "classnames";

export interface InputProps extends Unwrap.ReactUnwrapped<"input"> {}

export interface PasswordFieldProps extends GravityFieldErrors {
  field: PasswordFieldType;
  formId?: number | null;
  input?: Unwrap.ReactUnwrapped<"input">;
  // fieldProps?: ({
  //   input
  // }: Unwrap.ReactUnwrapped<"input">) => OmitRecursiveOptionalRecursionAgent<
  //   RecursiveOptional<JSX.IntrinsicElements["input"]>
  // >;
}

const DEFAULT_VALUE: StringFieldValue["value"] = "";

const PasswordField = ({
  field,
  fieldErrors,
  input,
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
    value: value = DEFAULT_VALUE,
    inputType,
    minPasswordStrength
  } = field;
  const [formIdState, setFormIdState] = useState(id || formmId);
  const [passwordValState, setPasswordValState] = useState(value);
  const formIdRef = useRef(formIdState);
  formmId = id;

  const { state, dispatch } = useGravityForm();

  const fieldValue = state.find(
    (fieldValue: BaseFieldValue) => fieldValue.id === id
  ) as StringFieldValue | undefined;

  const passwordVal = fieldValue ? fieldValue : DEFAULT_VALUE;

  useEffect(() => {
    const formIdInnerRef = formIdRef.current;
    (function NameFieldIIFE() {
      return formIdInnerRef === id ? "" : setFormIdState(id);
    })();
  }, [id, formmId, formIdState]);

  // const PasswordVals =
  //   (fieldValue?.passwordValues || passwordValues) ?? DEFAULT_VALUE;

  const htmlId = `field_${formIdRef.current}_${id}`;

  const HandleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPasswordValState(event.target.value);
      dispatch({
        type: ACTION_TYPES.updatePasswordFieldValue,
        fieldValue: {
          id,
          value: event.target.value
        }
      });
    },
    [dispatch, id]
  );

  return (
    <div
      className={`gfield_${formIdRef.current}_${id} ${cssClass ?? ""}`.trim()}>
      <label htmlFor={htmlId}>{label}</label>
      {/* {fieldProps ? (
        fieldProps({
          input: {
            name: id.toString(),
            placeholder: (inputs![0]?.placeholder as string) ?? "",
            id: htmlId,
            required: isRequired ? isRequired : false,
            value: passwordValState ? passwordValState : undefined,
            className:
              input?.input?.className ??
              `gfield_${formIdRef.current}_${id}_input_text`,
            onChange: e => HandleChange(e),
            ...input?.input
          }
        })
      ) : ( */}
      <input
        type={"password"}
        name={id.toString()}
        placeholder={(inputs![0]?.placeholder as string) ?? ""}
        id={htmlId}
        required={isRequired ? isRequired : false}
        value={passwordValState ? passwordValState : undefined}
        className={`gfield_${formIdRef.current}_${id}_input_text`}
        onChange={e => HandleChange(e)}
        {...input?.input}
      />
      {/* )} */}
      {description ? (
        <p className='field-description hidden'>{description}</p>
      ) : null}
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
