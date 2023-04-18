import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@/src/stores/context';
import Layout from '../components/Layout';

function NiuZiApp({ Component, pageProps }:AppProps) {
  console.log('pageProps', pageProps);
  return (
    <UserProvider initialUser={pageProps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
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
    name = res.name;
  } else {
    console.log('getInitialProps running on server');
  }
  return {
    pageProps: {
      name,
    },
  };
};

export default NiuZiApp;
