import React from 'react';
import { useCartContext } from '@/src/stores/cartContext';
import Link from 'next/link';
import classes from './myCartComp.module.scss';

const MyCartComp:React.FC = () => {
  const { store: { total } } = useCartContext();
  return (
    <Link href="/cart" className={classes.myCartCar}>
      <i className={classes.iconfont}>&#xe70b;</i>
      <span className={classes.cartNum}>{total}</span>
      <span>我的购物车</span>
    </Link>
  );
};

export default MyCartComp;
