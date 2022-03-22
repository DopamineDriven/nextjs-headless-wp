import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  TypedDocumentNode
} from "@apollo/client";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import {
  ResolverContext,
  sessionMiddleware,
  sessionAfterware,
  httpLink,
  errorLink,
  xResolvers
} from "./middleware";
import { useMemo } from "react";
import {} from "@apollo/client/utilities";
import { RootQueryKeySpecifier, TypedTypePolicies } from "./helpers";
import emittedIntrospection from "./fragment-matcher";
import { AppInitialProps, AppProps } from "next/app";
// import { AppPropsType } from "next/dist/shared/lib/utils";

export let APOLLO_STATE_PROP_NAME: keyof NormalizedCacheObject;

export type DocumentType<TDocumentNode extends TypedDocumentNode<any, any>> =
  TDocumentNode extends TypedDocumentNode<infer TType, any> ? TType : never;

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient(
  context?: ResolverContext
): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    // name: "nextjs-headless-wp",
    link: sessionMiddleware
      .concat(sessionAfterware)
      .concat(httpLink || errorLink),
    connectToDevTools: true,
    resolvers: xResolvers<ResolverContext>(context ?? {}),
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
    const existingCache = _apolloClient.extract(true);

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
    pageProps.props[typeof APOLLO_STATE_PROP_NAME] = client.cache.extract(true);
  }
  return pageProps;
}

export function useApollo(pageProps: AppProps["pageProps"]) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
