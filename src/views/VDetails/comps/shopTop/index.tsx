import React from 'react';
import globalClass from '@/styles/global.module.scss';
import classes from './shopTop.module.scss';

const ShopTop:React.FC = () => (
  <div className={classes.root}>
    <div className={globalClass.w}>
      <div className={classes.top}>
        <div className={classes.shopName}>
          <span>小米京东自营旗舰店</span>
          <button className={classes.concern}>关注</button>
        </div>
        <div className={classes.popularize}>
          <img src="/phoneImgs/mi13u.png" alt="店招" />
          <img src="/phoneImgs/mi13.png" alt="店招" />
        </div>
      </div>
    </div>
  </div>
);

export default ShopTop;
