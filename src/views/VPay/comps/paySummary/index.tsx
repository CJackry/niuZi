import React from 'react';
import { phoneModal, priceToString } from '@/src/utils/commonFuns';
import { PaySummeryProps } from '@/src/views/VPay/interface';
import NzBtn from '@/src/components/NzBtn';
import classes from './paySummer.module.scss';

const PaySummary:React.FC<PaySummeryProps> = ({ paySum: { totalPrice, addrInfo, express } }) => {
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
          <span>总商品金额</span>
          <span>{totalPrice}</span>
        </div>
        <div className={classes.priceContent}>
          <span>运费</span>
          <span>{express}</span>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.priceSum}>
          <span>应付金额：</span>
          <strong>{`￥${priceToString(totalPrice + express)}`}</strong>
        </div>
        <div className={classes.addrInfo}>
          <span>{`寄送至： ${addrInfo.addr}`}</span>
          <span>{`收货人：${addrInfo.name} ${phoneModal(addrInfo.phone)}`}</span>
        </div>
      </div>
      <NzBtn classes={nzClasses} onClick={handleClick}>提交订单</NzBtn>
    </div>
  );
};

export default PaySummary;
