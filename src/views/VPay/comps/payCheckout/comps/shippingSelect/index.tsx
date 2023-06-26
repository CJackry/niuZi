import React from 'react';
import { UserAddress } from '@/src/views/VPay/interface';
import ShippingAddr from './comps/shippingAddr';
import classes from './shippingSelect.module.scss';

type Props = {
  addrList: Array<UserAddress>;
}

const ShippingSelect:React.FC<Props> = ({ addrList }) => (
  <div className={classes.checkInfo}>
    {
          addrList.map((addr) => (
            <ShippingAddr addr={addr} />
          ))
      }
  </div>
);

export default ShippingSelect;
