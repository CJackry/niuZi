import React from 'react';
import TaskProgress from '@/src/views/VPay/comps/payHeader/comps/taskProgress';
import { DealStatus } from '@/src/views/VPay/comps/payHeader/comps/taskProgress/interface';
import classes from './payHeader.module.scss';

const taskStatusArray: Array<DealStatus> = [
  {
    name: '我的购物车',
    partNum: 1,
    isFinish: 'done',
  },
  {
    name: '填写核对订单信息',
    partNum: 2,
    isFinish: 'doing',
  },
  {
    name: '成功提交订单',
    partNum: 3,
    isFinish: 'incomplete',
  },
];

const PayHeader:React.FC = () => (
  <div className={classes.root}>
    <div className={classes.logo}>
      <img src="/NiuziLogo.png" alt="jd" />
      <span>结算页</span>
    </div>
    <TaskProgress taskStatusArray={taskStatusArray} />
  </div>
);

export default PayHeader;
