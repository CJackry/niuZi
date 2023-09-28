import React, { useState } from 'react';
import global from '@/styles/global.module.scss';
import AddrSelect from '@/src/components/addrSelect';
import Link from 'next/link';
import { useScroll } from 'ahooks';
import clsx from 'clsx';
import { useCartAction, useCartContext } from '@/src/stores/cartContext';
import { CartAttr } from '@/src/views/VDetails/interface';
import { useUserContext } from '@/src/stores/context';
// import NzModal from '@/src/components/NzModal';
import SearchComps from '@/src/components/searchComps';
import useWindowSize from '@/src/utils/use/useWindowSize';
import {
  Modal, Table, Tooltip, Button,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import CartItem from './comps/cartItem';
import classes from './vcart.module.scss';

import { cartTableColumns } from './constants';

const VCart: React.FC = () => {
  const scroll = useScroll();
  const scrollTop = scroll?.top || scroll?.left || 0;
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
  // 判断当前窗口大小是否应该使购物车结算底栏浮动
  // 当前商品数量展示所需的高度
  const fixTop = (total) * 270 - 54;
  const { height } = useWindowSize();
  // 当用户窗口比完整展示商品所需高度小的时候浮动底栏，并且在滚动到最后一个商品时停止浮动
  const isFix = height < fixTop && scrollTop <= (fixTop - height);
  const changeAllCheck = async () => {
    const check = !isAllCheck;
    setIsAllCheck(check);
    await handleAllCheck(check, name || '');
    const sumP = check ? cartList.reduce((prev, c) => prev + (c.price * c.amount), 0) : 0;
    setTotalPrice(sumP);
  };
  const handleChange = async (newCart: CartAttr) => {
    const newCartList: Array<CartAttr> = cartList.map((cart) => {
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
  const actionColumns: ColumnsType<CartAttr> = [
    {
      title: '操作',
      render: (_, record) => (
        <>
          <Tooltip title="功能开发中">
            <Button type="link" disabled>移入收藏</Button>
          </Tooltip>
          <Button type="link" onClick={() => delCartItem(record.id)}>删除</Button>
        </>
      ),
    },
  ];
  const tableHeaderRender = () => (
    <div className={classes.topTitle}>
      <div className={classes.chooseNum}>
        <span>{`全部商品 ${total}`}</span>
      </div>
      <div className={classes.express}>
        <span>配送至: </span>
        <AddrSelect addr="湖南长沙市长沙县白沙镇" />
      </div>
    </div>
  );
  const tableSummaryRender = (pageData: readonly CartAttr[]) => {
    console.log(pageData);
    return (
      <Table.Summary.Row>
        <Table.Summary.Cell index={0}>总计</Table.Summary.Cell>
        <Button type="primary">结算</Button>
      </Table.Summary.Row>
    );
  };

  // useWhyDidYouUpdate('VCart', cartList);
  return (
    <div className={classes.root}>
      <div className={global.w}>
        <SearchComps type="withCart" withCart={false} withHotWords={false} />
        <div>
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
          <div className={clsx(classes.listBottom, { [classes.listBottomFix]: isFix })}>
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
                <Button
                  type="link"
                  onClick={() => {
                    noticeDel('checkDel');
                  }}
                >
                  删除选中的商品
                </Button>
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
        {false && (
          <Table<CartAttr>
            title={tableHeaderRender}
            columns={[...cartTableColumns, ...actionColumns]}
            dataSource={cartList}
            size="small"
            id="id"
            rowKey="id"
            rowSelection={{
              selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
            }}
            summary={tableSummaryRender}
          />
        )}
      </div>
      {/* {(isDel || isCheckDel) */}
      {/*  && ( */}
      {/*    <NzModal */}
      {/*      isOpen */}
      {/*      footerCom={ */}
      {/*      ( */}
      {/*        <div className={classes.closeFooter}> */}
      {/*          <button onClick={handleConfirm}>确认</button> */}
      {/*          <button onClick={handleClose}>取消</button> */}
      {/*        </div> */}
      {/*      ) */}
      {/*    } */}
      {/*      handleClose={handleClose} */}
      {/*    > */}
      {/*      <div className={classes.modalContent}> */}
      {/*        <img src="/notice.png" alt="del" /> */}
      {/*        <span>删除商品</span> */}
      {/*      </div> */}
      {/*    </NzModal> */}
      {/*  )} */}
      <Modal
        title="删除商品"
        open={isDel || isCheckDel}
        onCancel={handleClose}
        onOk={handleConfirm}
      />
    </div>
  );
};

export default VCart;
