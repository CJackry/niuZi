import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import global from '@/styles/global.module.scss';
import { nanoid } from 'nanoid';
import { Phone } from '@/src/views/VSearch/interface';
import Pagination from '@mui/material/Pagination';
import clientRequest from '@/src/utils/http-client';
import classes from './VSearch.module.scss';

const getPhone = async (part:number) => clientRequest<Array<Phone>>({
  url: '/api/phones',
  params: { part },
});

const VSearch:React.FC = () => {
  const phoneImg = 'https://img11.360buyimg.com/n7/jfs/t1/99542/29/27716/49463/635bb90eEdd20de26/9e7aca116e9bd23a.jpg';
  const [phoneInfo, setPhoneInfo] = useState<Array<Phone>|null>(null);
  useEffect(() => {
    getPhone(1).then((r) => setPhoneInfo(r.data));
  }, []);
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
          {phoneInfo ? phoneInfo.map((phone) => (
            <div className={classes.goodsItem} key={nanoid()}>
              <div className={classes.goodsWarp}>
                <Link href="https://jd.com" className={classes.goodsImg}>
                  <img src={phone.color[0].img_link ? phone.color[0].img_link : phoneImg} alt="phone" />
                </Link>
                <div className={classes.phoneScroll}>
                  {phone.color.map((colorAttr) => (
                    <li className={classes.psItem} key={nanoid()}>
                      <a href="https://jd.com">
                        <img
                          src={colorAttr.img_link ? colorAttr.img_link : phoneImg}
                          alt={colorAttr.name}
                          title={colorAttr.name}
                        />
                      </a>
                    </li>
                  ))}
                </div>
                <div className={classes.phonePrice}>
                  <span>￥</span>
                  <strong>{phone.price}</strong>
                </div>
                <div className={classes.phoneTitle}>
                  <a href="https://jd.com">
                    <span>{phone.title}</span>
                  </a>
                </div>
                <div className={classes.phoneCommits}>
                  <span>{phone.commits}</span>
                  条评价
                </div>
                <div className={classes.phoneStore}>
                  <Link href={phone.shop.link}>
                    <span className={classes.storeName}>
                      {phone.shop.name}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )) : (
            <div className={classes.loading}>
              <span>Loading</span>
            </div>
          )}
        </div>
        )
        <div className={classes.page}>
          <Pagination count={10} variant="outlined" shape="rounded" size="medium" />
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
};

export default VSearch;
