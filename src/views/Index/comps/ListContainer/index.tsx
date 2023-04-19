import React, { Fragment, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import Link from 'next/link';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';
import { nanoid } from 'nanoid';
import { getStaticData } from '@/src/utils/commonFuns';
import classes from './ListContainer.module.scss';

// const getStaticData = async () => {
//   const res = await fetch('http://localhost:3000/api/getStaticData');
//   return res.json();
// };

/* eslint-disable max-len */
const ListContainer:React.FC = () => {
  const [navList, setNavList] = useState([[{ name: '', link: '' }]]);
  const [serviceItem, setServiceItem] = useState([{ name: '', imgSrc: '', active_img: '' }]);
  useEffect(() => {
    // getNavList().then((r) => setNavList(r.data));
    getStaticData('http://localhost:3000/api/getStaticData').then((r) => {
      const VNavList = r.data.navList;
      const VServiceItem = r.data.serviceItem;
      setNavList(VNavList);
      setServiceItem(VServiceItem);
    });
  }, []);
  return (
    <div className={classes.root}>
      <div className={`${classes.grid_c1} ${classes.fs_inner}`}>
        <div className={classes.fs_col1}>
          <div className={classes.cate}>
            <ul className={classes.cate_menu}>
              {navList.map((items) => (
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
              ))}
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
                <img
                  className="focus-item-img"
                  src="//img14.360buyimg.com/pop/s590x470_jfs/t1/159261/1/22904/49343/6423d6acF78dc7ad8/2e1992c2933fbca3.jpg.webp"
                  alt="banner1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="focus-item-img"
                  src="//imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000366/10052592055438/FocusFullshop/CkNqZnMvdDEvMjIxNjM1LzYvMTEzNTEvMTIzNjI0LzYyOGQyOTRiRWU1YTFiNzUxLzNiZjc0MjFiNzVlYmFmMTQuanBnEgo5OTktdHlfMF8xMAE47ot6WI7ptunIpAI/cr/s/q.jpg"
                  alt="banner2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="focus-item-img"
                  src="//imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000367/100024815874/FocusFullshop/CkJqZnMvdDEvMTk2MDkxLzEvMzMzNjcvNjAwOTEvNjQxYTA0NTZGYjMzMTYzZjQvZDdiMWRjMzQ3Y2MxYjdmMC5wbmcSCTUtdHlfMF81NjACOO-LekIWChLkuZDnuq_niZvlpbbkubPlk4EQAUIPCgvnp5LmnYDku7c4NxACQhAKDOeri-WNs-aKoui0rRAGQgoKBuS8mOi0qBAHWIKixs_0Ag/cr/s/q.jpg"
                  alt="banner3"
                />
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
                  <img src="/avator.png;" alt="avator" />
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
                <Link className={`${classes.user_profit_lk} ${classes.user_profit_lk_plus}`} href="https://www.jd.com">PLUS</Link>
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
                {serviceItem.map((item) => (
                  <li
                    className={classes.service_item}
                    key={nanoid()}
                  >
                    <Link
                      className={classes.service_lk}
                      href="https://wallhaven.cc/"
                    >
                      <i className={classes.service_ico}>
                        <img className={classes.service_default} src={item.imgSrc} alt="active_img" />
                        <img className={classes.service_active} src={item.active_img} alt="active_img" />
                      </i>
                      <span className={classes.service_text}>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContainer;
