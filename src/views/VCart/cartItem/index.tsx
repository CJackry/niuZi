import React from 'react';
import { CartInfo } from '@/src/views/VCart/interface';
import classes from './cartItem.module.scss';

type Props = {
  cartInfo: CartInfo,
}

const CartItem:React.FC<Props> = ({ cartInfo }) => (
  <div className={classes.root}>
    <input type="checkbox" />
    <div className={classes.good}>
      <img src={cartInfo.imgSrc} alt={cartInfo.title} />
      <div className={classes.goodIntro}>
        <span className={classes.goodTit}>{cartInfo.title}</span>
        <span className={classes.goodServer}>选服务</span>
      </div>
    </div>
  </div>
);

export default CartItem;
