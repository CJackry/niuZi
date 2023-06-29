import React, { useState } from 'react';
import { addrList, defaultPayInfo } from '@/src/utils/fakeData';
import SelectItem from '@/src/components/selectItem';
import DeliveryWay from '@/src/views/VPay/comps/deliveryWay';
import DeliveryGood from '@/src/views/VPay/comps/deliveryGood';
import { usePayContext } from '@/src/stores/payContext';
import { UserAddress } from '@/src/views/VPay/interface';
import ShippingSelect from '../shippingSelect';
import classes from './payCheckout.module.scss';

const PayCheckout:React.FC = () => {
  const { store: { payInfo }, dispatch } = usePayContext();
  const defaultAddr = payInfo ? payInfo.userInfo : addrList[0];
  const [addrSelected, setAddrSelected] = useState<UserAddress>(defaultAddr);
  const [deliverySelected, setDeliverySelected] = useState<string>('京东快递');
  const newPayInfo = payInfo || defaultPayInfo;

  const handlePayWayClick = (payWay: string) => {
    newPayInfo.payment = payWay;
    dispatch({
      type: 'update',
      newPayInfo,
    });
  };
  const handleAddrClick = (addr: UserAddress) => {
    newPayInfo.userInfo = addr;
    setAddrSelected(addr);
    dispatch({
      type: 'update',
      newPayInfo,
    });
  };
  const handleDeliveryChange = (delivery: string) => {
    newPayInfo.delivery = delivery;
    setDeliverySelected(delivery);
    dispatch({
      type: 'update',
      newPayInfo,
    });
  };
  const totalW = newPayInfo.commodity?.reduce((prev, good) => prev + (good.weight * good.amount), 0);
  return (
    <div className={classes.root}>
      {payInfo ? (
        <>
          <span className={classes.title}>填写并核对订单信息</span>
          <div className={classes.checkout}>
            <div className={classes.checkBox}>
              <span className={classes.checkTitle}>
                <h5>收货人信息</h5>
                <span>新增收货地址</span>
              </span>
              <ShippingSelect addrList={addrList} addrSelected={addrSelected} onClick={handleAddrClick} />
              <div className={classes.hr} />
            </div>
            <div className={classes.checkBox}>
              <span className={classes.checkTitle}>
                <h5>支付方式</h5>
              </span>
              <div className={classes.payWay}>
                <SelectItem onClick={handlePayWayClick} isSelected={payInfo.payment === '货到付款'}>货到付款</SelectItem>
                <SelectItem onClick={handlePayWayClick} isSelected={payInfo.payment === '在线支付'}>在线支付</SelectItem>
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
                <DeliveryWay onChange={handleDeliveryChange} totalWeight={totalW || 0} delivery={deliverySelected} />
                <div>
                  {
                          newPayInfo.commodity ? newPayInfo.commodity.map((good) => (
                            <DeliveryGood good={good} key={good.id} />
                          )) : null
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
        </>
      ) : <div />}
    </div>
  );
};

export default PayCheckout;
