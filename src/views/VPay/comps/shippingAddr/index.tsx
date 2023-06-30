import React, { useState } from 'react';
import { UserAddress } from '@/src/views/VPay/interface';
import SelectItem from '@/src/components/selectItem';
import { arrayToString } from '@/src/utils/commonFuns';
import classes from './shippingAddr.module.scss';

type Props = {
    addr: UserAddress;
    onClick?: (addr: UserAddress) => void;
    isSelected?: boolean;
}

const ShippingAddr:React.FC<Props> = ({ addr, onClick, isSelected }) => {
  const [isMove, setIsMove] = useState(false);
  const addresses = Object.values(addr.address);
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
        isSelected={isSelected}
      >
        {addr.label}
      </SelectItem>
      <div className={classes.address}>
        <div>
          <span className={classes.consigneeName}>{addr.name}</span>
          <span className={classes.addrDetails}>
            {arrayToString(addresses)}
          </span>
          {addr.isDefault ? <i className={classes.defaultAddrLabel}>默认地址</i> : null}
        </div>
        {isMove ? <span className={classes.opt}>编辑</span> : null}
      </div>
    </div>
  );
};

export default ShippingAddr;
