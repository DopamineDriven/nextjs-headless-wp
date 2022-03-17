import { initializeApollo } from "@/apollo/apollo";
import { ParsedUrlQuery } from "@/types/query-parser";
import { NormalizedCacheObject } from "@apollo/client";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import React, { VFC } from "react";
import { World, Code } from "@/components/UI";

export type IndexProps = {
  apolloClient: NormalizedCacheObject;
};



export default function IndexPage() {
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

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery>
): Promise<GetServerSidePropsResult<IndexProps>> => {
  const apolloClient = initializeApollo({}, { req: ctx.req, res: ctx.res });
  const AuthHeaderPresent = ctx.req.headers.authorization;


  return {
    props: { apolloClient: apolloClient.cache.extract(true) }
  };
};
