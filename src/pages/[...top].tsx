import type {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType
} from "next";
import {
  ContentNodeIdTypeEnum,
  ContentNodePaths,
  ContentNodePathsQuery,
  ContentNodePathsQueryVariables,
  ContentTypeEnum,
  ContentNodeClient,
  ContentNodeClientQuery,
  ContentNodeClientQueryVariables,
  useContentNodeClientLazyQuery,
  OrderEnum,
  PostObjectsConnectionOrderbyEnum,
  PostStatusEnum,
  ContentNodeByPathQuery,
  ContentNodeByPathQueryVariables,
  ContentNodeByPath
} from "@/graphql/generated/graphql";
import type { ParsedUrlQuery } from "@/types/query-parser";
import { useRouter } from "next/router";
import { initializeApollo, addApolloState } from "@/apollo/apollo";
import { pathDeduplication } from "@/lib/path-deduplication";
import { UnwrapPromise } from "@/types/helpers";
import { LoadingSpinner, Inspector } from "@/components/UI";
import archer from "../../public/archer.gif";
import Image from "next/image";
import { ShimmerEffect } from "@/lib/shimmer";

export interface TopLevelCatchAllContentNodesProps {
  contentNode: ContentNodeByPathQuery;
  slug: string;
}

const apolloClientTop = initializeApollo();

export const getStaticPaths = async ({
  defaultLocale,
  locales
}: GetStaticPathsContext): Promise<GetStaticPathsResult<ParsedUrlQuery>> => {
  const { data: topNodePaths } = await apolloClientTop.query<
    ContentNodePathsQuery,
    ContentNodePathsQueryVariables
  >({
    query: ContentNodePaths,
    notifyOnNetworkStatusChange: true,
    variables: {
      fieldOrderBy: PostObjectsConnectionOrderbyEnum.MODIFIED,
      orderOrderBy: OrderEnum.DESC,
      first: 50,
      contentTypes: [
        ContentTypeEnum.ATTACHMENT,
        ContentTypeEnum.GRAVITY,
        ContentTypeEnum.PAGE,
        ContentTypeEnum.POST
      ],
      status: PostStatusEnum.PUBLISH
      // parentIn: [null] // top level
    }
  });
  return {
    paths: locales
      ? locales.reduce<Array<string>>((paths, locale) => {
          topNodePaths.contentNodes?.nodes?.forEach(path => {
            path?.__typename === "Gform" &&
            path.slug != null &&
            !pathDeduplication.includes(path.slug)
              ? paths.push(`/${locale}/${path.slug}`)
              : path?.__typename === "MediaItem" &&
                path.slug != null &&
                !pathDeduplication.includes(path.slug)
              ? paths.push(`/${locale}/${path.slug}`)
              : path?.__typename === "Page" &&
                path.slug != null &&
                !pathDeduplication.includes(path.slug)
              ? paths.push(`/${locale}/${path.slug}`)
              : path?.__typename === "Post" &&
                path.slug != null &&
                !pathDeduplication.includes(path.slug)
              ? paths.push(`/${locale}/${path.slug}`)
              : paths.push(`/${locale}/`);
          });
          return paths;
        }, [])
      : topNodePaths.contentNodes?.nodes
      ? topNodePaths.contentNodes.nodes.map(path =>
          path?.__typename === "Gform" &&
          path.slug != null &&
          !pathDeduplication.includes(path.slug)
            ? `/${defaultLocale}/${path.slug}`
            : path?.__typename === "MediaItem" &&
              path.slug != null &&
              !pathDeduplication.includes(path.slug)
            ? `/${defaultLocale}/${path.slug}`
            : path?.__typename === "Page" &&
              path.slug != null &&
              !pathDeduplication.includes(path.slug)
            ? `/${defaultLocale}/${path.slug}`
            : path?.__typename === "Post" &&
              path.slug != null &&
              !pathDeduplication.includes(path.slug)
            ? `/${defaultLocale}/${path.slug}`
            : `/${defaultLocale}/`
        )
      : [`/${defaultLocale}/`],
    fallback: true
  };
};

export const getStaticProps = async (
  ctx: GetStaticPropsContext<ParsedUrlQuery>
): Promise<GetStaticPropsResult<TopLevelCatchAllContentNodesProps>> => {
  const top = ctx.params ? (ctx.params.top as string | string[]) : "";
  console.log(top ?? "");
  const { data: contentNode } = await apolloClientTop.query<
    ContentNodeByPathQuery,
    ContentNodeByPathQueryVariables
  >({
    query: ContentNodeByPath,
    variables: {
      id: top[0],
      idType: ContentNodeIdTypeEnum.URI,
      asPreview: ctx.preview,
      contentType:
        ContentTypeEnum.ATTACHMENT ||
        ContentTypeEnum.GRAVITY ||
        ContentTypeEnum.PAGE ||
        ContentTypeEnum.POST
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-first"
  });

  return addApolloState(apolloClientTop, {
    props: {
      contentNode,
      slug: top[0]
    },
    revalidate: 600
  });
};

export default function TopLevelCatchAllContentNodes<
  T extends typeof getStaticProps
>({ contentNode, slug: serverSlug }: InferGetStaticPropsType<T>) {
  const router = useRouter();

  const isomorphicSlug =
    typeof window === "undefined" ? serverSlug : (router.query.top as string);

  return (
    <>
      {router.isFallback === true ? (
        <>
          <LoadingSpinner />
        </>
      ) : contentNode.contentNode?.slug?.includes(isomorphicSlug) &&
        contentNode.contentNode.__typename === "MediaItem" ? (
        <>
          <div className='relative origin-center my-12 mx-auto w-full right-1/3'>
            <Image
              className='object-center object-cover absolute'
              src={
                contentNode?.contentNode?.sourceUrl
                  ? contentNode.contentNode.sourceUrl
                  : archer.src
              }
              width={
                contentNode.contentNode.mediaDetails?.width
                  ? contentNode.contentNode.mediaDetails.width
                  : archer.width
              }
              height={
                contentNode.contentNode?.mediaDetails?.height
                  ? contentNode.contentNode.mediaDetails.height
                  : archer.height
              }
              quality={100}
              blurDataURL={ShimmerEffect({
                w: contentNode.contentNode.mediaDetails?.width
                  ? contentNode.contentNode.mediaDetails.width
                  : archer.width,
                h: contentNode.contentNode.mediaDetails?.height
                  ? contentNode.contentNode.mediaDetails.height
                  : archer.height
              })}
              placeholder='blur'
              id={contentNode.contentNode.id}
              alt={
                contentNode.contentNode?.altText
                  ? contentNode.contentNode.altText
                  : `Alt Text for Path ${isomorphicSlug}`
              }
              layout='responsive'
              objectFit='cover'
            />
          </div>
          <Inspector>
            {JSON.stringify(
              { ...contentNode.contentNode } ?? "no contentNode :(",
              null,
              2
            )}
          </Inspector>
        </>
      ) : (
        <Inspector>
          {JSON.stringify(
            {
              contentNode
            } ?? "no contentNode :(",
            null,
            2
          )}
        </Inspector>
      )}
    </>
  );
}
