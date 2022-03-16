import "../styles/index.css";

import { AppProps, NextWebVitalsMetric } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/utils/analytics";
import Head from "@/components/Head";
import { LinkProps } from "next/link";
import NextSEO from "@/lib/next-seo";
import Script from "next/script";
// import { ApolloProviderProps, ApolloProvider } from "@apollo/client/react/context";

export interface HandleRouteChangeExtended<T extends (url: URL) => void> {
  shallow: LinkProps["shallow"];
}

export default function HeadlessWordPressNext({
  Component,
  pageProps
}: AppProps) {
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);
  const router = useRouter();

  useEffect(() => {
    const isProd = process.env.NODE_ENV === "production";
    const handleRouteChange = (
      url: URL,
      { shallow }: HandleRouteChangeExtended<typeof gtag.pageview>
    ) => {
      if (isProd) gtag.pageview(url);
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
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
      <Component {...pageProps} />
    </>
  );
}
// real-time GA4 reporting
export function reportGAVitals({
  id,
  name,
  label,
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
