import { CartAttr } from '@/src/views/VDetails/interface';

export interface Address{
    province: string,
    city: string,
    area: string,
    street: string,
    detail: string,
}

export interface UserAddress{
    id: string,
    label: string,
    name: string,
    phone: number,
    address: Address,
    isDefault: boolean;
}

export interface PaySummery{
    totalPrice: number;
    express: number;
    addrInfo:{
        name: string,
        phone: number,
        addr: string,
    }
}
export interface PaySummeryProps{
    paySum: PaySummery;
}

export interface PayInfo{
    commodity?: Array<CartAttr>;
    userInfo: UserAddress;
    payment: string,
    delivery: string,
    price: {
        totalPrice: number,
        express: number,
    }
}
