import { EmailFieldsGravityPartialFragment } from "@/graphql/generated/graphql";
import useGravityForm, {
  ACTION_TYPES,
  BaseFieldValue,
  EmailFieldValues
} from "@/hooks/use-gravity";
import { GravityFieldErrors } from "@/types/error-helpers";
import { useEffect, useRef, useState, InputHTMLAttributes } from "react";
import { useRouter } from "next/router";
import Unwrap from "unwrap-react";
import { JSXIntrinsicPropsConstruct } from "unwrap-react/unwrap";

export const InjectEmailInput = ({
  input
}: Required<Unwrap.ReactUnwrapped<"input">>) => <input {...input} />;

interface EmailFieldProps extends GravityFieldErrors {
  field: EmailFieldsGravityPartialFragment;
  formId?: number | null;
}

const DEFAULT_VALUE = "";

export default function EmailField({
  field,
  fieldErrors,
  formId: formmId
}: EmailFieldProps) {
  const router = useRouter();
  const {
    id,
    value: fragmentValue,
    type,
    label,
    description,
    isRequired,
    placeholder
  } = field;
  formmId = id;

  const [formIdState, setFormIdState] = useState(id || formmId);

  const formIdRef = useRef(formIdState);

  useEffect(() => {
    const formIdInnerRef = formIdRef.current;
    (function NameFieldIIFE() {
      return formIdInnerRef === id ? formmId : setFormIdState(id);
    })();
  }, [id, formmId, formIdState]);

  const htmlId = `form_${formmId}_field_${id}`;
  const { state, dispatch } = useGravityForm();
  const fieldValue = state.find(
    (fieldValue: BaseFieldValue) => fieldValue.id === id
  ) as EmailFieldValues | undefined;
  const value = fieldValue?.emailValues?.value || DEFAULT_VALUE;
  return (
    <>
      <label htmlFor={htmlId} className='sr-only'>
        {label}
      </label>
      <InjectEmailInput
        input={{
          type: "email",
          name: String(id),
          id: htmlId,
          className: `gfield_${formIdRef.current}_field_${id}_email_${
            router.query.uri as string
          }`,
          placeholder: `${placeholder ?? "Enter Email"}`,
          value: value,
          required: isRequired ? isRequired : !isRequired,
          onChange: e => {
            e.preventDefault();
            dispatch({
              type: ACTION_TYPES.updateEmailFieldValue,
              fieldValue: {
                id,
                emailValues: {
                  value: e.target.value
                }
              }
            });
          }
        }}
      />
      {description ? (
        <p
          className='field-description sr-only'
          id={`gform_${formIdRef.current}_field_${id}_p`}>
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
    </>
  );
}
