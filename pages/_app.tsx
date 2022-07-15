import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import '../styles/antd.less';
import '../styles/globals.less';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
