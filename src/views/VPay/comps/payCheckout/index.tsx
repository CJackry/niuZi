import React from 'react';
import { addrList } from '@/src/utils/fakeData';
import ShippingSelect from './comps/shippingSelect';
import classes from './payCheckout.module.scss';

const PayCheckout:React.FC = () => (
  <div className={classes.root}>
    <span className={classes.title}>填写并核对订单信息</span>
    <div className={classes.checkout}>
      <div className={classes.checkBox}>
        <span className={classes.checkTitle}>
          <h5>收货人信息</h5>
          <span>新增收货地址</span>
        </span>
        <ShippingSelect addrList={addrList} />
      </div>
    </div>
  </div>
);

export default PayCheckout;
