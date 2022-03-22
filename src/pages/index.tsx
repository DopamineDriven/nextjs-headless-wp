import { addApolloState, initializeApollo } from "@/apollo/apollo";
import { ParsedUrlQuery } from "@/types/query-parser";
import { NormalizedCacheObject } from "@apollo/client";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetServerSidePropsType,
  InferGetStaticPropsType
} from "next";
import React, { HTMLAttributes, VFC } from "react";
import { World, Code, Inspector } from "@/components/UI";
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

export type IndexProps = {
  // gform?: GravityPostTypeQuery | null;
  params: ParsedUrlQuery;
};
// Proof of Concept
import type { UnwrapHtmlPickOneUnion } from "@/types/unwrap-react";

export const CustomDiv = ({
  children,
  ...props
}: UnwrapHtmlPickOneUnion<
  HTMLDivElement,
  keyof HTMLAttributes<HTMLDivElement>
>) => <div {...props}>{children}</div>;

export const CustomCanvasFtw = ({
  children,
  ...props
}: UnwrapHtmlPickOneUnion<
  HTMLCanvasElement,
  keyof HTMLAttributes<HTMLCanvasElement>
>) => <canvas {...props} />;

export const CustomHeading = ({
  ...props
}: UnwrapHtmlPickOneUnion<
  HTMLHeadingElement,
  keyof HTMLAttributes<HTMLHeadingElement>
>) => {
  return (
    <CustomDiv about='this div was unwrapped, stripped to its essential bits, and forced into this custom existence'>
      <h2 {...props}>
        <CustomCanvasFtw
          contentEditable='inherit'
          className='leading-[1.22rem] tracking-[0.019rem] text-[#885833]/90'
        />
        {props.children}
      </h2>
    </CustomDiv>
  );
};

export default function IndexPage<T extends typeof getStaticProps>({
  params
}: InferGetStaticPropsType<T>) {
  console.log(params ?? "no params");
  return (
    <>
      <div className='min-h-screen bg-gradient-to-tl from-gray-700 via-slate-800 to-gray-900 flex text-stone-200 fit '>
        <h2 className='lg:text-[1.025rem] z-10 text-[0.45rem] 5xs:text-[0.50rem] 4xs:text-[0.625rem] 3xs:text-[0.70rem] 2xs:text-[0.8rem] absolute top-100 origin-right left-[70%] tracking-[0.25rem] leading-[2.34rem] font-extralight font-interVar text-stone-200'>
          Headless WordPress Scaffold Init
        </h2>
        <World />
      </div>
    </>
  );
}

export const getStaticProps = async (
  ctx: GetStaticPropsContext<ParsedUrlQuery>
): Promise<GetStaticPropsResult<IndexProps>> => {
  const apolloClient = initializeApollo();
  const params = ctx.params ?? "no params";
  // const { data: gform} = await apolloClient.query<GravityPostTypeQuery, GravityPostTypeQueryVariables>(
  //   {
  //     query: GravityPostType,
  //     variables: {
  //       idType: GformIdType.SLUG,
  //       id: "create-an-account"
  //     },
  //     notifyOnNetworkStatusChange: true,
  //     fetchPolicy: "cache-first"
  //   }
  // );

  return addApolloState(apolloClient, {
    props: {
      params
    },
    revalidate: 600
  });
};
