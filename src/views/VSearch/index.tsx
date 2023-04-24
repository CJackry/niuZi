import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import global from '@/styles/global.module.scss';
import { nanoid } from 'nanoid';
import { Phone } from '@/src/views/VSearch/interface';
import Pagination from '@mui/material/Pagination';
import clientRequest from '@/src/utils/http-client';
import { useRouter } from 'next/router';
import { useWhyDidYouUpdate } from 'ahooks';
import { unstable_batchedUpdates } from 'react-dom';
import classes from './VSearch.module.scss';

const getPhone = async (part:number) => {
  const res = await clientRequest<Array<Phone>>({
    url: '/api/phones',
    params: { part },
  });
  return res.data;
};

const VSearch:React.FC = () => {
  console.log('VSearch render');
  const phoneImg = 'https://img11.360buyimg.com/n7/jfs/t1/99542/29/27716/49463/635bb90eEdd20de26/9e7aca116e9bd23a.jpg';
  const [phoneInfo, setPhoneInfo] = useState<Array<Phone>|null>();
  const router = useRouter();
  const p = Number(router.query.page);
  const [page, setPage] = useState<number>(p);
  useWhyDidYouUpdate('VSearch', { phoneInfo, page });
  const handleChangePage = (event:React.ChangeEvent<unknown>, value:number) => {
    setPage(value);
    router.push(`/search?page=${value}`).then((r) => console.log(r));
  };
  useEffect(() => {
    getPhone(page).then((r) => {
      unstable_batchedUpdates(() => {
        setPhoneInfo(r);
        if (p !== undefined) setPage(p);
      });
    });
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
                <Link href={`/search${page <= 2 ? '' : `?page=${page - 1}`}`}>{'<'}</Link>
                <Link href="/search">{'>'}</Link>
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
          <Pagination
            defaultPage={1}
            count={10}
            variant="outlined"
            shape="rounded"
            size="medium"
            onChange={handleChangePage}
          />
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
