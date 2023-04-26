import React from 'react';
import { nanoid } from 'nanoid';
import MoreBtn from '@/src/views/VSearch/comps/moreBtn';
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
      <MoreBtn />
    </div>
  </div>
);

export default AttrCategory;
