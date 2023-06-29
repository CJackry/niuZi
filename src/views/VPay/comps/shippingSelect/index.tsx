import React, { useState } from 'react';
import { UserAddress } from '@/src/views/VPay/interface';
import ShippingAddr from '../shippingAddr';
import classes from './shippingSelect.module.scss';

type Props = {
  addrList: Array<UserAddress>;
  addrSelected: UserAddress;
  onClick?: (addr: UserAddress) => void;
}

const ShippingSelect:React.FC<Props> = ({ addrList, addrSelected, onClick }) => {
  const isOnly = addrList.length === 1;
  const [isShowMore, setIsShowMore] = useState(false);
  const handleClickMore = () => {
    setIsShowMore(true);
  };
  const handleClickLess = () => {
    setIsShowMore(false);
  };
  const handleClickAddr = (addr: UserAddress) => {
    if (onClick) onClick(addr);
    handleClickLess();
  };
  return (
    <div className={classes.checkInfo}>
      <div className={classes.addrs}>
        {
          addrList.map((addr) => (
            addr === addrSelected
              ? <ShippingAddr onClick={handleClickAddr} addr={addr} key={addr.id} isSelected /> : null
          ))
        }
        {
          isShowMore ? (
            <div className={classes.moreAddr}>
              {addrList.map((addr) => (
                addr !== addrSelected ? <ShippingAddr onClick={handleClickAddr} addr={addr} key={addr.id} /> : null
              ))}
            </div>
          ) : null
        }
      </div>
      {
        isOnly ? null : (
          <div className={classes.moreBtn}>
            {
              isShowMore ? <span onClick={handleClickLess} role="button" tabIndex={0}>收起地址</span>
                : <span onClick={handleClickMore} role="button" tabIndex={0}>更多地址</span>
            }
          </div>
        )
      }
    </div>
  );
};

export default ShippingSelect;
