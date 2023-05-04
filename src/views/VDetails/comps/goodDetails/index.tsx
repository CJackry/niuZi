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
    </div>
  );
};

export default GoodDetails;
