import React from 'react';
import PayHeader from '@/src/views/VPay/comps/payHeader';
import PayCheckout from '@/src/views/VPay/comps/payCheckout';
import global from '@/styles/global.module.scss';
import classes from './VPay.module.scss';

const VPay:React.FC = () => {
  console.log('VPay');
  return (
    <div className={classes.root}>
      <div className={global.w}>
        <PayHeader />
        <PayCheckout />
      </div>
    </div>
  );
};

export default VPay;
