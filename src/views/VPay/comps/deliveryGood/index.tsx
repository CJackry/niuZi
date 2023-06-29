import React from 'react';
import Link from 'next/link';
import { priceToString } from '@/src/utils/commonFuns';
import { CartAttr } from '@/src/views/VDetails/interface';
import classes from './deliveryGood.module.scss';

type Props = {
    good: CartAttr;
}

const DeliveryGood:React.FC<Props> = ({ good }) => (
  <div className={classes.root}>
    <h4 className={classes.psTit}>商家: 京东自营</h4>
    <div className={classes.goodDetails}>
      <img src={good.imgSrc} alt="goodImg" />
      <div className={classes.goodDes}>
        <Link href="/details" className={classes.goodTit}>{good.title}</Link>
        <div className={classes.goodAttrs}>
          <h4 className={classes.psTit}>颜色：</h4>
          <span className={classes.attrVal}>{good.color}</span>
        </div>
        <div className={classes.goodAttrs}>
          <h4 className={classes.psTit}>版本：</h4>
          <span className={classes.attrVal}>{good.version}</span>
        </div>
        <div className={classes.afterSale}>
          支持七天无理由退货
        </div>
      </div>
      <div className={classes.goodVal}>
        <strong className={classes.goodPrice}>{`￥ ${priceToString(good.price)}`}</strong>
        <span className={classes.goodWeight}>{`${priceToString(good.weight)} kg`}</span>
      </div>
      <span className={classes.goodNum}>{`x ${good.amount}`}</span>
      <span className={classes.inventory}>有货</span>
    </div>
    {
          good.gifts ? good.gifts.map((gift) => (
            <div className={classes.gifts} key={gift.id}>
              <span className={classes.giftName}>{`${gift.name} x1`}</span>
              <Link href="/details">查看价格</Link>
            </div>
          )) : null
      }
  </div>
);

export default DeliveryGood;
