import '@/styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import { UserProvider } from '@/src/stores/context';
import { NextPageContext } from 'next';
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

NiuZiApp.getInitialProps = async ({ ctx }:AppContext) => {
  let name;
  if (ctx.req?.cookies.id) {
    const { id } = ctx.req.cookies;
    console.log('App getInitialProps', id);
    if (typeof window === 'undefined') {
      console.log('getInitialProps running on client');
      name = await fetch(`http://localhost:3000/api/getRedis?id=${id}&t=${Date().valueOf()}`);
      const res = await name.json();
      console.log('result', res);
      name = res.name;
    } else {
      console.log('getInitialProps running on server');
    }
  } else {
    name = undefined;
  }

  return {
    pageProps: {
      name,
    },
  };
};

export default NiuZiApp;
