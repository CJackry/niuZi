import { Gift } from '@/src/views/VDetails/interface';

export interface Attrs{
  id: string,
  name: string,
}

export interface CartInfo{
  id: string,
  title: string,
  attrs: Array<Attrs>,
  price: string,
  amount: number,
  imgSrc: string,
  gifts: Array<Gift>
}
