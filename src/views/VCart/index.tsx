import React from 'react';
import global from '@/styles/global.module.scss';
import AddrSelect from '@/src/components/addrSelect';
import CartItem from '@/src/views/VCart/cartItem';
import { CartInfo } from '@/src/views/VCart/interface';
import { nanoid } from 'nanoid';
import classes from './vcart.module.scss';

const cartInfo:CartInfo = {
  id: nanoid(),
  title: 'xiaomi 13',
  attr: { attr1: '白色', attr2: '12+512' },
  price: '4999.00',
  amount: 1,
  // eslint-disable-next-line max-len
  imgSrc: 'https://img30.360buyimg.com/n0/s80x80_jfs/t1/154028/32/33653/29617/644b6af1F307f6c98/422054c23c1e58f2.jpg.dpg',
  gifts: [
    {
      name: '小爱音箱',
      id: nanoid(),
    },
    {
      name: '无忧卡',
      id: nanoid(),
    },
  ],
};

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
      </div>
    </div>
  </div>
);

export default VCart;
