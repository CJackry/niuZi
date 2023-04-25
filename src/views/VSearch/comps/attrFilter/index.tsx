import React from 'react';
import Link from 'next/link';
import classes from './attrFilter.module.scss';

const page = 1;
const AttrFilter:React.FC = () => (
  <div className={classes.v_filter}>
    <div className={classes.v_filter_top}>
      <div className={classes.v_sort}>
        <li>
          <span>综合</span>
          <i>👇</i>
        </li>
        <li>
          <span>销量</span>
          <i>👇</i>
        </li>
        <li>
          <span>评价数</span>
          <i>👇</i>
        </li>
        <li>
          <span>新品</span>
          <i>👇</i>
        </li>
        <li>
          <span>价格</span>
          <i>👇</i>
        </li>
      </div>
      <div className={classes.priceFilter}>
        <div className={classes.priceArea}>
          <input className={classes.minPrice} placeholder="￥" />
          -
          <input className={classes.minPrice} placeholder="￥" />
        </div>
      </div>
      <div className={classes.pageInfo}>
        <div className={classes.totalGoods}>
          共
          <span className={classes.totalCount}>5900+</span>
          件商品
        </div>
        <div className={classes.totalPage}>
          <span>1</span>
          /
          <span>100</span>
        </div>
        <div className={classes.pageChange}>
          <Link href={`/search${page <= 2 ? '' : `?page=${page - 1}`}`}>{'<'}</Link>
          <Link href="/search">{'>'}</Link>
        </div>
      </div>
    </div>
  </div>
);

export default AttrFilter;
