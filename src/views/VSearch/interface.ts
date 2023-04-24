export interface Color{
    name: string,
    img_link: string
}
export interface Shop{
    name: string,
    link: string
}
export interface Phone{
    title:string,
    price:string,
    color: Array<Color>,
    commits: string,
    shop: Shop,
}
export interface PhoneInfo{
    phone: Array<Phone>,
    total: number,
}
