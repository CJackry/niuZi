import React from 'react';
import PhoneNav from '@/src/views/VDetails/comps/phoneNav';
import ImgPreview from '@/src/views/VDetails/comps/imgPreview';
import GoodDetails from '@/src/views/VDetails/comps/goodDetails';
import { goodInfo } from '@/src/utils/fakeData';
import ShopTop from './comps/shopTop';
import classes from './details.module.scss';

const VDetails:React.FC = () => (
  <div className={classes.root}>
    <ShopTop />
    <PhoneNav />
    <div className={classes.detail}>
      <ImgPreview imgList={goodInfo.attr[0].color} />
      <GoodDetails goodInfo={goodInfo} />
    </div>
  </div>
);

export default VDetails;
