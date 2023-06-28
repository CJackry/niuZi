import React from 'react';
import { addrList, testPayGoods } from '@/src/utils/fakeData';
import SelectItem from '@/src/components/selectItem';
import DeliveryWay from '@/src/views/VPay/comps/deliveryWay';
import DeliveryGood from '@/src/views/VPay/comps/deliveryGood';
import { PayInfo } from '@/src/views/VPay/interface';
import ShippingSelect from '../shippingSelect';
import classes from './payCheckout.module.scss';

type Props = {
  payInfo: PayInfo;
}

const PayCheckout:React.FC<Props> = ({ payInfo }) => {
  const { commodity } = payInfo;
  const handleClick = () => {
    console.log('click');
  };
  const totalW = commodity?.reduce((prev, good) => prev + good.weight, 0);
  return (
    <div className={classes.root}>
      <span className={classes.title}>填写并核对订单信息</span>
      <div className={classes.checkout}>
        <div className={classes.checkBox}>
          <span className={classes.checkTitle}>
            <h5>收货人信息</h5>
            <span>新增收货地址</span>
          </span>
          <ShippingSelect addrList={addrList} />
          <div className={classes.hr} />
        </div>
        <div className={classes.checkBox}>
          <span className={classes.checkTitle}>
            <h5>支付方式</h5>
          </span>
          <div className={classes.payWay}>
            <SelectItem onClick={handleClick}>货到付款</SelectItem>
            <SelectItem onClick={handleClick}>在线支付</SelectItem>
            <i>更多</i>
          </div>
          <div className={classes.hr} />
        </div>
        <div className={classes.checkBox}>
          <span className={classes.checkTitle}>
            <h5>送货清单</h5>
            <span>返回修改购物车</span>
          </span>
          <div className={classes.deliveryItem}>
            <DeliveryWay totalWeight={totalW || 0} />
            <div>
              {
                testPayGoods.map((good) => (
                  <DeliveryGood good={good} key={good.id} />
                ))
              }
            </div>
          </div>
          <div className={classes.hr} />
        </div>
        <div className={classes.checkBox}>
          <span className={classes.checkTitle}>
            <h5>发票信息</h5>
          </span>
          <div className={classes.fp}>
            <span className={classes.fpType}>电子普通发票</span>
            <span>个人</span>
            <span>商品明细</span>
            <span>修改</span>
          </div>
          {/* <div className={classes.hr} /> */}
        </div>
      </div>
    </div>
  );
};

export default PayCheckout;
