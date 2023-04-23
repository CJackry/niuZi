import React from 'react';
import Link from 'next/link';
import global from '@/styles/global.module.scss';
import classes from './VSearch.module.scss';

function VSearch() {
  return (
    <div className={classes.root}>
      <div className={global.w}>
        <div className={classes.topNav}>
          <Link href="https://jd.com">全部结果</Link>
          <span>{'>'}</span>
        </div>
        <div className={classes.attrNav}>
          <div className={classes.brand}>
            <div className={classes.attrKey}>
              <span>品牌：</span>
            </div>
            <div className={classes.valueList}>
              <div className={classes.brandImgs}>
                Brand img here
              </div>
            </div>
          </div>
          <div className={classes.category}>
            <div className={classes.attrKey}>
              <span>分类：</span>
            </div>
            <div className={classes.categoryValue}>
              <div className={classes.valueList}>
                <li>手机</li>
                <li>二手手机</li>
                <li>合约机</li>
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
        </div>
      </div>
    </div>
  );
}

export default VSearch;
