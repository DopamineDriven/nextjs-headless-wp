import "../styles/index.css";

import cn from "classnames";
import { AppProps, NextWebVitalsMetric } from "next/app";
import { ComponentType, FC, HTMLAttributes, useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/utils/analytics";
import Head from "@/components/Head";
import { LinkProps } from "next/link";
import NextSEO from "@/lib/next-seo";
import Script from "next/script";
import { useApollo } from "@/apollo/apollo";
import {
  ApolloProvider
} from "@apollo/client/react/context";

export const Noop: FC = ({ children }) => <>{children}</>;
export interface HandleRouteChangeExtended<T extends (url: URL) => ReturnType<T>> {
  shallow: LinkProps["shallow"];
}
export const Page: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => (
  <main
    {...props}
    className={cn("w-full max-w-3xl font-interVar mx-auto py-16", className)}>
    {children}
  </main>
);

export type LinkPropsMapped<T extends keyof LinkProps> = {
  [P in T]: LinkProps[P];
};

export type RouterPropsMapped<K extends keyof ReturnType<typeof useRouter>> = {
  [L in K]: ReturnType<typeof useRouter>[L];
};

export function getLayout<LP extends {}>(
  Component: ComponentType<any>
): ComponentType<LP> {
  return (Component as any).Layout || Noop;
}

export default function HeadlessWordPressNext<P = Record<string, unknown>>({
  pageProps,
  Component
}: AppProps<P>) {
  const LayoutGlobal = getLayout<any>(Component);

  const router = useRouter();

  const apolloClient = useApollo(pageProps);

  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  useEffect(() => {
    const isProd = process.env.NODE_ENV === "production";
    const handleRouteChange = <P extends URL>(
      url: P,
      shallow: HandleRouteChangeExtended<typeof gtag.pageview>["shallow"]
    ) => {
      if (!isProd) {
        console.log(
          `App is changing to ${url} ${
            shallow ? "with" : "without"
          } shallow routing`
        );
      }
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        id={gtag.GA_TRACKING_ID}
        data-test={gtag.GA_TRACKING_ID}
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy='afterInteractive'
        id='gtag-init'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
         `
        }}
      />
          <Head nextSeoProps={NextSEO} />

      <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
// real-time GA4 reporting
export function reportGAVitals({
  id,
  name,
  label,
  startTime,
  value
}: NextWebVitalsMetric) {
  if (typeof window !== "undefined")
    window.gtag("event", name, {
      event_category:
        label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
      value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      non_interaction: true // avoids affecting bounce rate.
      });
}

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  if (typeof window !== "undefined")
    switch (metric.name) {
      case "FCP":
        console.log(JSON.stringify(`[FCP]: ${metric}`, null, 2));
        break;
      case "LCP":
        console.log(JSON.stringify(`[LCP]: ${metric}`, null, 2));
        break;
      case "CLS":
        console.log(JSON.stringify(`[CLS]: ${metric}`, null, 2));
        break;
      case "FID":
        console.log(JSON.stringify(`[FID]: ${metric}`, null, 2));
        break;
      case "TTFB":
        console.log(JSON.stringify(`[TTFB]: ${metric}`, null, 2));
        break;
      default:
        return;
    }
}
