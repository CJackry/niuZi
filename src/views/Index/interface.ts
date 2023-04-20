export interface NavList {
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

export interface SecKillList {
  name: string;
  price: string;
  link: string;
  imgSrc: string;
}

export interface CommonData {
  hotWords: Array<HotWords>;
  serviceItem: Array<ServiceItem>;
  navList: Array<NavList>;
  secKillList: Array<SecKillList>;
}
