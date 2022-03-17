import type { NextComponentType, NextPageContext } from "next";
import type { AppInitialProps } from "next/app";
import type { Router } from "next/router";
import type {
  NormalizedCacheObject,
  ApolloClient,
  NormalizedCache
} from "@apollo/client";
import type { ResolverContext } from "./resolver-context";
// import { AuthData } from "@/hooks/use-auth";
declare module "next/app" {
  type AppProps<P = Record<string, unknown>> = {
    Component: NextComponentType<NextPageContext, any, P>;
    router: Router;
    __N_SSG?: boolean | undefined;
    __N_SSP?: boolean | undefined;
    __N_RSC?: boolean | undefined;
    pageProps: P & {
      initialApolloState: NormalizedCacheObject | null;
      resolverContext: ResolverContext;
    };
  };
}
