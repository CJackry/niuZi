import React from 'react';
import { GoodInfo } from '@/src/views/VDetails/interface';
import Link from 'next/link';
import AddrSelect from '@/src/components/addrSelect';
import NumChange from '@/src/components/numChange';
import { NumChangeFun } from '@/src/components/numChange/interface';
import classes from './goodDetails.module.scss';
import GoodPrice from './comps/goodPrice';

type Props = {
    goodInfo: GoodInfo,
}
// https://item.jd.com/100049486783.html#crumb-wrap
const GoodDetails:React.FC<Props> = ({ goodInfo }) => {
  const goodTit = goodInfo.title + goodInfo.attr[0].attrName + goodInfo.attr[0].color[0].name;
  const chooseColor = (e:React.MouseEvent) => {
    console.log(e.target);
  };
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <span className={classes.specialTag}>门店有售</span>
        <span className={classes.title}>{goodTit}</span>
      </div>
      <GoodPrice price="4999.00" gifts={goodInfo.gifts} />
      <div className={classes.cate}>
        <span className={classes.cateName}>增值业务</span>
        <div className={classes.cateVal}>
          <span className={classes.huishou}>高价回收，急速到账</span>
        </div>
      </div>
      <div className={classes.cate}>
        <span className={classes.cateName}>配送至</span>
        <div className={classes.cateVal}>
          <AddrSelect addr="湖南长沙市岳麓区" />
          <strong className={classes.isEnough}>有货</strong>
          <div className={classes.serverCate}>
            <span className={classes.support}>支持</span>
            <div className={classes.serverOpt}>
              <span>可配送全球</span>
              <i>|</i>
              <span>99元免基础运费</span>
              <i>|</i>
              <span>免举证退换货</span>
              <i>|</i>
              <span>365天原厂维修</span>
            </div>
          </div>
          <div className={classes.logisServer}>
            <div className={classes.serverOpt}>
              {/* eslint-disable-next-line max-len */}
              <img className={classes.logisIcon} src="https://img10.360buyimg.com/imagetools/jfs/t1/136750/17/12251/5189/5f8586e6E483b2f57/78ee33bdc7ef8c35.png" alt="京东物流" />
              <span>次日达</span>
              <i>|</i>
              <span>预约送货</span>
              <i>|</i>
              <span>部分收货</span>
              <i>|</i>
              <span>送货上门</span>
            </div>
            <span className={classes.logisIll}>
              由
              <span>京东</span>
              发货并提供售后服务，预计
              <strong>明天（05月06日）</strong>
              送达
            </span>
          </div>
        </div>
      </div>
      <div className={classes.cate}>
        <span className={classes.cateName}>重量</span>
        <div className={classes.cateVal}>
          <span className={classes.support}>0.54kg</span>
        </div>
      </div>
      <div className={classes.summaryLine} />
      <div className={classes.cate}>
        <div className={`${classes.cateName} ${classes.colorSelect}`}>选择颜色</div>
        <div className={classes.cateVal}>
          <div className={classes.goodAttr}>
            {goodInfo.attr[0].color.map((item) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <Link
                href="#"
                className={classes.attrVal}
                key={item.id}
                onClick={(e) => { chooseColor(e); }}
                title={item.name}
              >
                <img src={item.imgSrc} alt={item.name} />
                <i>{item.name}</i>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.cate}>
        <div className={classes.cateName}>选择版本</div>
        <div className={classes.cateVal}>
          <div className={classes.goodAttr}>
            {goodInfo.attr.map((item) => (
              <Link className={classes.attrVal} href="https://jd.com" key={item.id}>
                <span>{item.attrName}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.summaryLine} />
      <div className={classes.chooseBtn}>
        <NumChange onChange={handleChange} defaultValue={1} type="floatRight" />
        <Link className={classes.addCart} href="https://jd.com">加入购物车</Link>
      </div>
    </div>

  );
};

export default GoodDetails;
