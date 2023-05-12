// 用于将数值转化为两位字符串，如0->'00'
import clientRequest from '@/src/utils/http-client';
import { CommonData } from '@/src/views/Index/interface';

export function numToStringDouble(num:number) {
  if (num < 10) return `0${String(num)}`;
  return String(num);
}

export const getStaticData = async () => clientRequest<CommonData>({ url: '/api/getStaticData' });

export const getWidth = () => (window ? window.innerWidth : null);
