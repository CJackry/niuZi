export interface Address{
    province: string,
    city: string,
    area: string,
    street: string,
    detail: string,
}

export interface UserAddress{
    label: string,
    name: string,
    address: Address,
    isDefault: boolean;
}
