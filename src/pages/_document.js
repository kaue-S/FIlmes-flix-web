import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
      <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Filmes flix" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Séries Flix" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link
          rel="shortcut icon"
          href="/images/logotipo.png"
          type="image/png"
          sizes="256x256"
        />
        <meta name="author" content="Kauê Evangelista" />
      </Head>
     
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
