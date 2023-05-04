export interface Gift{
    name: string,
    imgSrc: string
}
export interface Color{
    name: string,
    imgSrc: string,
    price: string
}
export interface GoodAttr{
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
