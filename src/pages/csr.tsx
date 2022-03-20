import {
  useGetGravityFormQuery,
  GetGravityFormQuery,
  GetGravityForm,
  GetGravityFormQueryVariables,
  FormIdTypeEnum,
  FormFieldTypeEnum,
  GravityPostTypeQuery,
  GravityPostTypeQueryVariables,
  GravityPostType,
  GformIdType
} from "@/graphql/generated/graphql";
import cn from "classnames";
import { useRouter } from "next/router";
import { CreateAnAccountWrapper } from "@/components/FormWrappers/CreateAnAccount";
import {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType
} from "next";
import { ParsedUrlQuery } from "@/types/query-parser";
import { addApolloState, initializeApollo } from "@/apollo/apollo";
import { ApolloClient } from "@apollo/client";
import { ComponentType } from "react";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "@/components/UI";

export interface CsrProps {
  register: GetGravityFormQuery["gfForm"];
  gravity?: GravityPostTypeQuery["gform"];
}

const RegisterLazy: ComponentType<
  import("../components/Gravity/FormHook/gravity-form-coalesced").GravityFormProps
> = dynamic<
  import("../components/Gravity/FormHook/gravity-form-coalesced").GravityFormProps
>(() => import("../components/Gravity/FormHook/gravity-form-coalesced"), {
  loading: ({ error, isLoading, pastDelay, retry, timedOut }) =>
    isLoading ? (
      <LoadingSpinner />
    ) : error ? (
      <pre>{JSON.stringify(new Error(`${{ ...error }}`), null, 2)}</pre>
    ) : timedOut ? (
      <pre>{JSON.stringify(`timed out: ${timedOut}`, null, 2)}</pre>
    ) : pastDelay ? (
      <pre>{JSON.stringify(`past delay: ${pastDelay}`, null, 2)}</pre>
    ) : !!isLoading && !error && !timedOut && !!pastDelay ? (
      <pre>{JSON.stringify(retry, null, 2)}</pre>
    ) : (
      <LoadingSpinner />
    )
});

function Csr<T extends typeof getStaticProps>({
  register,
  gravity
}: InferGetStaticPropsType<T>) {
  return (
    <>
      <CreateAnAccountWrapper
        wrapper={gravity}
        className='mx-auto max-w-7xl fit'>
        <RegisterLazy  form={register} formId={"1"} />
      </CreateAnAccountWrapper>
    </>
  );
}

export const getStaticProps = async (
  ctx: GetStaticPropsContext<ParsedUrlQuery>
): Promise<GetStaticPropsResult<CsrProps>> => {
  const params = ctx.params;
  console.log(params ?? "no params here, pinche cabron");
  const apolloClientGravity = initializeApollo();
  const { CAPTCHA, EMAIL, NAME, PASSWORD, RECAPTCHA } = FormFieldTypeEnum;

  // register a new user
  const { data: register } = await apolloClientGravity.query<
    GetGravityFormQuery,
    GetGravityFormQueryVariables
  >({
    fetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true,
    query: GetGravityForm,
    variables: {
      formFieldType: [CAPTCHA, EMAIL, NAME, PASSWORD, RECAPTCHA],
      first: 300,
      formId: "1",
      idType: FormIdTypeEnum.DATABASE_ID
    }
  });

  const { data: gravity } = await apolloClientGravity.query<
    GravityPostTypeQuery,
    GravityPostTypeQueryVariables
  >({
    query: GravityPostType,
    context: { ...ctx },
    variables: { id: "create-an-account", idType: GformIdType.SLUG },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-first"
  });

  // TODO this does work
  // const r: { client: typeof apolloClientGravity, pageProps: { props: { register: typeof register } } } = addApolloState(apolloClientGravity, { props: { register } }) as { client: typeof apolloClientGravity, pageProps: { props: { register: typeof register } } };
  return addApolloState(apolloClientGravity, {
    props: { register, gravity },
    revalidate: 600
  });
};

export default Csr;
