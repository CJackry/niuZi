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
      <div className={classes.cate}>
        <span className={classes.cateName}>增值业务</span>
        <div className={classes.cateVal}>
          <span className={classes.huishou}>高价回收，急速到账</span>
        </div>
      </div>
      <div className={classes.cate}>
        <span className={classes.cateName}>配送至</span>
        <div className={classes.cateVal}>
          <div className={classes.addrInfo}>
            <div className={classes.addr}>湖南长沙市岳麓区</div>
          </div>
          <strong className={classes.isEnough}>有货</strong>
          <div className={classes.serverCate}>
            <span className={classes.support}>支持</span>
            <div className={classes.serverOpt}>
              <span>可配送全球</span>
              <span>99元免基础运费</span>
              <span>免举证退换货</span>
              <span>365天原厂维修</span>
            </div>
          </div>
          <div className={classes.logisServer}>
            <div className={classes.logisIcon} />
            <div className={classes.serverOpt}>
              <span>次日达</span>
              <span>预约送货</span>
              <span>部分收货</span>
              <span>送货上门</span>
            </div>
            <h4 className={classes.logisIll}>
              由
              <span>京东</span>
              发货并提供售后服务，预计
              <span>明天（05月06日）送达</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodDetails;
