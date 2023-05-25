import React, { useState } from 'react';
import global from '@/styles/global.module.scss';
import AddrSelect from '@/src/components/addrSelect';
import Link from 'next/link';
import { useScroll } from 'ahooks';
import clsx from 'clsx';
import { useCartContext } from '@/src/stores/cartContext';
import clientRequest from '@/src/utils/http-client';
import { useUserContext } from '@/src/stores/context';
import CartItem from './comps/cartItem';
import classes from './vcart.module.scss';

const VCart:React.FC = () => {
  const scroll = useScroll();
  const top = scroll?.top || scroll?.left || 0;
  const { store: { cartList, total } } = useCartContext();
  const { store: { name } } = useUserContext();
  const sumPrice = cartList.reduce(
    (prev, cartItem) => prev + (cartItem.isCheck ? cartItem.price * cartItem.amount : 0),
    0,
  );
  const sumCheck = cartList.reduce((prev, cartItem) => prev + (cartItem.isCheck ? cartItem.amount : 0), 0);
  const [totalPrice, setTotalPrice] = useState<number>(sumPrice);
  const [checkNum, setCheckNum] = useState(sumCheck);
  const fixTop = (total - 1) * 270;
  console.log(cartList);
  const handleCheck = async () => {
    console.log(cartList);
    const sumP = cartList.reduce(
      (prev, cartItem) => prev + (cartItem.isCheck ? cartItem.price * cartItem.amount : 0),
      0,
    );
    const sumC = cartList.reduce((prev, cartItem) => prev + (cartItem.isCheck ? cartItem.amount : 0), 0);
    setTotalPrice(sumP);
    setCheckNum(sumC);
    await clientRequest({
      url: '/api/goods/addCart',
      data: { cart: cartList, user: name },
      method: 'post',
    });
    console.log(cartList);
  };
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
            total !== 0 ? cartList.map((cartInfo) => (
              <CartItem cartInfo={cartInfo} isChecked={cartInfo.isCheck} key={cartInfo.id} onChange={handleCheck} />
            )) : <span>还没有添加商品</span>
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
