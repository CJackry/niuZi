import React, { useState } from 'react';
import { UserAddress } from '@/src/views/VPay/interface';
import SelectItem from '@/src/components/selectItem';
import classes from './shippingAddr.module.scss';

type Props = {
    addr: UserAddress;
    onClick?: (addr: UserAddress) => void;
}

const ShippingAddr:React.FC<Props> = ({ addr, onClick }) => {
  const [isMove, setIsMove] = useState(false);
  let addrDetail = '';
  const addresses = Object.values(addr.address);
  addresses.forEach((a) => { addrDetail += ` ${a}`; });
  const handleClick = () => {
    if (onClick) onClick(addr);
  };
  const itemClass = {
    root: classes.addrLabel,
  };
  return (
    <div
      className={classes.addrInfo}
      onMouseEnter={() => { setIsMove(true); }}
      onMouseLeave={() => { setIsMove(false); }}
    >
      <SelectItem
        classes={itemClass}
        onClick={handleClick}
        isSelected={addr.isDefault}
      >
        {addr.label}
      </SelectItem>
      <div className={classes.address}>
        <div>
          <span className={classes.consigneeName}>{addr.name}</span>
          <span className={classes.addrDetails}>
            {addrDetail}
          </span>
          {addr.isDefault ? <i className={classes.defaultAddrLabel}>默认地址</i> : null}
        </div>
        {isMove ? <span className={classes.opt}>编辑</span> : null}
      </div>
    </div>
  );
};

export default ShippingAddr;
