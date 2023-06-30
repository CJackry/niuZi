import clientRequest from '@/src/utils/http-client';
import { CommonData } from '@/src/views/Index/interface';
import { CartAttr } from '@/src/views/VDetails/interface';
import { PayInfo } from '@/src/views/VPay/interface';

// 用于将数值转化为两位字符串，如0->'00'
export function numToStringDouble(num:number) {
  if (num < 10) return `0${String(num)}`;
  return String(num);
}

export const getStaticData = async () => clientRequest<CommonData>({ url: '/api/getStaticData' });

export const getWidth = () => (window ? window.innerWidth : null);

export const updateCartList = (cartList: Array<CartAttr>, user: string) => clientRequest({
  url: '/api/goods/addCart',
  data: { cart: cartList, user },
  method: 'post',
});

export const updatePay = (payInfo: PayInfo, user: string) => clientRequest({
  url: '',
  data: { payInfo, user },
  method: 'post',
});

export const priceToString = (price: number) => String(price.toFixed(2));

export const phoneModal = (phone: number) => {
  const p = String(phone);
  return `${p.slice(0, 3)}****${p.slice(7, 11)}`;
};

export const isSelectedCheck = (e: HTMLElement, val: string) => e.title === val;

export const arrayToString = (a: Array<string>) => {
  let aDetails = '';
  a.forEach((s) => { aDetails += `${s} `; });
  return aDetails;
};
