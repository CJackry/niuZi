import React, { useState } from 'react';
import { clearTimeout } from 'timers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import { numToStringDouble } from '@/src/utils/commonFuns';
import classes from './SecKill.module.scss';

interface Time{
  hour:string,
  min:string,
  sec:string
}
// 获取下一场秒杀时间点（整点场）
const getSecKillTime = (nowTime:number, secKillTime:Array<number>):number => {
  let secKillHour = -1;
  if (nowTime < secKillTime[secKillTime.length - 1]) {
    for (let i = 0; i < secKillTime.length - 1; i += 1) {
      if (nowTime < secKillTime[i]) {
        secKillHour = secKillTime[i];
        break;
      }
    }
  } else {
    [secKillHour] = secKillTime;
  }
  return secKillHour;
};

const animation = (secKillHour:number, setLeftTime:React.Dispatch<Time>):void => {
  let leftTime = {};
  const myDate:Date = new Date();
  let leftHour = secKillHour - myDate.getHours() - 1;
  let leftMin = 60 - myDate.getMinutes() - 1;
  let leftSec = 60 - myDate.getSeconds();
  const secKillTimer = setTimeout(() => {
    if (leftSec >= 1) leftSec -= 1;
    else if (leftMin >= 1) {
      leftSec = 59;
      leftMin -= 1;
    } else if (leftMin <= 0 && leftHour >= 1) {
      leftSec = 59;
      leftMin = 59;
      leftHour -= 1;
    }
    if (leftSec === 0 && leftMin === 0 && leftHour === 0) {
      clearTimeout(secKillTimer);
    }
    leftTime = { hour: numToStringDouble(leftHour), sec: numToStringDouble(leftSec), min: numToStringDouble(leftMin) };
    setLeftTime(leftTime as Time);
  }, 1000);
};

function SecKill() {
  const myDate:Date = new Date();

  // 秒杀的时间场次
  const secKillTime:Array<number> = [10, 12, 19, 21, 22, 24];
  const [leftTime, setLeftTime] = useState({ hour: '00', min: '00', sec: '00' });
  const [secKillHour, setSecKillHour] = useState(10);

  React.useEffect(() => {
    const secHour:number = getSecKillTime(myDate.getHours(), secKillTime);
    setSecKillHour(secHour);
    animation(secKillHour, setLeftTime);
  }, [leftTime]);
  return (
    <div className={classes.root}>
      <div className={classes.seckill}>
        <div className={classes.seckill_inner}>
          <a className={classes.countdown} href="https://miaosha.jd.com/">
            <strong className={classes.countdown_tit}>京东秒杀</strong>
            <div>
              <div className={classes.countdown_desc}>
                <strong>
                  {secKillHour}
                  :00
                </strong>
                点场 距结束
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
              navigation
              pagination={{
                enabled: true,
                type: 'bullets',
                clickable: true,
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <a className={classes.seckill_item} href="https://miaosha.jd.com/#7748905">
                  {/* eslint-disable-next-line max-len */}
                  <img src="https://img30.360buyimg.com/seckillcms/s140x140_jfs/t1/220722/9/21877/80908/6409c9feF94ce723f/6e595af164a71381.jpg.webp" alt="coke" />
                  <h6>百事可乐 Pepsi  碳酸饮料整箱 300ml*12瓶 (新老包装随机发货) 百事出品</h6>
                  <span>￥17.89</span>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={classes.seckill_item}>
                  {/* eslint-disable-next-line max-len,jsx-a11y/alt-text */}
                  <img src="https://img30.360buyimg.com/seckillcms/s140x140_jfs/t1/220722/9/21877/80908/6409c9feF94ce723f/6e595af164a71381.jpg.webp" alt="coke" />
                  <h6>百事可乐 Pepsi  碳酸饮料整箱 300ml*12瓶 (新老包装随机发货) 百事出品</h6>
                  <span>￥17.89</span>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={classes.seckill_item}>
                  {/* eslint-disable-next-line max-len,jsx-a11y/alt-text */}
                  <img src="https://img30.360buyimg.com/seckillcms/s140x140_jfs/t1/220722/9/21877/80908/6409c9feF94ce723f/6e595af164a71381.jpg.webp" alt="coke" />
                  <h6>百事可乐 Pepsi  碳酸饮料整箱 300ml*12瓶 (新老包装随机发货) 百事出品</h6>
                  <span>￥17.89</span>
                </a>
              </SwiperSlide>
            </Swiper>

          </div>
          <div className={classes.seckill_brand}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={classes.brand_item}>
              {/* eslint-disable-next-line max-len,jsx-a11y/alt-text */}
              <img src="https://img12.360buyimg.com/seckillcms/s130x130_jfs/t1/52541/32/20117/44501/6408b31dFf21f2750/39b153404c30f6b3.jpg.webp" alt="coke" />
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
