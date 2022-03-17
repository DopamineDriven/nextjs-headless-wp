import { RadioField as RadioFieldType } from "@/graphql/generated/graphql";
import { GravityFieldErrors } from "@/types/error-helpers";
import useGravityForm, {FormIdCounter,
  ACTION_TYPES,
  BaseFieldValue,
  StringFieldValue
} from "@/hooks/use-gravity";
import { useEffect, useRef, useState, ChangeEvent, useCallback } from "react";
import cn from "classnames";

export interface GravityRadioProps extends GravityFieldErrors {
  field: RadioFieldType;
  formId?: number | null;
}

const DEFAULT_VALUE = "";

const RadioField = ({
  field,
  fieldErrors,
  formId: formmId
}: GravityRadioProps) => {

  const formId = 1;
  const {
    id,
    type,
    label,
    inputType,
    description,
    cssClass,
    choices,
    value: val
  } = field;
  const formIdConditional = formId === formmId ? formmId : formId;
  const [formIdState, setFormIdState] = useState(formIdConditional);
  const formIdRef = useRef(formIdState);
  const htmlId = `field_${formIdRef.current}_${id}`;
  const { state, dispatch } = useGravityForm();

  useEffect(() => {
    const formIdInnerRef = formIdRef.current;
    (function RadioFieldIIFE() {
      return formIdInnerRef?.valueOf() === formIdState?.valueOf()
        ? formIdInnerRef.valueOf() === formIdConditional.valueOf()
          ? formIdInnerRef.valueOf() === formIdRef.current.valueOf()
            ? () => {}
            : setFormIdState(formIdRef.current.valueOf())
          : setFormIdState(formIdConditional)
        : setFormIdState(formIdState);
    })();
  }, [formId, formmId, formIdState, formIdRef, formIdConditional]);

  const fieldValue = state.find(
    (fieldValue: BaseFieldValue) => fieldValue.id === id
  ) as StringFieldValue | undefined;

  const value = fieldValue?.value || DEFAULT_VALUE || val;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: ACTION_TYPES.updateRadioFieldValue,
        fieldValue: {
          id,
          value: e.target.value
        }
      });
    },
    [dispatch, id]
  );

  return (
    <fieldset
      id={htmlId}
      className={`gfield gfield_${type} ${cssClass ?? ""}`.trim()}>
      <legend>{label ?? ""}</legend>
      <div className='space-y-5'>
        {choices?.map((inp, i) => {
          const inpText = inp?.text ?? "";
          const inpVal = inp?.value ?? "";
          return (
            <div key={inpVal}>
              <div>
                <input
                  type='radio'
                  value={inpVal}
                  className={cn("")}
                  aria-describedby={`${inpVal}-description`}
                  name={String(id)}
                  // defaultChecked={choices && choices[i++]?.value === choices[i++]?.isSelected}
                  onChange={e => handleChange(e)}
                  id={`choice_${cssClass}_${id}_${inpVal}`}
                />
              </div>
              <div>
                <label htmlFor={`choice_${formId}_${id}_${value}`}>
                  {inpText ?? ""}
                </label>
              </div>
            </div>
          );
        })}
      </div>
      {description ? (
        <p id='description_radio' className='radio-field-description'>
          {description ?? ""}
        </p>
      ) : null}
      {fieldErrors?.length
        ? fieldErrors.map((err, l) => (
            <p key={err?.id ?? (++l) ** ((2 + ++l) ** -1)}>
              {err?.message ?? ""}
            </p>
          ))
        : null}
    </fieldset>
  );
};

export default RadioField;
