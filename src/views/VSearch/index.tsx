import React from 'react';
import Link from 'next/link';
import global from '@/styles/global.module.scss';
import { nanoid } from 'nanoid';

import Pagination from '@mui/material/Pagination';
import classes from './VSearch.module.scss';

function VSearch() {
  const phoneImg = 'https://img11.360buyimg.com/n7/jfs/t1/99542/29/27716/49463/635bb90eEdd20de26/9e7aca116e9bd23a.jpg';
  const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
            <div className={classes.b_valueList}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
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
                <Link href="https://jd.com">{'<'}</Link>
                <Link href="https://jd.com">{'>'}</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.goodsList}>
          {initialArray.map((i) => (
            <li className={classes.goodsItem}>
              <div className={classes.goodsWarp}>
                <a href="https://jd.com" className={classes.goodsImg}>
                  <img src={phoneImg} alt={`phone${String(i)}`} />
                </a>
                <div className={classes.phoneScroll}>
                  <li className={classes.psItem}>
                    <a href="https://jd.com">
                      <img src={phoneImg} alt="color" />
                    </a>
                  </li>
                  <li className={classes.psItem}>
                    <a href="https://jd.com">
                      <img src={phoneImg} alt="color" />
                    </a>
                  </li>
                </div>
                <div className={classes.phonePrice}>
                  <span>￥</span>
                  <strong>1199.00</strong>
                </div>
                <div className={classes.phoneTitle}>
                  <a href="https://jd.com">
                    <p>华为之选</p>
                  </a>
                </div>
                <div className={classes.phoneCommits}>
                  <span>50万+</span>
                  条评价
                </div>
                <div className={classes.phoneStore}>
                  <span className={classes.storeName}>
                    华为京东自营旗舰店
                  </span>
                </div>
              </div>
            </li>
          ))}

        </div>
        <div className={classes.page}>
          <Pagination count={10} variant="outlined" shape="rounded" />
          <div className={classes.pageTo}>
            <em>
              共
              <span>100</span>
              页 到第
            </em>
            <input className={classes.pageText} />
            页
            <button>确定</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VSearch;
