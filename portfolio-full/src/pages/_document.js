import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Diego França - Dev</title>
          <meta name="author" content="Diego França" />
          <meta
            name="keywords"
            content="Diego, França, site, pessoal, social, redes sociais, profissional, currículo, curriculum, vitae, desenvolvedor, web, front-end, full-stack, back-end, professor, consultor, ti"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/images/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/images/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/images/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/assets/images/favicon/site.webmanifest" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-2T345556NZ`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-2T345556NZ', {
                                page_path: window.location.pathname,
                                });
                            `,
            }}
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

export default MyDocument;
