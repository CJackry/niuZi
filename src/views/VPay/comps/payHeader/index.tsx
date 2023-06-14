import React from 'react';
import classes from './payHeader.module.scss';

const PayHeader:React.FC = () => (
  <div className={classes.root}>
    <div className={classes.logo}>
      <img src="/jd_logo.png" alt="jd" />
      <span>结算页</span>
    </div>
  </div>
);

export default PayHeader;
