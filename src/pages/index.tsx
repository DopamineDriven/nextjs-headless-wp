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
import React, { VFC } from "react";
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
  gform?: GravityPostTypeQuery | null;
};
// Proof of Concept
import type { UnwrapHtmlPickOneUnion } from "@/types/unwrap-react";

export const CustomDiv = ({
  ...props
}: UnwrapHtmlPickOneUnion<
  HTMLDivElement,
  | "about"
  | "accessKey"
  | "className"
  | "onChange"
  | "children"
  | "ref"
  | "dangerouslySetInnerHTML"
>) => <div {...props}>{props.children}</div>;

export const CustomCanvasFtw = ({
  ...props
}: UnwrapHtmlPickOneUnion<
  HTMLCanvasElement,
  | "contentEditable"
  | "placeholder"
  | "onCopyCapture"
  | "className"
  | "aria-hidden"
  | "onTouchMove"
  | "onChange"
  | "onMouseOverCapture"
>) => <canvas {...props} />;

export const CustomHeading = ({
  ...props
}: UnwrapHtmlPickOneUnion<
  HTMLHeadingElement,
  "typeof" | "title" | "children" | "is" | "role" | "className"
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
  gform
}: InferGetStaticPropsType<T>) {
  console.log(gform?.gform ?? "no gform")
  return (
    <>
      <div className='min-h-screen bg-gradient-to-tl from-gray-700 via-slate-800 to-gray-900 flex text-stone-200 fit '>
        <h2 className='lg:text-[1.025rem] text-[0.45rem] 5xs:text-[0.50rem] 4xs:text-[0.625rem] 3xs:text-[0.70rem] 2xs:text-[0.8rem] absolute top-10 origin-center right-[40%] tracking-[0.25rem] leading-[2.34rem] font-extralight font-interVar text-stone-200'>
          Headless WordPress Scaffold Init
        </h2>
        <World className='mt-10 scale-[0.8] relative origin-center -right-48' />
      </div>
    </>
  );
}

export const getStaticProps = async (
  ctx: GetStaticPropsContext<ParsedUrlQuery>
): Promise<GetStaticPropsResult<IndexProps>> => {
  const apolloClient = initializeApollo();
  const { data: gform} = await apolloClient.query<GravityPostTypeQuery, GravityPostTypeQueryVariables>(
    {
      query: GravityPostType,
      variables: {
        idType: GformIdType.SLUG,
        id: "create-an-account"
      },
      notifyOnNetworkStatusChange: true,

      fetchPolicy: "cache-first"
    }
  );

  return addApolloState(apolloClient, {
    props: {
      gform
    }
  });
};
