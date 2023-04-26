import React from 'react';
import classes from './moreBtn.module.scss';

const MoreBtn:React.FC = () => (
  <div className={classes.valueMore}>
    <div className={classes.moreBtn}>
      <span className={classes.more}>更多👇</span>
    </div>
    <div className={classes.moreBtn}>
      <span className={classes.mutilSelect}>多选+</span>
    </div>
  </div>
);

export default MoreBtn;
