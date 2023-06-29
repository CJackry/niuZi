import React from 'react';
import global from '@/styles/global.module.scss';
import PayLayout from '@/src/views/VPay/comps/payLayout';
import PayCheckout from '@/src/views/VPay/comps/payCheckout';
import classes from './VPay.module.scss';

const VPay:React.FC = () => (
  <div className={classes.root}>
    <div className={global.w}>
      <PayLayout>
        <PayCheckout />
      </PayLayout>
    </div>
  </div>
);

export default VPay;
