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
import { initializeApollo } from "@/apollo/apollo";
import { useRouter } from "next/router";
import type { ParsedUrlQuery } from "@/types/query-parser";
import { NormalizedCacheObject } from "@apollo/client";
import { LoadingSpinner } from "@/components/UI";
import GravityFormCoalesced from "@/components/Gravity/FormHook/gravity-form-coalesced";
import { htmlToReact } from "@/lib/html-to-react";

export type DynamicGravityProps = {
  serverSlug: string;
  gform: GravityPostTypeQuery;
  register: GetGravityFormQuery;
  cache: NormalizedCacheObject;
};

export const getStaticPaths = async ({
  locales,
  defaultLocale
}: GetStaticPathsContext): Promise<GetStaticPathsResult<ParsedUrlQuery>> => {
  const apolloClientGravity = initializeApollo(null, {});
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
  const apolloClientGravity = initializeApollo(null, { ctx });
  const slug = ctx.params ? (ctx.params.slug as string) : "";
  const { data: gform } = await apolloClientGravity.query<
    GravityPostTypeQuery,
    GravityPostTypeQueryVariables
  >({
    query: GravityPostType,
    variables: {
      idType: GformIdType.SLUG,
      id: slug
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
      first: 10,
      formId: "1",
      idType: FormIdTypeEnum.DATABASE_ID
    }
  });

  return {
    props: {
      cache: apolloClientGravity.extract(true),
      gform,
      register,
      serverSlug: slug
    },
    revalidate: 600
  };
};

const DynamicGravity = <T extends typeof getStaticProps>({
  cache,
  gform,
  register,
  serverSlug
}: InferGetStaticPropsType<T>) => {
  const router = useRouter();
  const isomorphicSlug =
    typeof window === "undefined"
      ? serverSlug
      : (router.query.slug as string) ?? serverSlug;
  return (
    <>
      {router.isFallback ? (
        <LoadingSpinner />
      ) : (
        <div className='font-interVar mx-auto mt-10'>
          {htmlToReact(`${gform.gform?.content ?? "no content"}`)}
          {isomorphicSlug === "create-an-account" ? (
            <GravityFormCoalesced form={register.gfForm} formId='1' />
          ) : (
            <div>{"hmm...something went wrong..."} </div>
          )}
        </div>
      )}
    </>
  );
};

export default DynamicGravity;
