import React from 'react';
import classes from './payCheckout.module.scss';

const PayCheckout:React.FC = () => (
  <div className={classes.root}>
    <span className={classes.title}>填写并核对订单信息</span>
    <div className={classes.checkout}>
      <div className={classes.checkBox}>
        <span className={classes.checktitle}>收货人信息</span>
        <div className={classes.checkInfo}>
          <div className={classes.consignee}>夏亚</div>
          <div className={classes.address}>
            湖南 长沙市 岳麓区 坪塘街道 岳麓大道569号湖南工商大学贤德10栋
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PayCheckout;
