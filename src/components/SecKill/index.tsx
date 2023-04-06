import React from 'react';
import classes from './SecKill.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/autoplay';

function SecKill() {
    return (
        <div className={classes.root}>
            <div className={classes.seckill}>
                <div className={classes.seckill_inner}>
                    <a className={classes.countdown}>
                        <strong className={classes.countdown_tit}>京东秒杀</strong>
                        <div>
                            <div className={classes.countdown_desc}>
                                <strong>99:99</strong>点场 距结束
                            </div>
                            <div className={classes.countdown_time}>
                                <span className={classes.countdown_hour}>99</span>
                                <span className={classes.countdown_dot}>:</span>
                                <span className={classes.countdown_min}>99</span>
                                <span className={classes.countdown_dot}>:</span>
                                <span className={classes.countdown_sec}>99</span>
                            </div>
                        </div>
                    </a>
                    <div className={classes.seckill_list}>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
                            spaceBetween={50}
                            slidesPerView={3}
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
                                <a className={classes.seckill_item}>
                                    <img src='https://img30.360buyimg.com/seckillcms/s140x140_jfs/t1/220722/9/21877/80908/6409c9feF94ce723f/6e595af164a71381.jpg.webp' />
                                    <h6>百事可乐 Pepsi  碳酸饮料整箱 300ml*12瓶 (新老包装随机发货) 百事出品</h6>
                                    <span>￥17.89</span>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className={classes.seckill_item}>
                                    <img src='https://img30.360buyimg.com/seckillcms/s140x140_jfs/t1/220722/9/21877/80908/6409c9feF94ce723f/6e595af164a71381.jpg.webp' />
                                    <h6>百事可乐 Pepsi  碳酸饮料整箱 300ml*12瓶 (新老包装随机发货) 百事出品</h6>
                                    <span>￥17.89</span>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className={classes.seckill_item}>
                                    <img src='https://img30.360buyimg.com/seckillcms/s140x140_jfs/t1/220722/9/21877/80908/6409c9feF94ce723f/6e595af164a71381.jpg.webp' />
                                    <h6>百事可乐 Pepsi  碳酸饮料整箱 300ml*12瓶 (新老包装随机发货) 百事出品</h6>
                                    <span>￥17.89</span>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className={classes.seckill_item}>
                                    <img src='https://img30.360buyimg.com/seckillcms/s140x140_jfs/t1/220722/9/21877/80908/6409c9feF94ce723f/6e595af164a71381.jpg.webp' />
                                    <h6>百事可乐 Pepsi  碳酸饮料整箱 300ml*12瓶 (新老包装随机发货) 百事出品</h6>
                                    <span>￥17.89</span>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className={classes.seckill_item}>
                                    <img src='https://img30.360buyimg.com/seckillcms/s140x140_jfs/t1/220722/9/21877/80908/6409c9feF94ce723f/6e595af164a71381.jpg.webp' />
                                    <h6>百事可乐 Pepsi  碳酸饮料整箱 300ml*12瓶 (新老包装随机发货) 百事出品</h6>
                                    <span>￥17.89</span>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a className={classes.seckill_item}>
                                    <img src='https://img30.360buyimg.com/seckillcms/s140x140_jfs/t1/220722/9/21877/80908/6409c9feF94ce723f/6e595af164a71381.jpg.webp' />
                                    <h6>百事可乐 Pepsi  碳酸饮料整箱 300ml*12瓶 (新老包装随机发货) 百事出品</h6>
                                    <span>￥17.89</span>
                                </a>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className={classes.seckill_brand}>
                        <a className={classes.brand_item}>
                            <img src="https://img12.360buyimg.com/seckillcms/s130x130_jfs/t1/52541/32/20117/44501/6408b31dFf21f2750/39b153404c30f6b3.jpg.webp" />
                            <div className={classes.item_info}>
                                <p className={classes.brand_tit}>箱包品类秒杀</p>
                                <p className={classes.brand_promo}>低至5折</p>
                                <span className={classes.item_info_action}>品类秒杀</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecKill;