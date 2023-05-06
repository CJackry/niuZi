import React from 'react';
import PhoneNav from '@/src/views/VDetails/comps/phoneNav';
import ImgPreview from '@/src/views/VDetails/comps/imgPreview';
import { GoodInfo } from '@/src/views/VDetails/interface';
import GoodDetails from '@/src/views/VDetails/comps/goodDetails';
import { nanoid } from 'nanoid';
import ShopTop from './comps/shopTop';
import classes from './details.module.scss';

const phoneAttrs = [12];
const goodInfo:GoodInfo = {
  title: '小米13 徕卡光学镜头 第二代骁龙8处理器 超窄边屏幕 120Hz高刷 67W快充',
  attr: [
    {
      id: nanoid(),
      attrName: '8+128',
      color: [
        {
          id: nanoid(), name: '白', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '4599.00',
        },
        {
          id: nanoid(), name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '4699.00',
        },
        {
          id: nanoid(), name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '4799.00',
        },
        {
          id: nanoid(), name: '蓝', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '4499.00',
        },
      ],
    },
    {
      id: nanoid(),
      attrName: '12+256',
      color: [
        {
          id: nanoid(), name: '白', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '5099.00',
        },
        {
          id: nanoid(), name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '5199.00',
        },
        {
          id: nanoid(), name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '5299.00',
        },
        {
          id: nanoid(), name: '蓝', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '4999.00',
        },
      ],
    },
    {
      id: nanoid(),
      attrName: '12+512',
      color: [
        {
          id: nanoid(), name: '白', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6099.00',
        },
        {
          id: nanoid(), name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6199.00',
        },
        {
          id: nanoid(), name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6299.00',
        },
        {
          id: nanoid(), name: '蓝', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '5999.00',
        },
      ],
    },
    {
      id: nanoid(),
      attrName: '16+512',
      color: [
        {
          id: nanoid(), name: '白', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6699.00',
        },
        {
          id: nanoid(), name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6799.00',
        },
        {
          id: nanoid(), name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6899.00',
        },
        {
          id: nanoid(), name: '蓝', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6999.00',
        },
      ],
    },
  ],
  gifts: [
    {
      id: nanoid(),
      name: '小米音响',
      imgSrc: 'https://img12.360buyimg.com/n1/s25x25_jfs/t1/82667/20/26577/52707/64364acdFd287f3b7/cc90804818e3bde7.jpg',
    },
    {
      id: nanoid(),
      name: '无忧卡',
      imgSrc: 'https://img14.360buyimg.com/n1/s25x25_jfs/t1/128391/15/32260/65048/638ef217Ec4e5e990/f423cd73bf3e4e89.jpg',
    },
  ],
};

const VDetails:React.FC = () => {
  console.log(phoneAttrs);
  return (
    <div className={classes.root}>
      <ShopTop />
      <PhoneNav />
      <div className={classes.detail}>
        <ImgPreview imgList={goodInfo.attr[0].color} />
        <GoodDetails goodInfo={goodInfo} />
      </div>
    </div>
  );
};

export default VDetails;
