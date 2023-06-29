import React, { useState } from 'react';
import global from '@/styles/global.module.scss';
import PayLayout from '@/src/views/VPay/comps/payLayout';
import PayCheckout from '@/src/views/VPay/comps/payCheckout';
import { PayInfo } from '@/src/views/VPay/interface';
import { useCartContext } from '@/src/stores/cartContext';
import { defaultPayInfo } from '@/src/utils/fakeData';
import classes from './VPay.module.scss';

const VPay:React.FC = () => {
  // 订单初始化
  const { store } = useCartContext();
  const cartList = store.cartList ? store.cartList : [];
  const orderGoods = cartList?.filter((cart) => cart.isChecked);
  const initialPayInfo = defaultPayInfo;
  initialPayInfo.commodity = orderGoods;
  // 设置默认信息=已勾选的商品+默认地址
  const [payInfo] = useState<PayInfo>(initialPayInfo);

  console.log(payInfo.commodity);
  return (
    <div className={classes.root}>
      <div className={global.w}>
        <PayLayout>
          <PayCheckout payInfo={payInfo} />
        </PayLayout>
      </div>
    </div>
  );
};

export default VPay;
