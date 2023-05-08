import React from 'react';
import { CartInfo } from '@/src/views/VCart/interface';
import Link from 'next/link';
import GoodLim from '@/src/views/VCart/comps/goodLim';
import classes from './cartItem.module.scss';

type Props = {
  cartInfo: CartInfo,
}

const CartItem:React.FC<Props> = ({ cartInfo }) => {
  const numChange = () => {
    console.log('numChange');
  };
  return (
    <div className={classes.root}>
      <input className={classes.checkOpt} type="checkbox" />
      <div className={classes.good}>
        <div className={classes.goodCell1}>
          <a href="https://jd.com" className={classes.goodImg}>
            <img src={cartInfo.imgSrc} alt={cartInfo.title} />
          </a>
          <div className={classes.goodIntro}>
            <span className={classes.goodTit}>{cartInfo.title}</span>
            <span className={classes.goodServer}>选服务</span>
          </div>
        </div>
        <div className={classes.goodAttrs}>
          {cartInfo.attrs.map((attr) => (
            <span key={attr.id}>{attr.name}</span>
          ))}
        </div>
        <div className={classes.goodPrice}>
          <span className={classes.goodPriceCount}>{`￥${cartInfo.price}`}</span>
          <GoodLim isLimit isReduce reducePrice={800} />
        </div>
        <div className={classes.quantity}>
          <div className={classes.numChange}>
            <button className={classes.quantityChange}>-</button>
            <input className={classes.count} value={1} onChange={numChange} />
            <button className={classes.quantityChange}>+</button>
          </div>
          <span className={classes.isEnough}>有货</span>
        </div>
        <strong className={classes.sum}>{(Number(cartInfo.price) * cartInfo.amount).toFixed(2)}</strong>
        <div className={classes.options}>
          <Link href="https://jd.com">删除</Link>
          <Link href="https://jd.com">移入关注</Link>
        </div>
      </div>
      <div className={classes.gifts}>
        {cartInfo.gifts.map((gift) => (
          <div className={classes.giftInfo} key={gift.id}>
            <Link href="https://jd.com" className={classes.giftTit}>{`【赠品】${gift.name}`}</Link>
            <span className={classes.giftNum}>X1</span>
            <Link href="https://jd.com" className={classes.priceView}>查看价格</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
