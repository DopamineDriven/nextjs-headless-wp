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
import cn from "classnames";
import GitHubIcon from "@/components/Icons/github-nav";
import ExpressVpn from "@/components/Icons/express-vpn";
import { HorizontalWave } from "@/components/Icons/horizontal-wave";

export type IndexProps = {
  // gform?: GravityPostTypeQuery | null;
  params: ParsedUrlQuery;
};
// Proof of Concept
import type { UnwrapHtmlUnion } from "@/types/unwrap-react";
import * as UnwrapReact from "@/types/unwrap-react";

export const CustomDiv = ({ div }: Unwrap.ReactUnwrapped<"div">) => (
  <div {...div}>
    <GitHubIcon
      svg={{
        "aria-hidden": true,
        "aria-label": "GitHubIcon",
        onChange: e => {
          e.preventDefault();
          e.currentTarget.style.cssText.replace(
            "GitHubIcon",
            "Changing Text Underway"
          );
        }
      }}
      path={{
        name: "GitHubIconPath",
        onMouseOver: e => {
          e.preventDefault();
          // do things
        }
      }}
    />
    {div?.children}
  </div>
);

export const CustomCanvasFtw = ({
  canvas
}: Unwrap.ReactUnwrapped<"canvas">) => <canvas {...canvas} />;

export const CustomHeading = ({
  h2,
  div,
  p,
  canvas
}: Unwrap.ReactUnwrapped<"h2" | "div" | "p" | "canvas">) => {
  return (
    <CustomDiv {...div}>
      <h2 {...h2}>
        <CustomCanvasFtw
          canvas={{
            contentEditable: canvas?.contentEditable ?? "inherit",
            className: cn(
              "leading-[1.22rem] tracking-[0.019rem] text-[#885833]/90",
              canvas?.className
            ),
            ...canvas
          }}
        />
        <p {...p}>{p?.children}</p>
        {h2?.children}
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
