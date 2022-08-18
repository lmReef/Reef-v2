import '../styles/index.scss';

import type { AppProps } from 'next/app';

// TODO: add head
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
