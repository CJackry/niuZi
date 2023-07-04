import React, { useState } from 'react';
import PhoneNav from '@/src/views/VDetails/comps/phoneNav';
import ImgPreview from '@/src/views/VDetails/comps/imgPreview';
import GoodDetails from '@/src/views/VDetails/comps/goodDetails';
import { goodInfo } from '@/src/utils/fakeData';
import { Color } from '@/src/views/VDetails/interface';
import ShopTop from './comps/shopTop';
import classes from './details.module.scss';

const VDetails:React.FC = () => {
  const [defaultColor, setDefaultColor] = useState({
    name: goodInfo.attr[0].color[0].name,
    imgSrc: goodInfo.attr[0].color[0].imgSrc,
  });
  const handleChange = (color: Color) => {
    setDefaultColor({
      name: color.name,
      imgSrc: color.imgSrc,
    });
  };
  return (
    <div className={classes.root}>
      <ShopTop />
      <PhoneNav />
      <div className={classes.detail}>
        <ImgPreview imgList={goodInfo.attr[0].color} defaultColor={defaultColor} />
        <GoodDetails goodInfo={goodInfo} onChange={handleChange} />
      </div>
    </div>
  );
};

export default VDetails;
