import '@/styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import { UserProvider } from '@/src/stores/context';
import NzBtn from '@/src/components/NzBtn';
import Layout from '../components/Layout';

function NiuZiApp({ Component, pageProps }:AppProps) {
  return (
    <UserProvider initialUser={pageProps}>
      <Layout>
        <Component {...pageProps} />
        <NzBtn isOpen />
      </Layout>
    </UserProvider>
  );
}

NiuZiApp.getInitialProps = async ({ ctx }:AppContext) => {
  let name;
  // @ts-ignore
  if (ctx.req?.cookies.id) {
    // @ts-ignore
    const { id } = ctx.req.cookies;
    if (typeof window === 'undefined') {
      name = await fetch(`http://localhost:3000/api/getRedis?id=${id}&t=${Date().valueOf()}`);
      const res = await name.json();
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
