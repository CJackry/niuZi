import React from 'react';
import SelectItem from '@/src/components/selectItem';
import classes from './deliveryWay.module.scss';

type Props = {
  totalWeight: number;
  delivery: string;
  onChange?: (delivery: string) => void;
}

const DeliveryWay:React.FC<Props> = ({ totalWeight, delivery, onChange }) => {
  const handleClick = (d: string) => {
    if (onChange) onChange(d);
  };
  const psWayClasses = {
    root: classes.psWayClasses,
  };
  return (
    <div className={classes.root}>
      <div className={classes.psHead}>
        <h4 className={classes.psTit}>配送方式</h4>
        <div className={classes.psWay}>
          <SelectItem
            onClick={() => handleClick('京东快递')}
            classes={psWayClasses}
            isSelected={delivery === '京东快递'}
          >
            京东快递
          </SelectItem>
          <SelectItem
            onClick={() => handleClick('上门自提')}
            classes={psWayClasses}
            isSelected={delivery === '上门自提'}
          >
            上门自提
          </SelectItem>
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
