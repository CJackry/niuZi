import React from 'react';
import Link from 'next/link';
import classes from './deliveryGood.module.scss';

const DeliveryGood:React.FC = () => (
  <div className={classes.root}>
    <h4 className={classes.psTit}>商家: 京东自营</h4>
    <div className={classes.goodDetails}>
      <img src="/jd_logo.png" alt="goodImg" />
      <div className={classes.goodDes}>
        <Link href="/details" className={classes.goodTit}>返回奴家是你发送地方</Link>
        <div className={classes.goodAttrs}>
          <h4 className={classes.psTit}>颜色：</h4>
          <span className={classes.attrVal}>觉得你撒娇看</span>
        </div>
        <div className={classes.afterSale}>
          支持七天无理由退货
        </div>
      </div>
      <div className={classes.goodVal}>
        <span className={classes.goodPrice}>￥ 499.00</span>
        <span className={classes.goodWeight}>0.300kg</span>
      </div>
      <span className={classes.goodNum}>x1</span>
      <span className={classes.inventory}>有货</span>
    </div>
  </div>
);

export default DeliveryGood;
