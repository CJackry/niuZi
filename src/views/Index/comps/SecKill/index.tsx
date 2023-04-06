import React, {useState} from 'react';
import classes from './SecKill.module.scss'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar} from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

function SecKill() {

    function numToStringDouble(num:number){
        if(num<10) return "0"+String(num);
        else    return String(num);
    }

    const myDate:Date = new Date();
    const secKillTime:Array<number> = [10, 12, 19, 21, 22, 24];
    const [leftTime, setLeftTime] = useState({hour: "00", min: "00", sec: "00"});
    let secIndex:number = 0;
    const [secKillHour, setSecKillHour] = useState(-1);
    const hour:number = myDate.getHours();


    React.useEffect(()=>{
        if(hour < secKillTime[secKillTime.length-1]){
            for(let i=0; i < secKillTime.length-1; i++){
                if(hour < secKillTime[i]){
                    setSecKillHour(secKillTime[i]);
                    secIndex = i;
                    break;
                }
            }
        }else{
            setSecKillHour(secKillTime[0]);
            secIndex = 0;
        }
        let leftHour = secKillHour - myDate.getHours() - 1;
        let leftMin = 60 - myDate.getMinutes() - 1;
        let leftSec = 60 - myDate.getSeconds();
        const secKillTimer = setTimeout(()=>{
            if(leftSec>=1)   leftSec--;
            else if(leftMin >= 1){
                leftSec = 59;
                leftMin--;
            }else if(leftMin <= 0 && leftHour >= 1){
                leftSec = 59;
                leftMin = 59;
                leftHour--;
            }
            if(leftSec===0&&leftMin===0&&leftHour===0){
                if(secIndex === secKillTime.length-1)   secIndex = 0;
                else    secIndex++;
                setSecKillHour(secKillTime[secIndex]);
            }
            setLeftTime({hour: numToStringDouble(leftHour), sec: numToStringDouble(leftSec), min: numToStringDouble(leftMin)});
        }, 1000);
        return ()=>{
            clearTimeout(secKillTimer);
        }
    }, [leftTime])
    return (
        <div className={classes.root}>
            <div className={classes.seckill}>
                <div className={classes.seckill_inner}>
                    <a className={classes.countdown}>
                        <strong className={classes.countdown_tit}>京东秒杀</strong>
                        <div>
                            <div className={classes.countdown_desc}>
                                <strong>{secKillHour}:00</strong>点场 距结束
                            </div>
                            <div className={classes.countdown_time}>
                                <span className={classes.countdown_hour}>{leftTime.hour}</span>
                                <span className={classes.countdown_dot}>:</span>
                                <span className={classes.countdown_min}>{leftTime.min}</span>
                                <span className={classes.countdown_dot}>:</span>
                                <span className={classes.countdown_sec}>{leftTime.sec}</span>
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