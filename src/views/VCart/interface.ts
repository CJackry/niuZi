import { Gift } from '@/src/views/VDetails/interface';

export interface Attr{
  attr1: string,
  attr2: string,
  others?: Array<Attr>,
}

export interface CartInfo{
  id: string,
  title: string,
  attr: Attr,
  price: string,
  amount: number,
  imgSrc: string,
  gifts: Array<Gift>
}
