import React from 'react';
import global from '@/styles/global.module.scss';
import AddrSelect from '@/src/components/addrSelect';
import Link from 'next/link';
import { cartInfo } from '@/src/utils/fakeData';
import CartItem from './comps/cartItem';
import classes from './vcart.module.scss';

const VCart:React.FC = () => (
  <div className={classes.root}>
    <div className={global.w}>
      <div className={classes.topTitle}>
        <div className={classes.chooseNum}>
          <span>全部商品 14</span>
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
        <CartItem cartInfo={cartInfo} />
        <CartItem cartInfo={cartInfo} />
      </div>
      <div className={classes.listBottom}>
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
            <span className={classes.selectNum}>1</span>
            件商品
          </div>
          <div className={classes.total}>
            总价：
            <span className={classes.totalPrice}>￥ 4999.00</span>
          </div>
          <Link href="https://jd.com" className={classes.goSett}>去结算</Link>
        </div>
      </div>
    </div>
  </div>
);

export default VCart;
