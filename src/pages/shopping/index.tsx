import React from 'react';
import { PayProvider } from '@/src/stores/payContext';
import { defaultPayInfo } from '@/src/utils/fakeData';
import { useCartContext } from '@/src/stores/cartContext';
import VShopping from '../../views/VShopping';

const Shopping:React.FC = () => {
  const { store: { cartList } } = useCartContext();
  const initialPayInfo = defaultPayInfo;
  const commodity = cartList ? cartList.filter((cart) => cart.isChecked) : [];
  initialPayInfo.commodity = commodity;
  initialPayInfo.price.totalPrice = commodity.reduce((prev, cart) => prev + (cart.price * cart.amount), 0) || 0;
  initialPayInfo.price.express = 50;
  // console.log(initialPayInfo);
  return (
    <PayProvider initialVal={{ payInfo: initialPayInfo }}>
      <VShopping />
    </PayProvider>
  );
};

export default Shopping;
