import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Reef Matson's portfolio site" />
        <link rel="manifest" href="/manifest.json" />

        {/* Facebook meta tags */}
        <meta property="og:title" content="Reef Matson" />
        <meta
          property="og:description"
          content="Reef Matson's portfolio site"
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://reefmatson.com" />

        {/* Twitter meta tags */}
        <meta name="twitter:title" content="Reef Matson" />
        <meta
          name="twitter:description"
          content="Reef Matson's portfolio site"
        />
        <meta name="twitter:url" content="https://reefmatson.com" />
        <meta name="twitter:card" content="Reef Matson's portfolio site" />

        {/* favicons */}
        <link rel="shortcut icon" href="/images/logo.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
