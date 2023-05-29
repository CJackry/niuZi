import React, { useState } from 'react';
import { GoodInfo, CartAttr } from '@/src/views/VDetails/interface';
import Link from 'next/link';
import AddrSelect from '@/src/components/addrSelect';
import NumChange from '@/src/components/numChange';
import { useUserContext } from '@/src/stores/context';
import { useCartAction, useCartContext } from '@/src/stores/cartContext';
import clientRequest from '@/src/utils/http-client';
import { updateCartList } from '@/src/utils/commonFuns';
import classes from './goodDetails.module.scss';
import GoodPrice from './comps/goodPrice';

type Props = {
    goodInfo: GoodInfo,
}

// https://item.jd.com/100049486783.html#crumb-wrap
const GoodDetails:React.FC<Props> = ({ goodInfo }) => {
  const { price } = goodInfo.attr[0].color[0];
  const { store: { name } } = useUserContext();
  const { store: { cartList } } = useCartContext();
  const { handleAddCart } = useCartAction();
  const [amount, setAmount] = useState(1);
  const [attr, setAttr] = useState<CartAttr>({
    id: goodInfo.attr[0].color[0].id,
    imgSrc: goodInfo.attr[0].color[0].imgSrc,
    title: goodInfo.title,
    color: goodInfo.attr[0].color[0].name,
    version: goodInfo.attr[0].attrName,
    price,
    isChecked: false,
    amount,
    gifts: goodInfo.gifts,
  });
  const chooseColor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const color = (e.currentTarget as HTMLAnchorElement).getAttribute('title') || '';
    // let p: number = price;
    // let imgSrc = '';
    goodInfo.attr.forEach((attrItem) => {
      if (attrItem.attrName === attr?.version) {
        attrItem.color.forEach((c) => {
          if (c.name === color) {
            // p = c.price;
            // imgSrc = c.imgSrc;
            setAttr({
              ...attr, price: c.price, color, imgSrc: c.imgSrc, id: c.id,
            });
          }
        });
      }
    });
  };
  const chooseVersion = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const version = (e.currentTarget as HTMLAnchorElement).getAttribute('title') || '';
    let p: number = price;
    goodInfo.attr.forEach((a) => {
      if (a.attrName === version) {
        a.color.forEach((c) => {
          if (c.name === attr?.color) {
            p = c.price;
          }
        });
      }
    });
    setAttr({ ...attr, version, price: p });
  };
  const handleChange = (num: number) => {
    setAmount(num);
    setAttr({ ...attr, amount: num });
  };
  const handleAdd = async () => {
    if (name) {
      await handleAddCart(attr, name || '');
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <span className={classes.specialTag}>门店有售</span>
        <span className={classes.title}>{`${attr?.title} ${attr?.version} ${attr?.color}`}</span>
      </div>
      <GoodPrice price={attr?.price || price} gifts={goodInfo.gifts} />
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
                href=""
                className={classes.attrVal}
                key={item.id}
                onClick={(e) => { chooseColor(e); }}
                title={item.name}
              >
                <img src={item.imgSrc} alt={item.name} />
                <span>{item.name}</span>
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
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <Link
                className={classes.attrVal}
                href=""
                key={item.id}
                onClick={(e) => chooseVersion(e)}
                title={item.attrName}
              >
                <span>{item.attrName}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.summaryLine} />
      <div className={classes.chooseBtn}>
        <NumChange onChange={handleChange} defaultValue={1} type="floatRight" />
        <button className={classes.addBtn} onClick={handleAdd}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link className={classes.addCart} href="/cart">加入购物车</Link>
        </button>
      </div>
    </div>

  );
};

export default GoodDetails;
