import React from 'react';
import VCart from '@/src/views/VCart';
import { CartProvider } from '@/src/stores/cartContext';
import { cartList } from '@/src/utils/fakeData';

const Cart:React.FC = () => (
  <CartProvider initialVal={{ cartList }}>
    <VCart />
  </CartProvider>
);

export default Cart;
