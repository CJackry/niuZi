import React from 'react';
import classes from './delivertItem.module.scss';
import DeliveryWay from '../deliveryWay';
import DeliveryGood from '../deliveryGood';

const DeliveryItem:React.FC = () => (
  <div className={classes.root}>
    <DeliveryWay />
    <DeliveryGood />
  </div>
);

export default DeliveryItem;
