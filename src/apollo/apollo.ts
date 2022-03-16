import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  TypedDocumentNode
} from "@apollo/client";
import {
  createBatch,
  sessionMiddleware,
  sessionAfterware,
  errorLink,
  xResolvers
} from "./middleware";
import { ResolverContext } from "@/types/resolver-context";
import { useMemo } from "react";
import { relayStylePagination } from "@apollo/client/utilities";
import { RootQueryKeySpecifier, TypedTypePolicies } from "./helpers";
import emittedIntrospection from "./fragment-matcher";
import { Resolvers } from "@/graphql/generated/graphql";

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
      .concat(createBatch(context) || errorLink),
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

// Pages with Next.js data fetching methods, like `getStaticProps`, can send
// a custom context which will be used by `SchemaLink` to server render pages
export function initializeApollo<T extends ResolverContext>(
  initialState: InitialState = null,
  context?: T
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient(context);
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // always create a new ApolloClient for SSG/SSR
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the Client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo<T extends ResolverContext>(
  initialState: InitialState,
  context?: T
): ApolloClient<NormalizedCacheObject> {
  const store = useMemo<ApolloClient<NormalizedCacheObject>>(
    () => initializeApollo<T>(initialState, context),
    [initialState, context]
  );
  return store;
}
