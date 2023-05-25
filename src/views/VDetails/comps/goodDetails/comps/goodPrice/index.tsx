import React from 'react';
import { nanoid } from 'nanoid';
import { Gift } from '@/src/views/VDetails/interface';
import classes from './goodPrice.module.scss';

type Props = {
    price: number,
    gifts: Array<Gift>
}

const GoodPrice:React.FC<Props> = ({ price, gifts }) => (
  <div className={classes.root}>
    <div className={classes.priceInfo}>
      <span className={classes.priceCate}>京东价</span>
      <span className={classes.currency}>￥</span>
      <span className={classes.price}>{price}</span>
      <span className={classes.inform}>降价通知</span>
    </div>
    <div className={classes.pref}>
      <span className={classes.priceCate}>促销</span>
      <span className={classes.specialTag}>赠品</span>
      <div className={classes.gifts}>
        {gifts.map((g) => (
          <a className={classes.giftInfo} href="https://jd.com" key={nanoid()}>
            <img src={g.imgSrc ? g.imgSrc : '/avatar.png'} alt="gift" />
            <span className={classes.giftNum}>x 1</span>
          </a>
        ))}
        <span>(赠完即止)</span>
      </div>
    </div>
  </div>
);

export default GoodPrice;
