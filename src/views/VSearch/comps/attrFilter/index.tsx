import React from 'react';
import classes from './attrFilter.module.scss';

type Props={
  handleMove:(currentPage:number)=>void,
  currentPage: number,
  total: number,
  pageSize: number,
}
const AttrFilter:React.FC<Props> = (
  {
    handleMove, currentPage, total, pageSize,
  },
) => {
  const handlePrevOrNext = (action:'prev'|'next') => {
    if (action === 'prev') handleMove(-1);
    else if (action === 'next') handleMove(1);
  };
  return (
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
            <span className={classes.totalCount}>{total > 4000 ? '4000+' : total}</span>
            件商品
          </div>
          <div className={classes.totalPage}>
            <span>{currentPage}</span>
            /
            <span>{total / pageSize}</span>
          </div>
          <div className={classes.pageChange}>
            <button onClick={() => handlePrevOrNext('prev')} disabled={currentPage <= 1}>{'<'}</button>
            <button onClick={() => handlePrevOrNext('next')} disabled={currentPage >= total / pageSize}>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttrFilter;
