import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { parseCookies } from 'nookies';
import clientRequest from '@/src/utils/http-client';
import Layout from '../components/Layout';

function NiuZiApp({ Component, pageProps }:AppProps) {
  console.log('pageProps', pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

NiuZiApp.getInitialProps = async () => {
  const cookies = parseCookies();
  const { id } = cookies;
  console.log('App getInitialProps');
  let name;
  if (typeof window === 'undefined') {
    console.log('getInitialProps running on server');
    name = clientRequest({
      url: '/api/getRedis',
      params: { id },
      method: 'get',
    });
  } else {
    console.log('getInitialProps running on client');
  }
  console.log('name', name);
  return {
    pageProps: {
      name,
    },
  };
};

export default NiuZiApp;
