import {
  NameFieldsGravityPartialFragment,
  NameInputProperty,
  NameFieldInput
} from "@/graphql/generated/graphql";
import useGravityForm, {
  ACTION_TYPES,
  BaseFieldValue,
  NameFieldValues
} from "@/hooks/use-gravity";
import { GravityFieldErrors } from "@/types/error-helpers";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import { UnwrapInputProps } from "@/types/mapped";

export const InjectNameInput = ({
  ...props
}: UnwrapInputProps<
  | "className"
  | "type"
  | "name"
  | "autoComplete"
  | "id"
  | "required"
  | "value"
  | "onChange"
  | "placeholder"
>) => <input {...props} />;

interface GravityNameProps extends GravityFieldErrors {
  field: NameFieldsGravityPartialFragment;
  formId?: number | null;
}

const DEFAULT_VALUE: NameFieldInput = {};

const AUTOCOMPLETE_ATTRIBUTES: { [key: string]: string } = {
  prefix: "honorific-prefix",
  first: "given-name",
  middle: "additional-name",
  last: "family-name",
  suffix: "honorific-suffix"
};

export default function NameField({
  field,
  fieldErrors,
  formId: formmId
}: GravityNameProps) {
  const { id, __typename, type, label, description, cssClass, inputs } = field;
  const [formIdState, setFormIdState] = useState(id);

  const formIdRef = useRef(formIdState);
  const router = useRouter();

  useEffect(() => {
    const formIdInnerRef = formIdRef.current;
    (function NameFieldIIFE() {
      return formIdInnerRef === id ? "" : setFormIdState(id);
    })();
  }, [id, formmId, formIdState]);

  const htmlId = `field_${formIdRef.current}_${id}`;

  const { state, dispatch } = useGravityForm();

  const fieldValue = state.find(
    (fieldValue: BaseFieldValue) => fieldValue.id === id
  ) as NameFieldValues | undefined;
  const nameValues = fieldValue?.nameValues || DEFAULT_VALUE;

  const prefixInput = inputs?.find(input => input?.key === "prefix");
  const otherInputs = inputs?.filter(input => input?.key !== "prefix") || [];

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    const newNameValues = { ...nameValues, [name]: value };

    dispatch({
      type: ACTION_TYPES.updateNameFieldValue,
      fieldValue: {
        id,
        nameValues: newNameValues
      }
    });
  }

  return (
    <fieldset
      id={htmlId}
      className={cn(
        `gform_${formIdRef.current}_gfield-${type}_${
          router.query.slug as string
        } ${cssClass ?? ""}`.trim()
      )}>
      <legend>{label}</legend>
      {prefixInput ? (
        <>
          <select
            className=''
            name={String(prefixInput.key)}
            id={`input_${formIdRef.current}_${id}_${prefixInput.key}`}
            autoComplete={AUTOCOMPLETE_ATTRIBUTES.prefix}
            value={nameValues.prefix || ""}
            onChange={handleChange}>
            <option value=''></option>
            {prefixInput.choices?.map(choice => (
              <option key={choice?.value} value={String(choice?.value)}>
                {String(choice?.text)}
              </option>
            ))}
          </select>
          <label
            htmlFor={`input_${formIdRef.current}_${id}_${prefixInput.key}`}>
            {prefixInput.label}
          </label>
        </>
      ) : null}
      {otherInputs.map((input, i) => {
        const key = input?.key as keyof NameFieldInput;
        const inputLabel = input?.label || "";
        const placeholder = input?.placeholder || "";
        return (
          <div
            className={cn(
              `gform_${formIdRef.current}_gfield-rootDiv_${
                router.query.slug as string
              } ${cssClass ?? ""}`.trim()
            )}
            key={key}
            id={`gform_${formIdRef.current}_field_${id}_rootDiv_${i++}`}>
            <label
              htmlFor={`input_${formIdRef.current}_${id}_${key}`}
              className=''>
              {inputLabel.includes("Given Name")
                ? inputLabel
                : inputLabel.includes("Surname")
                ? inputLabel
                : ""}
            </label>
            <InjectNameInput
              className={cn(
                `gform_${formIdRef.current}_gfield_nameinput_${
                  router.query.slug as string
                }`,
                placeholder.includes("Given Name")
                  ? "visible min-w-full"
                  : placeholder.includes("Surname")
                  ? "visible min-w-full"
                  : ""
              )}
              type='text'
              name={key}
              id={`input_${formIdRef.current}_${id}_${key}`}
              placeholder={placeholder}
              autoComplete={AUTOCOMPLETE_ATTRIBUTES[key]}
              value={nameValues?.[key] || ""}
              onChange={handleChange}
            />
          </div>
        );
      })}
      {description ? (
        <p className='field-description' id={`p_${formIdRef.current}_${id}`}>
          {description}
        </p>
      ) : null}
      {fieldErrors?.length
        ? fieldErrors.map(fieldError => (
            <p key={fieldError?.id} className='error-message'>
              {fieldError?.message}
            </p>
          ))
        : null}
    </fieldset>
  );
}
