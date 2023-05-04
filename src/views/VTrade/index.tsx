import React from 'react';
import classes from './VTrade.module.scss';

const VTrade:React.FC = () => {
  console.log('Trade Page');
  return (
    <div className={classes.root}>
      This is Trade Page.
    </div>
  );
};

export default VTrade;
