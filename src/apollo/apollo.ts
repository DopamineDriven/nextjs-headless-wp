import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  TypedDocumentNode
} from "@apollo/client";
import { Cache } from "@apollo/client/cache/core/types/Cache";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import {
  createBatch,
  ResolverContext,
  sessionMiddleware,
  sessionAfterware,
  httpLink,
  errorLink,
  xResolvers
} from "./middleware";
import { useMemo } from "react";
import { relayStylePagination } from "@apollo/client/utilities";
import { RootQueryKeySpecifier, TypedTypePolicies } from "./helpers";
import emittedIntrospection from "./fragment-matcher";
import { Resolvers } from "@/graphql/generated/graphql";
import { AppInitialProps, AppProps } from "next/app";
import { AppPropsType } from "next/dist/shared/lib/utils";

export type CacheDerivedPropName<T extends keyof NormalizedCacheObject> = {
  [P in keyof T]?: T[P];
};
export let APOLLO_STATE_PROP_NAME: keyof NormalizedCacheObject;

export type DocumentType<TDocumentNode extends TypedDocumentNode<any, any>> =
  TDocumentNode extends TypedDocumentNode<infer TType, any> ? TType : never;

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient(
  context?: ResolverContext
): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    name: "nextjs-headless-wp",
    link: sessionMiddleware
      .concat(sessionAfterware)
      .concat(httpLink || errorLink),
    connectToDevTools: true,
    resolvers: xResolvers(context ?? {}),
    cache: new InMemoryCache({
      possibleTypes: emittedIntrospection.possibleTypes,
      typePolicies: {
        RootQuery: {
          queryType: true,
          keyFields: (props: RootQueryKeySpecifier): RootQueryKeySpecifier => [
            props
          ]
        }
      } as TypedTypePolicies
    })
  });
}
export type InitialState = NormalizedCacheObject | null;

export function initializeApollo(initialState: InitialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // Hydrate Initial State of Apollo Client Data Fetching Methods Here
  if (initialState) {
    // Get existing cache, loaded only during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using obj equality -- same concept as Sets
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s)))
      ]
    });

    // Restore cache w/ merged data
    _apolloClient.cache.restore(data);
  }

  // always create a new ApolloClient for SSG/SSR
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the Client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppInitialProps["pageProps"]
) {
  if (pageProps?.props) {
    pageProps.props[typeof APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
}

export function useApollo(pageProps: AppProps['pageProps']) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
// export type InitialState = NormalizedCacheObject | null;

// // Pages with Next.js data fetching methods, like `getStaticProps`, can send
// // a custom context which will be used by `SchemaLink` to server render pages
// export function initializeApollo<T extends ResolverContext>(
//   initialState: InitialState = null,
//   context?: T
// ): ApolloClient<NormalizedCacheObject> {
//   const _apolloClient = apolloClient ?? createApolloClient(context);
//   if (initialState) {
//     _apolloClient.cache.restore(initialState);
//   }
//   // always create a new ApolloClient for SSG/SSR
//   if (typeof window === "undefined") return _apolloClient;

//   // Create the Apollo Client once in the Client
//   if (!apolloClient) apolloClient = _apolloClient;
//   return _apolloClient;
// }

// export function useApollo<T extends ResolverContext>(
//   initialState: InitialState,
//   context?: T
// ): ApolloClient<NormalizedCacheObject> {
//   const store = useMemo<ApolloClient<NormalizedCacheObject>>(
//     () => initializeApollo<T>(initialState, context),
//     [initialState, context]
//   );
//   return store;
// }
