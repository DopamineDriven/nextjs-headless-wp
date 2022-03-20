import { GravityFormProvider } from "@/hooks/use-gravity";
import {
  FormIdTypeEnum,
  useGetGravityFormQuery,
  GetGravityForm,
  GetGravityFormQuery,
  FormFieldTypeEnum
} from "@/graphql/generated/graphql";
import { GravityFormSubmit } from "../FormSubmit";
import { useState, useRef, useEffect, VFC, ReactNode } from "react";
import { LoadingSpinner } from "@/components/UI";
import { GravityFieldErrors } from "@/types/error-helpers";
import { htmlToReact } from "@/lib/html-to-react";

export type Enumerable<T> = T | Array<T>;
export interface GravityFormProps extends GravityFieldErrors {
  form: GetGravityFormQuery["gfForm"];
  formId: string;
  text?: string;
  className?: string;
  children?: Iterable<ReactNode>
}

const GravityFormCoalesced: VFC<GravityFormProps> = ({
  form,
  formId,
  text,
  className,
  fieldErrors,
  children
}) => {
  const [formIdState, setFormIdState] = useState(formId);

  const {
    data: dataForm,
    loading,
    error
  } = useGetGravityFormQuery({
    fetchPolicy: "cache-first",
    query: GetGravityForm,
    variables: {
      formFieldType: [FormFieldTypeEnum.NAME, FormFieldTypeEnum.EMAIL, FormFieldTypeEnum.PASSWORD],
      formId: formIdState.toString(),
      first: 300,
      idType: FormIdTypeEnum.DATABASE_ID
    }
  });

  const stateRef = useRef(formIdState);

  useEffect(() => {
    const innerStateRef = stateRef.current;
    (function FormIdIIFE() {
      return innerStateRef.valueOf() === formId.valueOf()
        ? ""
        : setFormIdState(formId);
    })();
  }, [formId, formIdState]);

  form = dataForm?.gfForm;

  return (
    <GravityFormProvider>
      {error ? (
        <div>
          {new Error(`${error} --- error in gravity-form-coalesced.tsx`)}
        </div>
      ) : !error && loading ? (
        <LoadingSpinner />
      ) : (
        <GravityFormSubmit
          id={
            dataForm?.gfForm?.databaseId
              ? dataForm.gfForm.databaseId
              : form?.databaseId
              ? form.databaseId
              : Number.parseInt(stateRef.current, 10)
          }
          fieldErrors={fieldErrors}
          form={form}
          text={text ?? ""}
              className={className ?? ""}>
              <div>          {children ?? <></>}</div>
        </GravityFormSubmit>
      )}
    </GravityFormProvider>
  );
};

export default GravityFormCoalesced;
