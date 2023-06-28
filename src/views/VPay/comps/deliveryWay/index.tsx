import React from 'react';
import SelectItem from '@/src/components/selectItem';
import classes from './deliveryWay.module.scss';

type Props = {
  totalWeight: number;
}

const DeliveryWay:React.FC<Props> = ({ totalWeight }) => {
  const handleClick = () => {
    console.log('');
  };
  const psWayClasses = {
    root: classes.psWayClasses,
  };
  return (
    <div className={classes.root}>
      <div className={classes.psHead}>
        <h4 className={classes.psTit}>配送方式</h4>
        <div className={classes.psWay}>
          <SelectItem onClick={handleClick} classes={psWayClasses} isSelected>京东快递</SelectItem>
          <SelectItem onClick={handleClick} classes={psWayClasses}>上门自提</SelectItem>
        </div>
        <div className={classes.ygTime}>
          <span className={classes.ygTit}>标&nbsp;&nbsp;准&nbsp;&nbsp;达：</span>
          <span className={classes.ygVal}>预计&nbsp;time&nbsp;送达</span>
          <span className={classes.ygOpt}>修改</span>
        </div>
      </div>
      <div className={classes.psFloot}>
        <div className={`${classes.hr} ${classes.dgColor}`} />
        <div className={classes.weight}>
          <h4 className={classes.psTit}>总重量：</h4>
          <span className={classes.weightVal}>{`${totalWeight} kg`}</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryWay;
