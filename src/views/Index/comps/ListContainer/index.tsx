import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import Link from 'next/link';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';
import { nanoid } from 'nanoid';
import { NavList, ServiceItem } from '@/src/views/Index/data';
import classes from './ListContainer.module.scss';

type Props = {
  navList?:NavList,
  serviceItem?: ServiceItem,
}

const ListContainer:React.FC<Props> = ({ navList, serviceItem }) => (
  <div className={classes.root}>
    <div className={`${classes.grid_c1} ${classes.fs_inner}`}>
      <div className={classes.fs_col1}>
        <div className={classes.cate}>
          <ul className={classes.cate_menu}>
            {navList ? navList.map((items) => (
              <li className={classes.cate_menu_item} key={nanoid()}>
                {items.map((item, index) => (
                  <Fragment key={nanoid()}>
                    <Link target="_blank" className={classes.cate_menu_lk} href={item.link}>
                      {item.name}
                    </Link>
                    {index < items.length - 1 ? <span className={classes.cate_menu_line}>/</span> : ''}
                  </Fragment>
                ))}
              </li>
            )) : (<div>没收到navList</div>)}
          </ul>
        </div>
      </div>
      <div className={classes.fs_col2}>
        <div className={classes.focus}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{
              enabled: true,
              type: 'bullets',
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
          >
            <SwiperSlide>
              <img className="focus-item-img" src="/banners/banner1.png" alt="banner1" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="focus-item-img" src="/banners/banner2.png" alt="banner2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="focus-item-img" src="/banners/banner3.png" alt="banner3" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={classes.sliderRecommendWrapper}>
          {/* 这里放当分辨率足够时扩展的一组轮播图 */}
          <div className={classes.slider} />
        </div>
      </div>
      <div className={classes.fs_col3}>
        <div className={`${classes.user}`}>
          <div className={classes.user_inner}>
            <div className={classes.user_avatar}>
              <Link className={classes.user_avatar_lk} href="/login">
                <img src="/avator.png" alt="avator" />
              </Link>
            </div>
            <div className={classes.user_show}>
              <Link className={classes.user_tip} href="https://www.jd.com">Hi~欢迎逛京东！</Link>
              <p>
                <Link className={classes.user_login} href="/login">登录</Link>
                |
                <Link className={classes.user_reg} href="/register">注册</Link>
              </p>
            </div>
            <div className={classes.user_profit}>
              <Link className={classes.user_profit_lk} href="https://www.jd.com">新人福利</Link>
              <Link className={`${classes.user_profit_lk} ${classes.user_profit_lk_plus}`} href="https://www.jd.com">
                PLUS
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.news}>
          <div className={classes.news2}>
            <div className={classes.news_hd}>
              <span className={classes.news_tit}>京东快报</span>
              <span className={classes.news_more}>更多</span>
            </div>
            <div className={classes.news_list}>
              <li className={classes.news_item}>
                <span className={classes.news_tag}>热议</span>
                强健肠道才是正经事，过来人宝妈真心话
              </li>
              <li className={classes.news_item}>
                <span className={classes.news_tag}>热议</span>
                强健肠道才是正经事，过来人宝妈真心话
              </li>
              <li className={classes.news_item}>
                <span className={classes.news_tag}>热议</span>
                强健肠道才是正经事，过来人宝妈真心话
              </li>
              <li className={classes.news_item}>
                <span className={classes.news_tag}>热议</span>
                强健肠道才是正经事，过来人宝妈真心话
              </li>
            </div>
          </div>
        </div>
        <div className={classes.service}>
          <div className={classes.service_entry}>
            <ul className={classes.service_list}>
              {serviceItem ? serviceItem.map((item) => (
                <li className={classes.service_item} key={nanoid()}>
                  <Link className={classes.service_lk} href="https://wallhaven.cc/">
                    <i className={classes.service_ico}>
                      <img className={classes.service_default} src={item.imgSrc} alt="active_img" />
                      <img className={classes.service_active} src={item.active_img} alt="active_img" />
                    </i>
                    <span className={classes.service_text}>{item.name}</span>
                  </Link>
                </li>
              )) : (<div>没收到serviceItem</div>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ListContainer;
