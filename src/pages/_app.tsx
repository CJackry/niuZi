import '@/styles/globals.css';
import type { AppContext, AppProps } from 'next/app';
import { UserProvider } from '@/src/stores/context';
import { CartProvider, CartState } from '@/src/stores/cartContext';
import Layout from '../components/Layout';

function NiuZiApp({ Component, pageProps }:AppProps) {
  const cartList: CartState = pageProps.cartList
    ? { cartList: pageProps.cartList, total: pageProps.cartList.length } : { cartList: [], total: 0 };
  return (
    <UserProvider initialUser={pageProps}>
      <CartProvider initialVal={cartList}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </UserProvider>
  );
}

NiuZiApp.getInitialProps = async ({ ctx }:AppContext) => {
  let name;
  let cartList;
  // @ts-ignore
  if (ctx.req?.cookies.id) {
    // @ts-ignore
    const { id } = ctx.req.cookies;
    if (typeof window === 'undefined') {
      name = await fetch(`http://localhost:8801/api/getRedis?id=${id}&t=${Date().valueOf()}`);
      const res = await name.json();
      name = res.name;
      const cartRes = await fetch(`http://localhost:8801/api/getRedis?id=${name}`);
      cartList = cartRes.status === 401 ? [] : await cartRes.json();
    } else {
      console.log('getInitialProps running on server');
    }
  } else {
    name = undefined;
  }
  console.log('getInitialProps', name, cartList);
  return {
    pageProps: {
      name,
      cartList,
    },
  };
};

export default NiuZiApp;
