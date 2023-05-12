export interface NavItem {
  name: string;
  link: string;
}

export interface ServiceItem {
  name: string;
  imgSrc: string;
  active_img: string
}

export interface HotWords {
  name: string;
  link: string;
}

export interface SecKillItem {
  id: string;
  name: string;
  price: string;
  link: string;
  imgSrc: string;
}

export interface CommonData {
  hotWords: Array<HotWords>;
  serviceItem: Array<ServiceItem>;
  navList: Array<Array<NavItem>>;
  secKillList: Array<SecKillItem>;
}
