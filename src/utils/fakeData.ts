/* eslint-disable */
import {CartAttr, GoodBigImg, GoodInfo} from '@/src/views/VDetails/interface';
// import { nanoid } from 'nanoid';
import {PayInfo, UserAddress} from "@/src/views/VShopping/interface";
import {DealStatus} from "@/src/views/VShopping/comps/taskProgress/interface";

// 在这里使用函数来返回以防调用goodInfo的时候，只调用一次nanoid导致所有的id都是一样的。
// const genNanoid = ()=>nanoid();

export const goodInfo:GoodInfo = {
  title: '小米13 徕卡光学镜头 第二代骁龙8处理器 超窄边屏幕 120Hz高刷 67W快充',
  attr: [
    {
      id: 'fjkgadsflasdnik',
      attrName: '8+128',
      color: [
        {
          id: 'fjnaskdfbdufjklabfd', name: '白', imgSrc: 'https://img14.360buyimg.com/n1/s450x450_jfs/t1/113016/37/29857/14788/6395ab96E48131431/37e17dbc0020a668.jpg', price: 4599.00,
        },
        {
          id: 'gsdfgsdfgsdfgs', name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/192110/34/31853/13723/6395ab62Ed3266c2b/e7d7f61ca8d1d5ca.jpg', price: 4699.00,
        },
        {
          id: 'gsdfghshsfhgsfdg', name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 4799.00,
        },
        {
          id: 'bsfgm45q2345v3', name: '蓝', imgSrc: 'https://img11.360buyimg.com/n1/s450x450_jfs/t1/133091/15/29165/55562/6395a670Efc29f537/96d983a9e2c29996.jpg', price: 4499.00,
        },
      ],
    },
    {
      id: 'gasdfgasldhvn8om',
      attrName: '12+256',
      color: [
        {
          id: '895gvu89nmth8wer', name: '白', imgSrc: 'https://img14.360buyimg.com/n1/s450x450_jfs/t1/113016/37/29857/14788/6395ab96E48131431/37e17dbc0020a668.jpg', price: 5099.00,
        },
        {
          id: '5n89352y6gvo', name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/192110/34/31853/13723/6395ab62Ed3266c2b/e7d7f61ca8d1d5ca.jpg', price: 5199.00,
        },
        {
          id: 'gv8m90j345y2896n', name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 5299.00,
        },
        {
          id: 'v349ny327r8932dfh2', name: '蓝', imgSrc: 'https://img11.360buyimg.com/n1/s450x450_jfs/t1/133091/15/29165/55562/6395a670Efc29f537/96d983a9e2c29996.jpg', price: 4999.00,
        },
      ],
    },
    {
      id: 'v7nvy58g3wr78t6yr9',
      attrName: '12+512',
      color: [
        {
          id: 'v5yn93475t89y', name: '白', imgSrc: 'https://img14.360buyimg.com/n1/s450x450_jfs/t1/113016/37/29857/14788/6395ab96E48131431/37e17dbc0020a668.jpg', price: 6099.00,
        },
        {
          id: '89pmbg69034bgv5u', name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/192110/34/31853/13723/6395ab62Ed3266c2b/e7d7f61ca8d1d5ca.jpg', price: 6199.00,
        },
        {
          id: '56hb90k3iu54y9t8jmu', name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 6299.00,
        },
        {
          id: 'r34v7no8t5vy73824ryf', name: '蓝', imgSrc: 'https://img11.360buyimg.com/n1/s450x450_jfs/t1/133091/15/29165/55562/6395a670Efc29f537/96d983a9e2c29996.jpg', price: 5999.00,
        },
      ],
    },
    {
      id: 't890j4y5f8974rfrt',
      attrName: '16+512',
      color: [
        {
          id: '4gvy905tn7284y5fg9', name: '白', imgSrc: 'https://img14.360buyimg.com/n1/s450x450_jfs/t1/113016/37/29857/14788/6395ab96E48131431/37e17dbc0020a668.jpg', price: 6699.00,
        },
        {
          id: '5u2rj8034u5rt084f', name: '黑', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/192110/34/31853/13723/6395ab62Ed3266c2b/e7d7f61ca8d1d5ca.jpg', price: 6799.00,
        },
        {
          id: '5yn84g3789frhw7', name: '绿', imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg', price: 6899.00,
        },
        {
          id: 'jft89uyhn8erusofge', name: '蓝', imgSrc: 'https://img11.360buyimg.com/n1/s450x450_jfs/t1/133091/15/29165/55562/6395a670Efc29f537/96d983a9e2c29996.jpg', price: 6999.00,
        },
      ],
    },
  ],
  weight: 0.54,
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

export const goodBigImgList:Array<GoodBigImg> = [
  {
    name: '蓝',
    imgSrc: 'https://img14.360buyimg.com/n0/jfs/t1/133091/15/29165/55562/6395a670Efc29f537/96d983a9e2c29996.jpg',
  },
  {
    name: '白',
    imgSrc: 'https://img14.360buyimg.com/n0/jfs/t1/113016/37/29857/14788/6395ab96E48131431/37e17dbc0020a668.jpg',
  },
  {
    name: '黑',
    imgSrc: 'https://img14.360buyimg.com/n0/jfs/t1/192110/34/31853/13723/6395ab62Ed3266c2b/e7d7f61ca8d1d5ca.jpg',
  },
  {
    name: '绿',
    imgSrc: 'https://img14.360buyimg.com/n0/jfs/t1/85459/8/31187/17910/6395a615E9b756cd5/a8e25a5302f72b59.jpg',
  }
]

// export const cartList:Array<CartInfo> = [
//     {
//   id: genNanoid(),
//   title: 'xiaomi 13',
//   attrs: [
//     {
//       id: genNanoid(),
//       name: '白色',
//     },
//     {
//       id: genNanoid(),
//       name: '12+512',
//     },
//   ],
//   price: 4999,
//   amount: 1,
//   // eslint-disable-next-line max-len
//   imgSrc: 'https://img30.360buyimg.com/n0/s80x80_jfs/t1/154028/32/33653/29617/644b6af1F307f6c98/422054c23c1e58f2.jpg.dpg',
//   gifts: [
//     {
//       name: '小爱音箱',
//       id: genNanoid(),
//     },
//     {
//       name: '无忧卡',
//       id: genNanoid(),
//     },
//   ],
//   isChecked: false,
// },
//   {
//     id: genNanoid(),
//     title: 'xiaomi 13',
//     attrs: [
//       {
//         id: genNanoid(),
//         name: '白色',
//       },
//       {
//         id: genNanoid(),
//         name: '12+512',
//       },
//     ],
//     price: '4999.00',
//     amount: 1,
//     // eslint-disable-next-line max-len
//     imgSrc: 'https://img30.360buyimg.com/n0/s80x80_jfs/t1/154028/32/33653/29617/644b6af1F307f6c98/422054c23c1e58f2.jpg.dpg',
//     gifts: [
//       {
//         name: '小爱音箱',
//         id: genNanoid(),
//       },
//       {
//         name: '无忧卡',
//         id: genNanoid(),
//       },
//     ],
//     isChecked: false
//   }];

export const addrList:Array<UserAddress> = [
  {
    id: 'fjisfhonsoifsmfdlfkvifl',
    label: '夏亚',
    name: '夏亚',
    phone: 1564815323,
    address: {
      province: '省份',
      city: '城市',
      area: '地区',
      street: '街道',
      detail: '三附件是当年饭卡里说的'
    },
    isDefault: true,
  },
  {
    id: 'dasfbsdfsnfml',
    label: '学校',
    name: '阿姆罗',
    phone: 11761519958,
    address: {
      province: '省份',
      city: '城市',
      area: '地区',
      street: '街道',
      detail: '德纳省的NSA看到啦'
    },
    isDefault: false,
  },
  {
    id: 'fjsifnflkd',
    label: '学校',
    name: '阿姆罗',
    phone: 11761519958,
    address: {
      province: '省份',
      city: '城市',
      area: '地区',
      street: '街道',
      detail: '德纳省的NSA看到啦'
    },
    isDefault: false,
  },
  {
    id: 'oipjiongfdd',
    label: '学校',
    name: '阿姆罗',
    phone: 11761519958,
    address: {
      province: '省份',
      city: '城市',
      area: '地区',
      street: '街道',
      detail: '德纳省的NSA看到啦'
    },
    isDefault: false,
  },
  {
    id: 'fhduoghdsmkof;dl',
    label: '学校',
    name: '阿姆罗',
    phone: 11761519958,
    address: {
      province: '省份',
      city: '城市',
      area: '地区',
      street: '街道',
      detail: '德纳省的NSA看到啦'
    },
    isDefault: false,
  },
  {
    id: 'uqwiorywhqur',
    label: '学校',
    name: '阿姆罗',
    phone: 11761519958,
    address: {
      province: '省份',
      city: '城市',
      area: '地区',
      street: '街道',
      detail: '德纳省的NSA看到啦'
    },
    isDefault: false,
  }
]

export const testPayGoods: Array<CartAttr> = [
  {
    id: 'fjnaskdfgsdsfgdfgdddslabfd',
    imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg',
    title: '小米13 徕卡光学镜头 第二代骁龙8处理器 超窄边屏幕 120Hz高刷 67W快充',
    color: '白',
    version: '8+128',
    price: 4599,
    isChecked: false,
    amount: 1,
    gifts: [
      {
        name: '小米音箱',
        id: 'hrthhbdsfgvfd',
        imgSrc: 'demkmdfv;fx',
      },
      {
        name: '无忧卡',
        id: 'hrthhbdsfgvfd',
        imgSrc: 'demkmdfv;fx',
      },
    ],
    weight: 0.54,
  },
  {
    id: 'fjnaskdfbdqwwefsdufjklabfd',
    imgSrc: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/124212/39/32450/17910/6397e681Ed51d6065/68f5d63c18b1bfb7.jpg',
    title: '小米13 徕卡光学镜头 第二代骁龙8处理器 超窄边屏幕 120Hz高刷 67W快充',
    color: '白',
    version: '8+128',
    price: 4599,
    isChecked: false,
    amount: 1,
    gifts: [
      {
        name: '小米音箱',
        id: 'hrthhbdsfgvfd',
        imgSrc: 'demkmdfv;fx',
      },
      {
        name: '无忧卡',
        id: 'hrthhbdsfgvfd',
        imgSrc: 'demkmdfv;fx',
      },
    ],
    weight: 0.54,
  },
];

const defaultAddr = addrList.filter(addr=>addr.isDefault);

export const defaultPayInfo: PayInfo = {
  commodity: [],
  payment: '在线支付',
  userInfo: defaultAddr[0]||addrList[0],
  delivery: '京东快递',
  price:{
    totalPrice: 9999,
    express: 999,
  }
};

export const taskStatusArray: Array<DealStatus> = [
  {
    name: '我的购物车',
    partNum: 1,
    isFinish: 'done',
  },
  {
    name: '填写核对订单信息',
    partNum: 2,
    isFinish: 'doing',
  },
  {
    name: '成功提交订单',
    partNum: 3,
    isFinish: 'incomplete',
  },
];