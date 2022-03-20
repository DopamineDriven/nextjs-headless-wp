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
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloError
} from "@apollo/client";
// import dynamic, {
//   Loader,
//   LoaderMap,
//   LoadableGeneratedOptions,
//   LoaderComponent,
//   DynamicOptions
// } from "next/dynamic";
// import { LoadingSpinner } from "@/components/UI";
import Image from "next/image";
import { blurDataURLShimmer } from "@/lib/shimmer";
import buf from "@/utils/reusable-buffer";
import { useState, useEffect } from "react";
import { GravityFormCoalesced } from "@/components/Gravity";

export interface CsrProps {
  register?: GetGravityFormQuery["gfForm"];
  gravity?: GravityPostTypeQuery["gform"];
  toGlobalId: GetGravityFormQueryVariables["formId"];
}

const { EMAIL, NAME, PASSWORD } = FormFieldTypeEnum;

// const RegisterLazy = dynamic(
//   () => import("../components/Gravity/FormHook/gravity-form-coalesced"),
//   {
//     loading: ({ error, isLoading, pastDelay, retry, timedOut }) =>
//       isLoading ? (
//         <LoadingSpinner />
//       ) : error ? (
//         <pre>{JSON.stringify(new Error(`${{ ...error }}`), null, 2)}</pre>
//       ) : timedOut ? (
//         <pre>{JSON.stringify(`timed out: ${timedOut}`, null, 2)}</pre>
//       ) : pastDelay ? (
//         <pre>{JSON.stringify(`past delay: ${pastDelay}`, null, 2)}</pre>
//       ) : !!isLoading && !error && !timedOut && !!pastDelay ? (
//         <pre>{JSON.stringify(retry, null, 2)}</pre>
//       ) : (
//         <LoadingSpinner />
//       )
//   }
// );

function Csr<T extends typeof getStaticProps>({
  register,
  gravity,
  toGlobalId
}: InferGetStaticPropsType<T>) {
  const [getIdFromDbId, setGetIdFromDbId] = useState<string>(toGlobalId);
  const initialState = getIdFromDbId;
  useEffect(() => {
    (async function cbIIFE() {
      return initialState.length < 1
        ? setGetIdFromDbId(buf("gf_form:1", "utf-8", "base64").trim())
        : () => {};
    })();
  }, [setGetIdFromDbId, initialState]);
  const {
    data: formData = register,
    loading: formLoading,
    error: formError
  } = useGetGravityFormQuery({
    query: GetGravityForm,
    fetchPolicy: "cache-first",
    variables: {
      formFieldType: [EMAIL, NAME, PASSWORD],
      first: 300,
      formId: getIdFromDbId || toGlobalId,
      pageNumber: 1,
      idType: FormIdTypeEnum.ID
    },
    notifyOnNetworkStatusChange: true
  });
  // use the login page from your next-prisma-mongo repo as a scaffold
  return (
    <>
      <CreateAnAccountWrapper
        wrapper={gravity}
        className='mx-auto max-w-7xl fit'>
        {formLoading && !formError ? (
          <Image
            quality={90}
            placeholder='blur'
            blurDataURL={blurDataURLShimmer({ w: 600, h: 400 })}
            className='object-center object-contain motion-safe:animate-pulse duration-[350ms] transform-gpu ease-in-out '
            alt={blurDataURLShimmer({ w: 600, h: 400 })}
            src={blurDataURLShimmer({ w: 600, h: 400 })}
            width={600}
            height={600}
            layout='responsive'
            objectFit='cover'
          />
        ) : !formLoading && formError ? (
          <pre>
            {JSON.stringify(
              new ApolloError({
                clientErrors: formError?.clientErrors,
                errorMessage: formError?.message,
                extraInfo: formError?.extraInfo,
                graphQLErrors: formError?.graphQLErrors,
                networkError: formError?.networkError
              }),
              null,
              2
            )}{" "}
          </pre>
        ) : (
          <GravityFormCoalesced
            form={formData?.__typename === "GfForm" ? formData : register}
            formId={"1"}
            key={register?.id}
          />
        )}
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
  const toGlobalId = buf("gf_form:1", "utf-8", "base64").trim();
  // register a new user
  const { data: register } = await apolloClientGravity.query<
    import("@/graphql/generated/graphql").GetGravityFormQuery,
    GetGravityFormQueryVariables
  >({
    fetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true,
    query: GetGravityForm,
    variables: {
      formFieldType: [EMAIL, NAME, PASSWORD],
      first: 300,
      formId: toGlobalId,
      idType: FormIdTypeEnum.ID
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
  // const client = apolloClientGravity -- ALIAS TO INJECT TO CLIENT FOR USE
  // TODO this does work, write a helper to infer Record<string, unknown> generic args passed -- next.d.ts augmentation on pageProps
  // const r: { client: typeof apolloClientGravity, pageProps: { props: { register: typeof register } } } = addApolloState(apolloClientGravity, { props: { register } }) as { client: typeof apolloClientGravity, pageProps: { props: { register: typeof register } } };
  return addApolloState(apolloClientGravity, {
    props: { register, gravity, toGlobalId },
    revalidate: 600
  });
};

export default Csr;
