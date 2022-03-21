import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType
} from "next";
import {
  FormIdTypeEnum,
  FormFieldTypeEnum,
  GravityPostTypePathsQuery,
  GravityPostTypePathsQueryVariables,
  GravityPostTypeQuery,
  GravityPostTypeQueryVariables,
  GetGravityFormQuery,
  GetGravityFormQueryVariables,
  GformIdType,
  GetGravityForm,
  GravityPostType,
  GravityPostTypePaths
} from "@/graphql/generated/graphql";
import { addApolloState, initializeApollo } from "@/apollo/apollo";
import { useRouter } from "next/router";
import type { ParsedUrlQuery } from "@/types/query-parser";
import { NormalizedCacheObject } from "@apollo/client";
import { LoadingSpinner, Inspector } from "@/components/UI";
import GravityFormCoalesced from "@/components/Gravity/FormHook/gravity-form-coalesced";
import { htmlToReact } from "@/lib/html-to-react";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

export type DynamicGravityProps = {
  serverSlug: string;
  gform: GravityPostTypeQuery;
  register: GetGravityFormQuery;
};

export const getStaticPaths = async ({
  locales,
  defaultLocale
}: GetStaticPathsContext): Promise<GetStaticPathsResult<ParsedUrlQuery>> => {
  const apolloClientGravity = initializeApollo();
  const { data } = await apolloClientGravity.query<
    GravityPostTypePathsQuery,
    GravityPostTypePathsQueryVariables
  >({
    query: GravityPostTypePaths,
    variables: {
      first: 10
    },
    notifyOnNetworkStatusChange: true,
    partialRefetch: true
  });

  return {
    paths: locales
      ? locales.reduce<Array<string>>((paths, locale) => {
          data.gforms?.edges?.forEach(gformPath => {
            if (gformPath?.node?.slug)
              paths.push(
                `/${locale}/gravity/${encodeURIComponent(gformPath.node.slug)}`
              );
          });
          return paths;
        }, [])
      : data.gforms?.edges
      ? data.gforms.edges.map(gformPath =>
          `${defaultLocale}/gravity/${
            gformPath?.node?.slug
              ? encodeURIComponent(gformPath.node.slug)
              : "/en-US/gravity/"
          }`.trim()
        )
      : ["/"],
    fallback: true
  };
};

export const getStaticProps = async (
  ctx: GetStaticPropsContext<ParsedUrlQuery>
): Promise<GetStaticPropsResult<DynamicGravityProps>> => {
  const apolloClientGravity = initializeApollo();
  const serverSlug = ctx.params ? (ctx.params.uri as string) : "";
  const { data: gform } = await apolloClientGravity.query<
    GravityPostTypeQuery,
    GravityPostTypeQueryVariables
  >({
    query: GravityPostType,
    variables: {
      idType: GformIdType.SLUG,
      id: serverSlug
    },
    notifyOnNetworkStatusChange: true,
    context: { ...ctx },
    fetchPolicy: "cache-first"
  });

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

  return addApolloState(apolloClientGravity, {
    props: {
      gform,
      register,
      serverSlug
    },
    revalidate: 600
  });
};

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

const RegisterLazy: ComponentType<
  import("../../components/Gravity/FormHook/gravity-form-coalesced").GravityFormProps
> = dynamic<
  import("../../components/Gravity/FormHook/gravity-form-coalesced").GravityFormProps
>(
  async () =>
    (await import("../../components/Gravity/FormHook/gravity-form-coalesced"))
      .default,
  {
    loading: ({ error, isLoading, pastDelay, retry, timedOut }) =>
      isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <pre>{JSON.stringify(new Error(`${{ ...error }}`), null, 2)}</pre>
      ) : (
        <LoadingSpinner />
      )
  }
);

const DynamicGravity = <T extends typeof getStaticProps>({
  gform,
  register,
  serverSlug
}: InferGetStaticPropsType<T>) => {
  console.log(register ?? "no register");
  const router = useRouter();
  const isomorphicSlug =
    typeof window === "undefined"
      ? serverSlug
      : (router.query.uri as string) ?? serverSlug;
  return (
    <>
      {router.isFallback ? (
        <LoadingSpinner />
      ) : (
        <div className='font-interVar mx-auto mt-10'>
          <Inspector>{JSON.stringify(register, null, 2)}</Inspector>
          {isomorphicSlug === "create-an-account" ? (
            <RegisterLazy
              form={register.gfForm}
              formId='1'
              key={register.gfForm?.id}
            />
          ) : (
            <div>{"hmm...something went wrong..."} </div>
          )}
        </div>
      )}
    </>
  );
};

export default DynamicGravity;
