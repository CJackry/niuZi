import React from 'react';
import classes from './addrSelect.module.scss';

type Props = {
  addr: string,
}

const AddrSelect:React.FC<Props> = ({ addr }) => (
  <div className={classes.addrInfo}>
    <div className={classes.addr}>{addr}</div>
  </div>
);

export default AddrSelect;
