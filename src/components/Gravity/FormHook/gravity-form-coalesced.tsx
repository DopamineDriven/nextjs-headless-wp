import { GravityFormProvider } from "@/hooks/use-gravity";
import {
  FormIdTypeEnum,
  useGetGravityFormQuery,
  GetGravityForm,
  GetGravityFormQuery
} from "@/graphql/generated/graphql";
import { GravityFormSubmit } from "../FormSubmit";
import { useState, useRef, useEffect, VFC, ReactNode } from "react";
import { LoadingSpinner } from "@/components/UI";

export type GravityFormProps = {
  form: GetGravityFormQuery["gfForm"];
  formId: string;
  text?: string;
  className?: string;
  children?: ReactNode;
};

const GravityFormCoalesced: VFC<GravityFormProps> = ({
  form,
  formId,
  text,
  className,
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
      formId: formIdState.toString(),
      first: 100,
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

  form = dataForm?.gfForm ? (form = dataForm.gfForm) : dataForm?.gfForm;

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
            dataForm?.gfForm?.id
              ? Number.parseInt(dataForm.gfForm.id, 10)
              : Number.parseInt(stateRef.current, 10)
          }
          form={dataForm?.gfForm || form}
          text={text ?? ""}
          className={className ?? ""}>
          {children ?? <></>}
        </GravityFormSubmit>
      )}
    </GravityFormProvider>
  );
};
export default GravityFormCoalesced;
