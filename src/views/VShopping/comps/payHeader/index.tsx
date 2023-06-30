import React from 'react';

import { taskStatusArray } from '@/src/utils/fakeData';
import TaskProgress from '../taskProgress';
import classes from './payHeader.module.scss';

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
