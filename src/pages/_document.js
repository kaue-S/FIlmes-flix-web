import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
      <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="PetShop" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Séries Flix" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
     
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
