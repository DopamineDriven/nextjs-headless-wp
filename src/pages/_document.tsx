import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from "next/document";

export default class HeadlessWpNextjs extends Document<DocumentInitialProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await super.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link href='/meta/favicon.ico' rel='shortcut icon' />
          <link href='/meta/site.webmanifest' rel='manifest' />
          <link
            rel='apple-icon-precomposed'
            sizes='180x180'
            href='/meta/apple-icon-precomposed.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/meta/favicon-16x16.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/meta/favicon-32x32.png'
          />
          <link
            rel='mask-icon'
            href='/meta/safari-pinned-tab.svg'
            color='#5bbad5'
          />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
          <meta
            name='msapplication-config'
            content='/meta/browserconfig.xml'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
