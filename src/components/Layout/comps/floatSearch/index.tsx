import React from 'react';
import Link from 'next/link';
import global from '@/styles/global.module.scss';
import classes from './floatSearch.module.scss';

const FloatSearch:React.FC = () => (
  <div className={classes.root}>
    <div className={`${global.w} ${classes.floatSearch}`}>
      <img src="/NiuziLogo.png" alt="logo" />
      <div className={classes.search}>
        <input className={classes.keySearch} />
        <span className={classes.keyWord}>手机华为</span>
        <Link className={classes.upload_bg} href="https://jd.com">
          <span className={`${classes.iconfont}`}>&#xe63c;</span>
        </Link>
        <Link className={classes.searchLink} href="https://jd.com">
          <span className={classes.iconfont}>&#xe62d;</span>
        </Link>
      </div>
      <div className={classes.myCartCar}>
        <i className={classes.iconfont}>&#xe70b;</i>
        <span className={classes.cartNum}>0</span>
        <span>我的购物车</span>
      </div>
    </div>
  </div>
);

export default FloatSearch;
