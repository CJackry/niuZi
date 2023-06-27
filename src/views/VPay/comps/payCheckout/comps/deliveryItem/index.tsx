import React from 'react';
import SelectItem from '@/src/components/selectItem';
import classes from './delivertItem.module.scss';

const DeliveryItem:React.FC = () => {
  const handleClick = () => {
    console.log('');
  };
  const psWayClasses = {
    root: classes.psWayClasses,
  };
  return (
    <div className={classes.root}>
      <div className={classes.ps}>
        <div className={classes.psHead}>
          <h4 className={classes.psTit}>配送方式</h4>
          <div className={classes.psWay}>
            <SelectItem onClick={handleClick} classes={psWayClasses}>京东快递</SelectItem>
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
            <span className={classes.weightVal}>0.300kg</span>
          </div>
        </div>
      </div>
      <div className={classes.good}>
        <h4 className={classes.psTit}>商家: 京东自营</h4>
        <div className={classes.goodDetails}>
          <img src="/jd_logo.png" alt="goodImg" />
          <div className={classes.goodDescript}>
            <span className={classes.goodTit}>返回奴家是你发送地方</span>
            <div className={classes.goodAttrs}>
              <h4 className={classes.psTit}>颜色：</h4>
              <span className={classes.attrVal}>觉得你撒娇看</span>
            </div>
            <div className={classes.afterSale}>
              支持七天无理由退货
            </div>
          </div>
          <div className={classes.goodVal}>
            <span className={classes.goodPrice}>￥ 499.00</span>
            <span className={classes.goodWeight}>0.300kg</span>
          </div>
          <span className={classes.goodNum}>x1</span>
          <span className={classes.inventory}>有货</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryItem;
