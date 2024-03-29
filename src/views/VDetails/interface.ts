export interface Gift{
    id: string,
    name: string,
    imgSrc?: string
}
export interface Color{
    id: string,
    name: string,
    imgSrc: string,
    price: number
}
export interface GoodAttr{
    id: string,
    attrName: string,
    color: Array<Color>,
}
export interface Price{
    price: number,
    attr: GoodAttr,
}
export interface GoodInfo{
    title: string,
    attr: Array<GoodAttr>,
    gifts: Array<Gift>,
    weight: number,
}

export interface GoodBigImg{
    name: string,
    imgSrc: string,
}

export interface CartAttr{
    id: string,
    imgSrc: string,
    title: string,
    color: string,
    version: string,
    price: number,
    isChecked: boolean,
    amount: number,
    gifts: Array<Gift> | null,
    weight: number,
}

export interface AddCartInfo {
    cart: Array<CartAttr>;
    user: string,
}
