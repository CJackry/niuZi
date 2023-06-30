import React, { useState } from 'react';
import global from '@/styles/global.module.scss';
import AddrSelect from '@/src/components/addrSelect';
import Link from 'next/link';
import { useScroll } from 'ahooks';
import clsx from 'clsx';
import { useCartAction, useCartContext } from '@/src/stores/cartContext';
import { CartAttr } from '@/src/views/VDetails/interface';
import { useUserContext } from '@/src/stores/context';
import NzModal from '@/src/components/NzModal';
import SearchComps from '@/src/components/searchComps';
import CartItem from './comps/cartItem';
import classes from './vcart.module.scss';

const VCart:React.FC = () => {
  const scroll = useScroll();
  const top = scroll?.top || scroll?.left || 0;
  const { store } = useCartContext();
  const cartList = store.cartList ? store.cartList : [];
  const { total } = store;
  const isDisabled = total === 0;
  const sumPrice = cartList.reduce(
    (prev, cartItem) => prev + (cartItem.isChecked ? cartItem.price * cartItem.amount : 0),
    0,
  );
  const sumCheck = cartList.reduce(
    (prev, cartItem) => prev + (cartItem.isChecked ? cartItem.amount : 0),
    0,
  );
  const { store: { name } } = useUserContext();
  const { handleAllCheck, handleCheckDel, handleDel } = useCartAction();
  const [isDel, setIsDel] = useState(false);
  const [isCheckDel, setIsCheckDel] = useState(false);
  const [needDelId, setNeedDelId] = useState('');
  const [totalPrice, setTotalPrice] = useState<number>(sumPrice);
  const [checkNum, setCheckNum] = useState(sumCheck);
  const [isAllCheck, setIsAllCheck] = useState((sumCheck === total && total !== 0));
  const fixTop = (total - 1) * 270;
  const changeAllCheck = async () => {
    const check = !isAllCheck;
    setIsAllCheck(check);
    await handleAllCheck(check, name || '');
  };
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
    if (sumC === total && total !== 0) setIsAllCheck(true);
    else setIsAllCheck(false);
  };
  const noticeDel = (type: string) => {
    if (type === 'delItem') setIsDel(true);
    else setIsCheckDel(true);
  };
  const handleClose = () => {
    setIsDel(false);
    setIsCheckDel(false);
  };
  const delCartItem = async (id: string) => {
    setNeedDelId(id);
    noticeDel('delItem');
  };
  const handleConfirm = async () => {
    if (isDel) {
      console.log(needDelId);
      await handleDel(needDelId, name || '');
      setNeedDelId('');
      setIsDel(false);
    } else if (isCheckDel) {
      await handleCheckDel(name || '');
      setIsCheckDel(false);
    }
  };
  // useWhyDidYouUpdate('VCart', cartList);
  return (
    <div className={classes.root}>
      <div className={global.w}>
        <SearchComps type="withCart" withCart={false} withHotWords={false} />
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
          <input
            type="checkbox"
            className={classes.checkAll}
            checked={isAllCheck}
            onChange={changeAllCheck}
            disabled={isDisabled}
          />
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
              <CartItem
                cartInfo={cartInfo}
                isChecked={cartInfo.isChecked}
                key={cartInfo.id}
                onChange={handleChange}
                handleDel={delCartItem}
              />
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
              <input
                type="checkbox"
                className={classes.checkAll}
                checked={isAllCheck}
                onChange={changeAllCheck}
                disabled={isDisabled}
              />
              <span className={classes.tit1}>全选</span>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href="" onClick={() => { noticeDel('checkDel'); }}>删除选中的商品</Link>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href="">移入关注</Link>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href="" className={classes.cleanCart}>清理购物车</Link>
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
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link href="/shopping" className={classes.goSett}>去结算</Link>
            </div>
          </div>
        </div>
      </div>
      {isDel || isCheckDel
        ? (
          <NzModal
            isOpen
            footerCom={
            (
              <div className={classes.closeFooter}>
                <button onClick={handleConfirm}>确认</button>
                <button onClick={handleClose}>取消</button>
              </div>
            )
          }
            handleClose={handleClose}
          >
            <div className={classes.modalContent}>
              <img src="/notice.png" alt="del" />
              <span>删除商品</span>
            </div>
          </NzModal>
        ) : <div />}
    </div>
  );
};

export default VCart;
