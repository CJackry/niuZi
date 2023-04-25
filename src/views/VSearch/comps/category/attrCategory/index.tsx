import React from 'react';
import { nanoid } from 'nanoid';
import classes from './attrCategory.module.scss';

type Props = {
    cateName:string,
    cateValueList:Array<string>,
}
const AttrCategory:React.FC<Props> = ({ cateName, cateValueList }) => (
  <div className={classes.category}>
    <div className={classes.attrKey}>
      <span>{cateName}</span>
    </div>
    <div className={classes.categoryValue}>
      <div className={classes.valueList}>
        {cateValueList.map((cateValue) => (
          <li key={nanoid()}>{cateValue}</li>
        ))}
      </div>
      <div className={classes.valueMore}>
        <div className={classes.moreBtn}>
          <span className={classes.more}>更多👇</span>
        </div>
        <div className={classes.moreBtn}>
          <span className={classes.mutilSelect}>多选+</span>
        </div>
      </div>
    </div>
  </div>
);

export default AttrCategory;
