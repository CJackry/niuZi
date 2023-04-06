import React from 'react';
import classes from './ListContainer.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';


function ListContainer() {
    return (
        <div className={classes.root}>
            <div className={`${classes.grid_c1} ${classes.fs_inner}`}>
                <div className={classes.fs_col1}>
                    <div className={classes.cate}>
                        <ul className={classes.cate_menu}>
                            <li className={classes.cate_menu_item} data-index="1">
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//pro.jd.com/mall/active/2vx2zyXR2KhRouYS6LrSEdnLF1P5/index.html">家用电器</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="2">
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//search.jd.com/Search?keyword=%E6%89%8B%E6%9C%BA&amp;enc=utf-8&amp;wq=%E6%89%8B%E6%9C%BA&amp;pvid=8858151673f941e9b1a4d2c7214b2b52">手机</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//pro.jd.com/mall/active/hEFfzNmUqhjLxLgGCcpbDXSMYkP/index.html?babelChannel=ttt49">运营商</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk} href="//shuma.jd.com/">数码</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="3">
                                <a target="_blank" className={classes.cate_menu_lk} href="//diannao.jd.com/">电脑</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//prodev.jd.com/mall/active/3Sn1bAr73mUmVRFTHwgi8emZmd3Y/index.html?babelChannel=ttt3">办公</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="4">
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//channel.jd.com/home.html">家居</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//channel.jd.com/furniture.html">家具</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//search.jd.com/Search?keyword=%E5%AE%89%E8%A3%85&amp;enc=utf-8&amp;wq=%E5%AE%89%E8%A3%85&amp;pvid=97bb21465c894defaccfc1f197896150">家装</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//search.jd.com/Search?keyword=%E5%8E%A8%E5%85%B7&amp;enc=utf-8&amp;wq=%E5%8E%A8%E5%85%B7&amp;pvid=7bdf296458744f4d8d17be5fbdaed59a">厨具</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="5">
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//prodev.jd.com/mall/active/32EphPL81Mb6FD4qLCTtYmd31YXr/index.html">男装</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//prodev.jd.com/mall/active/DpSh7ma8JV7QAxSE2gJNro8Q2h9/index.html?babelChannel=ttt56">女装</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//pro.jd.com/mall/active/3Af6mZNcf5m795T8dtDVfDwWVNhJ/index.html">童装</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//pro.jd.com/mall/active/4PgpL1xqPSW1sVXCJ3xopDbB1f69/index.html">内衣</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="6">
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//prodev.jd.com/mall/active/2kmaPNrGDNYo1LKwYtRoaSmsgbj6/index.html">美妆</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//phat.jd.com/10-816.html">个护清洁</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//channel.jd.com/pet.html">宠物</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="7">
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//prodev.jd.com/mall/active/4RXyb1W4Y986LJW8ToqMK14BdTD/index.html?babelChannel=ttt47">女鞋</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//prodev.jd.com/mall/active/ZrH7gGAcEkY2gH8wXqyAPoQgk6t/index.html?babelChannel=ttt4">箱包</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//pro.jd.com/mall/active/2BcJPCVVzMEtMUynXkPscCSsx68W/index.html">钟表</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//pro.jd.com/mall/active/22DpAdd48C4fU3cBRkeYSM87WhWV/index.html?babelChannel=ttt148">珠宝</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="8">
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//prodev.jd.com/mall/active/4RXyb1W4Y986LJW8ToqMK14BdTD/index.html?babelChannel=ttt47">男鞋</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//phat.jd.com/10-109.html">运动</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//pro.jd.com/mall/active/2MG8bJwgHvAqAZ9PamfCp3pDuthL/index.html">户外</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="9">
                                <a target="_blank" className={classes.cate_menu_lk} href="//xinfang.jd.com/">房产</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk} href="//car.jd.com/">汽车</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk} href="//che.jd.com/">汽车用品</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="10">
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//search.jd.com/Search?keyword=%E6%AF%8D%E5%A9%B4&amp;enc=utf-8&amp;wq=%E6%AF%8D%E5%A9%B4&amp;pvid=3e86f063795740d594b1bb1187e02063">母婴</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//search.jd.com/Search?keyword=%E7%8E%A9%E5%85%B7%E4%B9%90%E5%99%A8&amp;enc=utf-8&amp;wq=%E7%8E%A9%E5%85%B7%E4%B9%90%E5%99%A8&amp;pvid=6acae74f0ea34c6a8db6b5563f1a24d1">玩具乐器</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="11">
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//search.jd.com/Search?keyword=%E9%A3%9F%E5%93%81&amp;enc=utf-8&amp;wq=%E9%A3%9F%E5%93%81&amp;pvid=b22bb1ad1cb045aa989753d21f73c228">食品</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk} href="//jiu.jd.com">酒类</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk} href="//fresh.jd.com">生鲜</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk} href="//china.jd.com/">特产</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="12">
                                <a target="_blank" className={classes.cate_menu_lk} href="//art.jd.com">艺术</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//search.jd.com/Search?keyword=%E9%B2%9C%E8%8A%B1&amp;enc=utf-8&amp;wq=%E9%B2%9C%E8%8A%B1&amp;pvid=0aad3e1477ad46829f14f3cb19b25b0a">礼品鲜花</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//prodev.jd.com/mall/active/CYivQ3Q2U5zCcgqGDXeGzzWn5XF/index.html">农牧园艺</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="13">
                                <a target="_blank" className={classes.cate_menu_lk} href="//health.jd.com/">医药保健</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//search.jd.com/Search?keyword=%E8%AE%A1%E7%94%9F%E6%83%85%E8%B6%A3&amp;enc=utf-8&amp;wq=%E8%AE%A1%E7%94%9F%E6%83%85%E8%B6%A3&amp;pvid=e8284db88df24f919dfc31e5536bbf64">计生情趣</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="14">
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//pro.jd.com/mall/active/3sAaxodHF7kfo3s95cjxo2UZUxu2/index.html">图书</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//pro.jd.com/mall/active/2TxxbZnqAm7M8tkDpTN3VJNtoSKo/index.html">文娱</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//search.jd.com/Search?keyword=%E6%95%99%E8%82%B2%E5%9F%B9%E8%AE%AD%E8%AF%BE%E7%A8%8B&amp;enc=utf-8&amp;wq=%E6%95%99%E8%82%B2%E5%9F%B9%E8%AE%AD%E8%AF%BE%E7%A8%8B&amp;pvid=04dff2bdd3694c96ab68337e9fc4c6b2">教育</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//e.jd.com/ebook.html">电子书</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="15">
                                <a target="_blank" className={classes.cate_menu_lk} href="//jipiao.jd.com/">机票</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk} href="//hotel.jd.com/">酒店</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//pro.jd.com/mall/active/zMyuWCEMidq8GZQjgxwm4G8LRC7/index.html">旅游</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk} href="//ish.jd.com/">生活</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="16">
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//www.jdpay.com/home/">支付</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk} href="//baitiao.jd.com">白条</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//pro.jd.com/mall/active/2bgLe2uLsTUb3MmuvRxmiA2vP38J/index.html?bxFromId=JDAPP&amp;bxplace=bxpdpcsm">保险</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//qyjr.jddglobal.com/ ">企业金融</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="17">
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//search.jd.com/Search?keyword=安装&amp;enc=utf-8&amp;wq=安装&amp;pvid=97bb21465c894defaccfc1f197896150">安装</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//search.jd.com/Search?keyword=维修&amp;enc=utf-8&amp;wq=维修&amp;pvid=eba9b7454da0494c960f074db37be847">维修</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk}
                                   href="//search.jd.com/Search?keyword=%E6%B8%85%E6%B4%97&amp;enc=utf-8&amp;wq=%E6%B8%85%E6%B4%97&amp;pvid=5b8c10e5e1d242fa931e2c6bca2e4624">清洗</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk} href="//2.jd.com/">二手</a>
                            </li>
                            <li className={classes.cate_menu_item} data-index="18">
                                <a target="_blank" className={classes.cate_menu_lk} href="//imall.jd.com">工业品</a>
                                <span className={classes.cate_menu_line}>/</span>
                                <a target="_blank" className={classes.cate_menu_lk} href="//ic.jd.com">元器件</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.fs_col2}>
                    <div className={classes.focus}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation={true}
                            pagination={{
                                enabled: true,
                                type: 'bullets',
                                clickable: true
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            autoplay={{
                                delay: 3000,
                                pauseOnMouseEnter: true
                            }}
                        >
                            <SwiperSlide>
                                <img className="focus-item-img"
                                     src="//img14.360buyimg.com/pop/s590x470_jfs/t1/159261/1/22904/49343/6423d6acF78dc7ad8/2e1992c2933fbca3.jpg.webp"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="focus-item-img"
                                     src="//imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000366/10052592055438/FocusFullshop/CkNqZnMvdDEvMjIxNjM1LzYvMTEzNTEvMTIzNjI0LzYyOGQyOTRiRWU1YTFiNzUxLzNiZjc0MjFiNzVlYmFmMTQuanBnEgo5OTktdHlfMF8xMAE47ot6WI7ptunIpAI/cr/s/q.jpg"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="focus-item-img"
                                     src="//imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000367/100024815874/FocusFullshop/CkJqZnMvdDEvMTk2MDkxLzEvMzMzNjcvNjAwOTEvNjQxYTA0NTZGYjMzMTYzZjQvZDdiMWRjMzQ3Y2MxYjdmMC5wbmcSCTUtdHlfMF81NjACOO-LekIWChLkuZDnuq_niZvlpbbkubPlk4EQAUIPCgvnp5LmnYDku7c4NxACQhAKDOeri-WNs-aKoui0rRAGQgoKBuS8mOi0qBAHWIKixs_0Ag/cr/s/q.jpg"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={classes.sliderRecommendWrapper}>
                        {/*这里放当分辨率足够时扩展的一组轮播图*/}
                        <div className={classes.slider}>
                        </div>
                    </div>
                </div>
                <div className={classes.fs_col3}>
                    <div className={`${classes.user}`}>
                        <div className={classes.user_inner}>
                            <div className={classes.user_avatar}>
                                <a className={classes.user_avatar_lk}>
                                    <img src='data:image/png;base64,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' />
                                </a>
                            </div>
                            <div className={classes.user_show}>
                                <a className={classes.user_tip}>Hi~欢迎逛京东！</a>
                                <p>
                                    <a className={classes.user_login}>登录</a> |
                                    <a className={classes.user_reg}>注册</a>
                                </p>
                            </div>
                            <div className={classes.user_profit}>
                                <a className={classes.user_profit_lk}>新人福利</a>
                                <a className={`${classes.user_profit_lk} ${classes.user_profit_lk_plus}`}>PLUS</a>
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
                                <li className={classes.service_item}>
                                    <a className={classes.service_lk}>
                                        <i className={classes.service_ico}>
                                            <img src='https://m.360buyimg.com/babel/jfs/t1/40738/20/14562/826/5d773a01E09eb8121/d6f3909618c6307a.png' />
                                            {/*<img src='https://m.360buyimg.com/babel/jfs/t1/45316/3/388/884/5cd4f25eEea4c67ed/671f7c186c5e9b01.png' />*/}
                                        </i>
                                        <span className={classes.service_text}>企业购</span>
                                    </a>
                                </li>
                                <li className={classes.service_item}>
                                    <a className={classes.service_lk}>
                                        <i className={classes.service_ico}>
                                            <img src='https://m.360buyimg.com/babel/jfs/t1/40738/20/14562/826/5d773a01E09eb8121/d6f3909618c6307a.png' />
                                            {/*<img src='https://m.360buyimg.com/babel/jfs/t1/45316/3/388/884/5cd4f25eEea4c67ed/671f7c186c5e9b01.png' />*/}
                                        </i>
                                        <span className={classes.service_text}>企业购</span>
                                    </a>
                                </li>
                                <li className={classes.service_item}>
                                    <a className={classes.service_lk}>
                                        <i className={classes.service_ico}>
                                            <img src='https://m.360buyimg.com/babel/jfs/t1/40738/20/14562/826/5d773a01E09eb8121/d6f3909618c6307a.png' />
                                            {/*<img src='https://m.360buyimg.com/babel/jfs/t1/45316/3/388/884/5cd4f25eEea4c67ed/671f7c186c5e9b01.png' />*/}
                                        </i>
                                        <span className={classes.service_text}>企业购</span>
                                    </a>
                                </li>
                                <li className={classes.service_item}>
                                    <a className={classes.service_lk}>
                                        <i className={classes.service_ico}>
                                            <img src='https://m.360buyimg.com/babel/jfs/t1/40738/20/14562/826/5d773a01E09eb8121/d6f3909618c6307a.png' />
                                            {/*<img src='https://m.360buyimg.com/babel/jfs/t1/45316/3/388/884/5cd4f25eEea4c67ed/671f7c186c5e9b01.png' />*/}
                                        </i>
                                        <span className={classes.service_text}>企业购</span>
                                    </a>
                                </li>
                                <li className={classes.service_item}>
                                    <a className={classes.service_lk}>
                                        <i className={classes.service_ico}>
                                            <img src='https://m.360buyimg.com/babel/jfs/t1/40738/20/14562/826/5d773a01E09eb8121/d6f3909618c6307a.png' />
                                            {/*<img src='https://m.360buyimg.com/babel/jfs/t1/45316/3/388/884/5cd4f25eEea4c67ed/671f7c186c5e9b01.png' />*/}
                                        </i>
                                        <span className={classes.service_text}>企业购</span>
                                    </a>
                                </li>
                                <li className={classes.service_item}>
                                    <a className={classes.service_lk}>
                                        <i className={classes.service_ico}>
                                            <img src='https://m.360buyimg.com/babel/jfs/t1/40738/20/14562/826/5d773a01E09eb8121/d6f3909618c6307a.png' />
                                            {/*<img src='https://m.360buyimg.com/babel/jfs/t1/45316/3/388/884/5cd4f25eEea4c67ed/671f7c186c5e9b01.png' />*/}
                                        </i>
                                        <span className={classes.service_text}>企业购</span>
                                    </a>
                                </li>
                                <li className={classes.service_item}>
                                    <a className={classes.service_lk}>
                                        <i className={classes.service_ico}>
                                            <img src='https://m.360buyimg.com/babel/jfs/t1/40738/20/14562/826/5d773a01E09eb8121/d6f3909618c6307a.png' />
                                            {/*<img src='https://m.360buyimg.com/babel/jfs/t1/45316/3/388/884/5cd4f25eEea4c67ed/671f7c186c5e9b01.png' />*/}
                                        </i>
                                        <span className={classes.service_text}>企业购</span>
                                    </a>
                                </li>
                                <li className={classes.service_item}>
                                    <a className={classes.service_lk}>
                                        <i className={classes.service_ico}>
                                            <img src='https://m.360buyimg.com/babel/jfs/t1/40738/20/14562/826/5d773a01E09eb8121/d6f3909618c6307a.png' />
                                            {/*<img src='https://m.360buyimg.com/babel/jfs/t1/45316/3/388/884/5cd4f25eEea4c67ed/671f7c186c5e9b01.png' />*/}
                                        </i>
                                        <span className={classes.service_text}>企业购</span>
                                    </a>
                                </li>
                                <li className={classes.service_item}>
                                    <a className={classes.service_lk}>
                                        <i className={classes.service_ico}>
                                            <img src='https://m.360buyimg.com/babel/jfs/t1/40738/20/14562/826/5d773a01E09eb8121/d6f3909618c6307a.png' />
                                            {/*<img src='https://m.360buyimg.com/babel/jfs/t1/45316/3/388/884/5cd4f25eEea4c67ed/671f7c186c5e9b01.png' />*/}
                                        </i>
                                        <span className={classes.service_text}>企业购</span>
                                    </a>
                                </li>
                                <li className={classes.service_item}>
                                    <a className={classes.service_lk}>
                                        <i className={classes.service_ico}>
                                            <img src='https://m.360buyimg.com/babel/jfs/t1/40738/20/14562/826/5d773a01E09eb8121/d6f3909618c6307a.png' />
                                            {/*<img src='https://m.360buyimg.com/babel/jfs/t1/45316/3/388/884/5cd4f25eEea4c67ed/671f7c186c5e9b01.png' />*/}
                                        </i>
                                        <span className={classes.service_text}>企业购</span>
                                    </a>
                                </li>
                                <li className={classes.service_item}>
                                    <a className={classes.service_lk}>
                                        <i className={classes.service_ico}>
                                            <img src='https://m.360buyimg.com/babel/jfs/t1/40738/20/14562/826/5d773a01E09eb8121/d6f3909618c6307a.png' />
                                            {/*<img src='https://m.360buyimg.com/babel/jfs/t1/45316/3/388/884/5cd4f25eEea4c67ed/671f7c186c5e9b01.png' />*/}
                                        </i>
                                        <span className={classes.service_text}>企业购</span>
                                    </a>
                                </li>
                                <li className={classes.service_item}>
                                    <a className={classes.service_lk}>
                                        <i className={classes.service_ico}>
                                            <img src='https://m.360buyimg.com/babel/jfs/t1/40738/20/14562/826/5d773a01E09eb8121/d6f3909618c6307a.png' />
                                            {/*<img src='https://m.360buyimg.com/babel/jfs/t1/45316/3/388/884/5cd4f25eEea4c67ed/671f7c186c5e9b01.png' />*/}
                                        </i>
                                        <span className={classes.service_text}>企业购</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListContainer;