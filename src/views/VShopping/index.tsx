import React from 'react';
import global from '@/styles/global.module.scss';
import PayLayout from '@/src/views/VShopping/comps/payLayout';
import PayCheckout from '@/src/views/VShopping/comps/payCheckout';
import classes from './VShopping.module.scss';

const VShopping:React.FC = () => (
  <div className={classes.root}>
    <div className={global.w}>
      <PayLayout>
        <PayCheckout />
      </PayLayout>
    </div>
  </div>
);

export default VShopping;
