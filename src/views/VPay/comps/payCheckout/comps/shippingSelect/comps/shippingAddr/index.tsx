import React, { useState } from 'react';
import { UserAddress } from '@/src/views/VPay/interface';
import classes from './shippingAddr.module.scss';

type Props = {
    addr: UserAddress;
}

const ShippingAddr:React.FC<Props> = ({ addr }) => {
  const [isMove, setIsMove] = useState(false);
  let addrDetail = '';
  const addresses = Object.values(addr.address);
  addresses.forEach((a) => { addrDetail += ` ${a}`; });
  return (
    <div
      className={classes.addrInfo}
      onMouseEnter={() => { setIsMove(true); }}
      onMouseLeave={() => { setIsMove(false); }}
    >
      <div className={classes.addrLabel}>{addr.label}</div>
      <div className={classes.address}>
        <div>
          <span className={classes.consigneeName}>{addr.name}</span>
          <span className={classes.addrDetails}>
            {addrDetail}
          </span>
          {addr.isDefault ? <i className={classes.defaultAddrLabel}>默认地址</i> : <div />}
        </div>
        {isMove ? <span className={classes.opt}>编辑</span> : <div />}
      </div>
    </div>
  );
};

export default ShippingAddr;
