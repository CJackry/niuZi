import React from 'react';
import { arrayToString, phoneModal, priceToString } from '@/src/utils/commonFuns';
import NzBtn from '@/src/components/NzBtn';
import { usePayContext } from '@/src/stores/payContext';
import { defaultPayInfo } from '@/src/utils/fakeData';
import { PayInfo } from '@/src/views/VPay/interface';
import classes from './paySummer.module.scss';

const PaySummary:React.FC = () => {
  const { store: { payInfo } } = usePayContext();
  const newPayInfo:PayInfo = payInfo || defaultPayInfo;
  const totalPrice = newPayInfo.commodity?.reduce((prev, cart) => prev + (cart.price * cart.amount), 0) || 0;
  const express = newPayInfo.price.express || 0;
  const addr = Object.values(newPayInfo.userInfo.address);
  const handleClick = () => {
    console.log('');
  };
  const nzClasses = {
    root: classes.nzClasses,
  };
  return (
    <div className={classes.root}>
      <div className={classes.priceDetails}>
        <div className={classes.priceContent}>
          <span>总商品金额：</span>
          <span>{`￥ ${priceToString(totalPrice)}`}</span>
        </div>
        <div className={classes.priceContent}>
          <span>运费：</span>
          <span>{`￥ ${priceToString(express)}`}</span>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.priceSum}>
          <span>应付金额：</span>
          <strong>{`￥ ${priceToString(totalPrice + express)}`}</strong>
        </div>
        <div className={classes.addrInfo}>
          <span>{`寄送至： ${arrayToString(addr)}`}</span>
          <span>{`收货人：${newPayInfo.userInfo.name} ${phoneModal(newPayInfo.userInfo.phone)}`}</span>
        </div>
      </div>
      <NzBtn classes={nzClasses} onClick={handleClick}>提交订单</NzBtn>
    </div>
  );
};

export default PaySummary;
