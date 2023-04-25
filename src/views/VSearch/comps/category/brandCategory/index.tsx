import React from 'react';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import classes from './brandCategory.module.scss';

const BrandCategory:React.FC = () => {
  const initialVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={classes.brand}>
      <div className={classes.attrKey}>
        <span>品牌：</span>
      </div>
      <div className={classes.b_valueList}>
        {initialVal.map((i) => (
          <li className={classes.brandImg} key={nanoid()}>
            <Link href="https://jd.com">
              <img src="/brandImgs/Apple.png" alt="apple" />
              <span>
                Apple
                {i}
              </span>
            </Link>
          </li>
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
  );
};

export default BrandCategory;
