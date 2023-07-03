import React, { useState } from 'react';
import { GoodInfo, CartAttr } from '@/src/views/VDetails/interface';
import Link from 'next/link';
import AddrSelect from '@/src/components/addrSelect';
import NumChange from '@/src/components/numChange';
import { useUserContext } from '@/src/stores/context';
import { useCartAction } from '@/src/stores/cartContext';
import clsx from 'clsx';
import classes from './goodDetails.module.scss';
import GoodPrice from './comps/goodPrice';

type Props = {
    goodInfo: GoodInfo,
}

// https://item.jd.com/100049486783.html#crumb-wrap
const GoodDetails:React.FC<Props> = ({ goodInfo }) => {
  const { price } = goodInfo.attr[0].color[0];
  const { store: { name } } = useUserContext();
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
    weight: 0.54,
  });
  const chooseColor = (e: React.MouseEvent<HTMLDivElement>) => {
    const color = (e.currentTarget as HTMLDivElement).getAttribute('title') || '';
    goodInfo.attr.forEach((attrItem) => {
      if (attrItem.attrName === attr?.version) {
        attrItem.color.forEach((c) => {
          if (c.name === color) {
            // console.log(c);
            setAttr({
              ...attr, price: c.price, color, imgSrc: c.imgSrc, id: c.id,
            });
          }
        });
      }
    });
  };
  const chooseVersion = (e: React.MouseEvent<HTMLDivElement>) => {
    const version = (e.currentTarget as HTMLDivElement).getAttribute('title') || '';
    goodInfo.attr.forEach((a) => {
      if (a.attrName === version) {
        a.color.forEach((c) => {
          if (c.name === attr?.color) {
            setAttr({
              ...attr, price: c.price, version, imgSrc: c.imgSrc, id: c.id,
            });
          }
        });
      }
    });
    // setAttr({ ...attr, version, price: p });
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
          <span className={classes.support}>{`${goodInfo.weight} kg`}</span>
        </div>
      </div>
      <div className={classes.summaryLine} />
      <div className={classes.cate}>
        <div className={`${classes.cateName} ${classes.colorSelect}`}>选择颜色</div>
        <div className={classes.cateVal}>
          <div className={classes.goodAttr}>
            {goodInfo.attr[0].color.map((item) => (
              <div
                className={clsx(classes.attrVal, { [classes.attrValCheck]: item.name === attr.color })}
                key={item.id}
                onClick={(e) => { chooseColor(e); }}
                title={item.name}
                role="button"
                tabIndex={0}
              >
                <img src={item.imgSrc} alt={item.name} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.cate}>
        <div className={classes.cateName}>选择版本</div>
        <div className={classes.cateVal}>
          <div className={classes.goodAttr}>
            {goodInfo.attr.map((item) => (
              <div
                className={clsx(classes.attrVal, { [classes.attrValCheck]: item.attrName === attr.version })}
                key={item.id}
                onClick={(e) => chooseVersion(e)}
                title={item.attrName}
                role="button"
                tabIndex={0}
              >
                <span>{item.attrName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.summaryLine} />
      <div className={classes.chooseBtn}>
        <NumChange onChange={handleChange} defaultValue={1} type="floatRight" />
        <button className={classes.addBtn} onClick={handleAdd}>
          <Link className={classes.addCart} href="/cart">加入购物车</Link>
        </button>
      </div>
    </div>

  );
};

export default GoodDetails;
