export interface Gift{
    id: string,
    name: string,
    imgSrc?: string
}
export interface Color{
    id: string,
    name: string,
    imgSrc: string,
    price: string
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
    gifts: Array<Gift>
}
