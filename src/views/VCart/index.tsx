import React, { useState } from 'react';
import global from '@/styles/global.module.scss';
import AddrSelect from '@/src/components/addrSelect';
import Link from 'next/link';
import { useScroll, useWhyDidYouUpdate } from 'ahooks';
import clsx from 'clsx';
import { useCartContext } from '@/src/stores/cartContext';
import { CartAttr } from '@/src/views/VDetails/interface';
import CartItem from './comps/cartItem';
import classes from './vcart.module.scss';

const VCart:React.FC = () => {
  const scroll = useScroll();
  const top = scroll?.top || scroll?.left || 0;
  const { store } = useCartContext();
  const cartList = store.cartList ? store.cartList : [];
  const { total } = store;
  const sumPrice = cartList.reduce(
    (prev, cartItem) => prev + (cartItem.isChecked ? cartItem.price * cartItem.amount : 0),
    0,
  );
  const sumCheck = cartList.reduce(
    (prev, cartItem) => prev + (cartItem.isChecked ? cartItem.amount : 0),
    0,
  );
  const [totalPrice, setTotalPrice] = useState<number>(sumPrice);
  const [checkNum, setCheckNum] = useState(sumCheck);
  const fixTop = (total - 1) * 270;
  const handleChange = async (newCart: CartAttr) => {
    const newCartList:Array<CartAttr> = cartList.map((cart) => {
      let newItem;
      if (cart.id === newCart.id) newItem = { ...newCart };
      else newItem = { ...cart };
      return newItem;
    });
    const sumP = newCartList.reduce(
      (prev, cartItem) => prev + (cartItem.isChecked ? cartItem.price * cartItem.amount : 0),
      0,
    );
    const sumC = newCartList.reduce((prev, cartItem) => prev + (cartItem.isChecked ? cartItem.amount : 0), 0);
    setTotalPrice(sumP);
    setCheckNum(sumC);
  };
  useWhyDidYouUpdate('VCart', cartList);
  return (
    <div className={classes.root}>
      <div className={global.w}>
        <div className={classes.topTitle}>
          <div className={classes.chooseNum}>
            <span>{`全部商品 ${total}`}</span>
          </div>
          <div className={classes.express}>
            <span>配送至: </span>
            <AddrSelect addr="湖南长沙市长沙县白沙镇" />
          </div>
        </div>
        <div className={classes.cartTop}>
          <input type="checkbox" className={classes.checkAll} />
          <span className={classes.tit1}>全选</span>
          <span className={classes.tit2}>商品</span>
          <span className={classes.tit3}>单价</span>
          <span className={classes.tit4}>数量</span>
          <span className={classes.tit5}>小计</span>
          <span className={classes.tit6}>操作</span>
        </div>
        <div className={classes.goodList}>
          {
            total !== 0 && cartList ? cartList.map((cartInfo) => (
              <CartItem cartInfo={cartInfo} isChecked={cartInfo.isChecked} key={cartInfo.id} onChange={handleChange} />
            )) : (
              <div className={classes.noGoods}>
                还没有添加商品, 前往
                <Link href="/search">手机</Link>
                页面选购
              </div>
            )
          }
        </div>
        <div className={clsx(classes.listBottom, { [classes.listBottomFix]: (top <= fixTop && total >= 0) })}>
          <div className={`${global.w} ${classes.flexBet}`}>
            <div className={classes.cartCarOpts}>
              <input type="checkbox" className={classes.checkAll} />
              <span className={classes.tit1}>全选</span>
              <Link href="https://jd.com">删除选中的商品</Link>
              <Link href="https://jd.com">移入关注</Link>
              <Link href="https://jd.com" className={classes.cleanCart}>清理购物车</Link>
            </div>
            <div className={classes.settlement}>
              <div className={classes.goodSelection}>
                已选择
                <span className={classes.selectNum}>{checkNum}</span>
                件商品
              </div>
              <div className={classes.total}>
                总价：
                <span className={classes.totalPrice}>
                  ￥
                  {totalPrice.toFixed(2)}
                </span>
              </div>
              <Link href="https://jd.com" className={classes.goSett}>去结算</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VCart;
