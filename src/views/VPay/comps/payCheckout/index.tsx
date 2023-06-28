import React from 'react';
import { addrList } from '@/src/utils/fakeData';
import SelectItem from '@/src/components/selectItem';
import DeliveryItem from '../deliveryItem';
import ShippingSelect from '../shippingSelect';
import classes from './payCheckout.module.scss';

const PayCheckout:React.FC = () => {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <div className={classes.root}>
      <span className={classes.title}>填写并核对订单信息</span>
      <div className={classes.checkout}>
        <div className={classes.checkBox}>
          <span className={classes.checkTitle}>
            <h5>收货人信息</h5>
            <span>新增收货地址</span>
          </span>
          <ShippingSelect addrList={addrList} />
          <div className={classes.hr} />
        </div>
        <div className={classes.checkBox}>
          <span className={classes.checkTitle}>
            <h5>支付方式</h5>
          </span>
          <div className={classes.payWay}>
            <SelectItem onClick={handleClick}>货到付款</SelectItem>
            <SelectItem onClick={handleClick}>在线支付</SelectItem>
            <i>更多</i>
          </div>
          <div className={classes.hr} />
        </div>
        <div className={classes.checkBox}>
          <span className={classes.checkTitle}>
            <h5>送货清单</h5>
            <span>返回修改购物车</span>
          </span>
          <DeliveryItem />
          <div className={classes.hr} />
        </div>
      </div>
    </div>
  );
};

export default PayCheckout;
