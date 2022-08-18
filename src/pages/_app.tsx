import '../styles/index.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';

// TODO: add head
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Reef</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
