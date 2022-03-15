import "../styles/index.css";

import { AppProps, NextWebVitalsMetric } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "@/components/Head";
import NextSEO from "@/lib/next-seo";
// import { ApolloProviderProps, ApolloProvider } from "@apollo/client/react/context";

export default function HeadlessWordPressNext({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <>
      <Head nextSeoProps={NextSEO} />
      <Component {...pageProps} />
    </>
  )
}
