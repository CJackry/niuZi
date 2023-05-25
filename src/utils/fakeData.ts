/* eslint-disable */
import { GoodInfo } from '@/src/views/VDetails/interface';
import { nanoid } from 'nanoid';
import {CartInfo} from "@/src/views/VCart/interface";

// 在这里使用函数来返回以防调用goodInfo的时候，只调用一次nanoid导致所有的id都是一样的。
const genNanoid = ()=>nanoid();

export const goodInfo:GoodInfo = {
  title: '小米13 徕卡光学镜头 第二代骁龙8处理器 超窄边屏幕 120Hz高刷 67W快充',
  attr: [
    {
      id: genNanoid(),
      attrName: '8+128',
      color: [
        {
          id: genNanoid(), name: '白', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '4599.00',
        },
        {
          id: genNanoid(), name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '4699.00',
        },
        {
          id: genNanoid(), name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '4799.00',
        },
        {
          id: genNanoid(), name: '蓝', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '4499.00',
        },
      ],
    },
    {
      id: genNanoid(),
      attrName: '12+256',
      color: [
        {
          id: genNanoid(), name: '白', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '5099.00',
        },
        {
          id: genNanoid(), name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '5199.00',
        },
        {
          id: genNanoid(), name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '5299.00',
        },
        {
          id: genNanoid(), name: '蓝', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '4999.00',
        },
      ],
    },
    {
      id: genNanoid(),
      attrName: '12+512',
      color: [
        {
          id: genNanoid(), name: '白', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6099.00',
        },
        {
          id: genNanoid(), name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6199.00',
        },
        {
          id: genNanoid(), name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6299.00',
        },
        {
          id: genNanoid(), name: '蓝', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '5999.00',
        },
      ],
    },
    {
      id: genNanoid(),
      attrName: '16+512',
      color: [
        {
          id: genNanoid(), name: '白', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6699.00',
        },
        {
          id: genNanoid(), name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6799.00',
        },
        {
          id: genNanoid(), name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6899.00',
        },
        {
          id: genNanoid(), name: '蓝', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: '6999.00',
        },
      ],
    },
  ],
  gifts: [
    {
      id: genNanoid(),
      name: '小米音响',
      imgSrc: 'https://img12.360buyimg.com/n1/s25x25_jfs/t1/82667/20/26577/52707/64364acdFd287f3b7/cc90804818e3bde7.jpg',
    },
    {
      id: genNanoid(),
      name: '无忧卡',
      imgSrc: 'https://img14.360buyimg.com/n1/s25x25_jfs/t1/128391/15/32260/65048/638ef217Ec4e5e990/f423cd73bf3e4e89.jpg',
    },
  ],
};

export const cartList:Array<CartInfo> = [
    {
  id: genNanoid(),
  title: 'xiaomi 13',
  attrs: [
    {
      id: genNanoid(),
      name: '白色',
    },
    {
      id: genNanoid(),
      name: '12+512',
    },
  ],
  price: '4999.00',
  amount: 1,
  // eslint-disable-next-line max-len
  imgSrc: 'https://img30.360buyimg.com/n0/s80x80_jfs/t1/154028/32/33653/29617/644b6af1F307f6c98/422054c23c1e58f2.jpg.dpg',
  gifts: [
    {
      name: '小爱音箱',
      id: genNanoid(),
    },
    {
      name: '无忧卡',
      id: genNanoid(),
    },
  ],
  isChecked: false,
},
  {
    id: genNanoid(),
    title: 'xiaomi 13',
    attrs: [
      {
        id: genNanoid(),
        name: '白色',
      },
      {
        id: genNanoid(),
        name: '12+512',
      },
    ],
    price: '4999.00',
    amount: 1,
    // eslint-disable-next-line max-len
    imgSrc: 'https://img30.360buyimg.com/n0/s80x80_jfs/t1/154028/32/33653/29617/644b6af1F307f6c98/422054c23c1e58f2.jpg.dpg',
    gifts: [
      {
        name: '小爱音箱',
        id: genNanoid(),
      },
      {
        name: '无忧卡',
        id: genNanoid(),
      },
    ],
    isChecked: false
  }];