/* eslint-disable */
import { GoodInfo } from '@/src/views/VDetails/interface';
import { nanoid } from 'nanoid';
import {CartInfo} from "@/src/views/VCart/interface";
import {UserAddress} from "@/src/views/VPay/interface";

// 在这里使用函数来返回以防调用goodInfo的时候，只调用一次nanoid导致所有的id都是一样的。
const genNanoid = ()=>nanoid();

export const goodInfo:GoodInfo = {
  title: '小米13 徕卡光学镜头 第二代骁龙8处理器 超窄边屏幕 120Hz高刷 67W快充',
  attr: [
    {
      id: 'fjkgadsflasdnik',
      attrName: '8+128',
      color: [
        {
          id: 'fjnaskdfbdufjklabfd', name: '白', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 4599.00,
        },
        {
          id: 'gsdfgsdfgsdfgs', name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 4699.00,
        },
        {
          id: 'gsdfghshsfhgsfdg', name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 4799.00,
        },
        {
          id: 'bsfgm45q2345v3', name: '蓝', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 4499.00,
        },
      ],
    },
    {
      id: 'gasdfgasldhvn8om',
      attrName: '12+256',
      color: [
        {
          id: '895gvu89nmth8wer', name: '白', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 5099.00,
        },
        {
          id: '5n89352y6gvo', name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 5199.00,
        },
        {
          id: 'gv8m90j345y2896n', name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 5299.00,
        },
        {
          id: 'v349ny327r8932dfh2', name: '蓝', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 4999.00,
        },
      ],
    },
    {
      id: 'v7nvy58g3wr78t6yr9',
      attrName: '12+512',
      color: [
        {
          id: 'v5yn93475t89y', name: '白', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 6099.00,
        },
        {
          id: '89pmbg69034bgv5u', name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 6199.00,
        },
        {
          id: '56hb90k3iu54y9t8jmu', name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 6299.00,
        },
        {
          id: 'r34v7no8t5vy73824ryf', name: '蓝', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 5999.00,
        },
      ],
    },
    {
      id: 't890j4y5f8974rfrt',
      attrName: '16+512',
      color: [
        {
          id: '4gvy905tn7284y5fg9', name: '白', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 6699.00,
        },
        {
          id: '5u2rj8034u5rt084f', name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 6799.00,
        },
        {
          id: '5yn84g3789frhw7', name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 6899.00,
        },
        {
          id: 'jft89uyhn8erusofge', name: '蓝', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 6999.00,
        },
      ],
    },
  ],
  gifts: [
    {
      id: 'r8ny4fw8e7q9y8ew7',
      name: '小米音响',
      imgSrc: 'https://img12.360buyimg.com/n1/s25x25_jfs/t1/82667/20/26577/52707/64364acdFd287f3b7/cc90804818e3bde7.jpg',
    },
    {
      id: 'rtjm89g4yoqw7n9wefscg',
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

export const addrList:Array<UserAddress> = [
  {
    label: '夏亚',
    name: '夏亚',
    address: {
      province: '湖南',
      city: '长沙',
      area: '岳麓区',
      street: '坪塘街道',
      detail: '岳麓大道569号湖南工商大学贤德10栋'
    },
    isDefault: true,
  }
]