import { ServerResponse, IncomingMessage } from "http";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { onError } from "@apollo/client/link/error";
import { Resolvers } from "@/graphql/generated/graphql";
import { ApolloLink, FetchResult } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

export type ResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
};

const token = process.env.GRAPHQL_JWT_AUTH_SECRET_KEY_YML ?? "";
// https://github.com/unjs/ohmyfetch/blob/main/src/types.ts

export const enhancedFetch = async (url: RequestInfo, init: RequestInit) => {
  return await fetch(url, {
    ...init,
    headers: {
      ...init.headers
    },
    credentials: "include",
    keepalive: true,
    method: "POST"
  }).then(response => response);
};
export const httpLink = createUploadLink({
  uri: "https://www.andrewross.engineer/graphql",
  credentials: "include",
  includeExtensions: true,
  fetch: enhancedFetch,
  fetchOptions: {
    mode: "cors"
  },
  headers: {
    "Accept-Encoding": "gzip, deflate, br",
    "Transfer-Encoding": "chunked",
    "Content-Type": "application/json; charset=utf-8",
    Connection: "keep-alive",
    Authorization: `Bearer ${token}`,
    "x-jwt-auth": `Bearer ${token}`,
    Accept: "*/*"
  }
});
export const xResolvers = <T extends ResolverContext>(props: Resolvers<T>) => ({
  ...props
});

const envEndpoint =
  process.env.NEXT_GQL_ENDPOINT ?? "https://www.andrewross.engineer/graphql";

export function createBatch<T extends ResolverContext>(context?: T) {
  return createUploadLink({
    uri: envEndpoint,
    credentials: "include",
    includeExtensions: true,
    fetchOptions: {
      mode: "cors"
    },
    fetch: enhancedFetch,
    headers: {
      Authorization: `Bearer `,
      "Accept-Encoding": "gzip, deflate, br",
      "Transfer-Encoding": "chunked",
      "Content-Type": "application/json; charset=utf-8",
      Connection: "keep-alive",
      Accept: "*/*"
    }
  });
}

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path, extensions }, index) =>
      console.log(
        JSON.stringify(
          `[${index++}]: \n [Message]: ${message}, \n [Location]: ${locations}, \n [Path]: ${path}, \n [Extension]: ${extensions}`,
          null,
          2
        )
      )
    );
  if (networkError)
    console.log(
      JSON.stringify(
        `[Network error]: Next is unreachable... \n
          [name]: ${networkError.name} \n
          [message]: ${networkError.message} \n
          [stack]: ${networkError.stack}`,
        null,
        2
      )
    );
});

const isBrowser = typeof window !== "undefined";
export const sessionMiddleware = new ApolloLink((operation, forward) => {
  // if session exists in LS, set value as session header
  const token = isBrowser ? window.localStorage.getItem("Authorization") : "";
  if (token) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`
      }
    }));
  }
  return forward(operation);
});

export const sessionAfterware = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    // catches incoming session token to store in LS
    // check for session header & update session in LS accordingly
    const context = operation.getContext();
    const {
      response: { headers }
    } = context;
    const session = headers.get("Authorization");
    if (session && isBrowser) {
      if (window.localStorage.getItem("Authorization") !== session) {
        isBrowser && window.localStorage.removeItem("Authorization");
        window.localStorage.setItem(
          "Authorization",
          headers.get("Authorization")
        );
      }
    }
    return response;
  });
});

// SubmitGravityFormMutation, GetGravityFormQuery, loginMutation, ContentNodeByPathQuery, ContentNodePathsQuery, GravityPostTypeQuery, GravityPostTypePathsQuery
// // under construction
// export const nextSesh = new ApolloLink((operation, forward) => {
//   return forward(operation).map(response => {
//     // parses incoming session token to store in LS
//     // check for session header & update session in LS accordingly
//     // const context = operation.getContext();
//     // const jsonStringContext = JSON.stringify(context ?? "no context", null, 2)
//     // console.log(context ?? {});

//     // const header = req?.headers.authorization?.split(/([ ])/)[1];
//     const { data, context, errors, extensions } = response as FetchResult<
//     SubmitGravityFormMutation,
//       Record<string, any>,
//       Record<string, any>
//     >;

//     console.log("context: " + context ?? "no context");
//     console.log("errors: " + errors ?? "no errors");
//     console.log("extensions: " + extensions ?? "no extensions");
//     const session = (data as SubmitGravityFormMutation).submitGfForm;
//     if (session?.entry?.formDatabaseId && !!browser) {
//       if (
//         window.localStorage.getItem("authorization") !==
//         session.auth.accessToken
//       ) {
//         browser && window.localStorage.removeItem("authorization");
//         window.localStorage.setItem(
//           "authorization",
//           session.auth.accessToken
//         );
//       }
//     }
//     // if (data?.signin.auth?.accessToken) {

//     //   res?.setHeader("authorization", ("Bearer "+data.signin.auth.accessToken).trim())
//     // } else if (header != null) {
//     //   res?.setHeader("authorization", ("Bearer "+header).trim())

//     // }
//     const jsonString = JSON.stringify(
//       (response as unknown as FetchResult<
//         signInUserMutation | unknown,
//         Record<string, any>,
//         Record<string, any>
//       >) ?? "no res",
//       null,
//       2
//     );
//     console.log("response: " + jsonString ?? "no response");
//     return response;
//   });
// });
