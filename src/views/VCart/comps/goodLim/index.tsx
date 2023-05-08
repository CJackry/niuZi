import React from 'react';
import classes from './goodStatus.module.scss';

type Props = {
  isLimit: boolean,
  isReduce: boolean,
  reducePrice?: number
}

const GoodLim:React.FC<Props> = (props) => {
  const { isLimit, isReduce, reducePrice } = props;
  return (
    <div className={classes.root}>
      {isLimit ? <span className={classes.goodLim}>限购1件</span> : <div />}
      {isReduce ? (
        <span className={classes.goodLim}>
          比加入时降
          {reducePrice}
        </span>
      ) : <div />}
    </div>
  );
};

export default GoodLim;
