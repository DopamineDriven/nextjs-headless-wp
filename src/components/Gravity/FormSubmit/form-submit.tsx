import { FieldCaseSwitch } from "../FieldCaseSwitch";
import {
  SubmitGravityFormDocument,
  useSubmitGravityFormMutation,
  GetGravityFormQuery
} from "@/graphql/generated/graphql";
import useGravityForm from "@/hooks/use-gravity";
import cn from "classnames";
import { useRouter } from "next/router";
import { VFC, FormEvent, ReactNode } from "react";
import type { GravityFieldErrors } from "@/types/error-helpers";
import Unwrap from "unwrap-react";

export interface FormSubmitProps extends GravityFieldErrors {
  form?: GetGravityFormQuery["gfForm"];
  id?: number | null;
  text?: string;
  className?: string;
  children?: ReactNode;
  saveAsDraft?: boolean;
  intrinsicProps?: Unwrap.ReactUnwrapped<"button" | "form">;
}

const GravityFormSubmit: VFC<FormSubmitProps> = ({
  className,
  fieldErrors,
  form,
  id,
  text,
  children,
  saveAsDraft,
  intrinsicProps
}) => {
  const router = useRouter();
  const [submitForm, { data, loading, error, called, client, reset }] =
    useSubmitGravityFormMutation({
      mutation: SubmitGravityFormDocument
    });

  const haveEntryId = data?.submitGfForm?.entry?.id != null ? true : false;
  const haveFieldErrors =
    data?.submitGfForm?.errors?.length && data.submitGfForm.errors.length > 0
      ? true
      : false;
  const wasSuccessfullySubmitted = haveEntryId && !haveFieldErrors;

  const defaultConfirmation = form?.confirmations?.find(
    confirmation => confirmation?.isDefault
  );

  const formFields = form?.formFields?.nodes ?? [];
  const { state, dispatch } = useGravityForm();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;

    submitForm({
      variables: {
        input: {
          saveAsDraft: saveAsDraft ? saveAsDraft : false,
          entryMeta: {
            sourceUrl:
              typeof window !== "undefined"
                ? window.location.href
                : router.pathname
          },
          id: form?.databaseId ? form.databaseId.toString() : "",
          fieldValues: state
        }
      }
    }).catch(error => {
      console.error(error);
    });
  }

  const GlobalButton = (
    <button
      {...intrinsicProps?.button}
      id={`gform_${id}_button_${formFields.length}`}
      type={
        !wasSuccessfullySubmitted
          ? "submit"
          : !!wasSuccessfullySubmitted
          ? "reset"
          : "button"
      }
      disabled={!!loading}
      className={
        className != null
          ? className + cn(`gform_${id}_${router.query.slug as string}-Button`)
          : cn(`gform_${id}_${router.query.slug as string}-button`)
      }>
      {intrinsicProps?.button?.["aria-valuetext"]
        ? intrinsicProps?.button["aria-valuetext"]
        : text ?? "Submit"}
      {children ?? <></>}
    </button>
  );

  if (wasSuccessfullySubmitted) {
    return id === 1 ? (
      <div className='mx-auto'>
        <button
          type='button'
          className='relative block w-fit border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={() => router.back()}>
          <div className='mb-6'>
            <div className='mx-auto flex items-center juftify-center h-12 w-12 rounded-full bg-gradient-to-r from-[#126fe2] to-[#03c9e6] '>
              <svg
                className='h-6 w-6 text-white mx-auto'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'></path>
              </svg>
            </div>
          </div>
          <span className='mt-2 block text-sm font-normal text-gray-900'>
            Thanks for your feedback!
          </span>
          <span className='mt-2 block text-sm font-normal text-blue-800 underline'>
            Return Home
          </span>
        </button>
      </div>
    ) : (
      <div
        className={cn(
          "mt-4 sm:mt-0 sm:ml-3 ",
          `${router.query.slug as string}-rootDiv-success-${formFields.length}`
        )}
        id={`gform_${id}_div_${formFields.length} `}>
        {GlobalButton}

        {defaultConfirmation?.message ? (
          <p className='mx-auto text-center font-gothamLight text-white text-[1.5rem]'>
            {defaultConfirmation.message}
          </p>
        ) : (
          <p className='mx-auto text-center font-gothamLight text-current text-[1.5rem]'>
            {"Form successfully submitted - thank you."}
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      id={`gform_${id}`}
      method='post'
      onSubmit={handleSubmit}
      className={cn(
        intrinsicProps?.form?.className ? intrinsicProps.form.className : ""
      )}
      {...intrinsicProps?.form}>
      {formFields.map((field, i) =>
        field ? (
          <FieldCaseSwitch
            formId={id}
            key={parseInt(`${field?.id ?? 2}`, 10) ** -++i}
            field={
              field.__typename === "CaptchaField"
                ? field
                : field.__typename === "EmailField"
                ? field
                : field.__typename === "FileUploadField"
                ? field
                : field.__typename === "NameField"
                ? field
                : field.__typename === "RadioField"
                ? field
                : field.__typename === "PasswordField"
                ? field
                : form?.formFields?.nodes
                ? form.formFields.nodes.pop()!
                : field
            }
            fieldErrors={data?.submitGfForm?.errors?.filter(
              id => id?.id === id
            )}
          />
        ) : (
          <></>
        )
      )}
      <div
        id={`gform_${id}_div_${formFields.length}`}
        className={cn(`gform_${id}_${router.query.slug as string}-rootDiv`)}>
        {fieldErrors?.map((error, x) => (
          <p key={error?.id ?? (++x) ** 2 + x++} className='error-message'>
            {error?.message}
          </p>
        ))}
        {GlobalButton}
      </div>
    </form>
  );
};

export default GravityFormSubmit;
