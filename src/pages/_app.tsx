import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

function NiuZiApp({ Component, pageProps }:AppProps) {
  console.log('pageProps', pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

NiuZiApp.getInitialProps = async ({ ctx }) => {
  const { id } = ctx.req.cookies;
  console.log('App getInitialProps', id);
  let name;
  if (typeof window === 'undefined') {
    console.log('getInitialProps running on client');
    name = await fetch(`http://localhost:3000/api/getRedis?id=${id}&t=${Date().valueOf()}`);
    const res = await name.json();
    console.log('result', res);
  } else {
    console.log('getInitialProps running on server');
  }
  return {
    name,
  };
};

export default NiuZiApp;
