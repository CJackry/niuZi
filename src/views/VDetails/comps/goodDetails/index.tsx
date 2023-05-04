import React from 'react';
import { GoodInfo } from '@/src/views/VDetails/interface';
import classes from './goodDetails.module.scss';
import GoodPrice from './comps/goodPrice';

type Props = {
    goodInfo: GoodInfo,
}

const GoodDetails:React.FC<Props> = ({ goodInfo }) => {
  const goodTit = goodInfo.title + goodInfo.attr[0].attrName + goodInfo.attr[0].color[0].name;
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <span className={classes.specialTag}>门店有售</span>
        <span className={classes.title}>{goodTit}</span>
      </div>
      <GoodPrice price="4999.00" gifts={goodInfo.gifts} />
      <div className={classes.cates}>
        <span className={classes.cateName}>增值业务</span>
        <span className={classes.huishou}>高价回收，急速到账</span>
      </div>
      <div className={classes.cates}>
        <span className={classes.cateName}>配送至</span>
        <div className={classes.logistics}>
          <div className={classes.addrInfo}>
            <span className={classes.huishou}>湖南长沙市岳麓区</span>
            <span>有货</span>
          </div>
          <div className={classes.logisInfo}>
            <div className={classes.logisServer}>
              <div className={classes.logisIcon} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GoodDetails;
