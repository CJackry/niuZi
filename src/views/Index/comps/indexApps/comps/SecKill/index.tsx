import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/css/autoplay';
import { numToStringDouble } from '@/src/utils/commonFuns';
import { SecKillItem } from '@/src/views/Index/interface';
import classes from './SecKill.module.scss';

interface Time {
    hour: string,
    min: string,
    sec: string
}
type Props = {
  secKillList?: Array<SecKillItem>
}

// 获取下一场秒杀时间点（整点场）
const getSecKillTime = (nowTime: number, secKillTime: Array<number>): number => {
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

const animation = (secKillHour: number, setLeftTime: React.Dispatch<Time>): void => {
  let leftTime = {};
  const myDate: Date = new Date();
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
      window.clearTimeout(secKillTimer);
    }
    leftTime = {
      hour: numToStringDouble(leftHour),
      sec: numToStringDouble(leftSec),
      min: numToStringDouble(leftMin),
    };
    setLeftTime(leftTime as Time);
  }, 1000);
};

const SecKill:React.FC<Props> = ({ secKillList }) => {
  const myDate: Date = new Date();

  // 秒杀的时间场次
  const secKillTime: Array<number> = [10, 12, 19, 21, 22, 24];
  const [leftTime, setLeftTime] = useState({ hour: '00', min: '00', sec: '00' });
  const [secKillHour, setSecKillHour] = useState(10);
  useEffect(() => {
    const secHour: number = getSecKillTime(myDate.getHours(), secKillTime);
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
              modules={[Navigation]}
              slidesPerView={3}
              loop
              navigation
            >
              {
                  secKillList ? secKillList.map((item) => (
                    <SwiperSlide>
                      <a className={classes.seckill_item} href={item.link} key={item.id}>
                        <img src={item.imgSrc} alt="img" />
                        <h6>{item.name}</h6>
                        <span>{item.price}</span>
                      </a>
                    </SwiperSlide>
                  )) : (
                    <SwiperSlide>
                      <a className={classes.seckill_item} href="https://wallhaven.cc/">
                        没有收到牛子轮播图，去看点牛子图吧
                      </a>
                    </SwiperSlide>
                  )
                }
            </Swiper>
          </div>
          <div className={classes.seckill_brand}>
            <Link className={classes.brand_item} href="https://api.cyrilstudio.top/bing/image.php">
              <img src="https://api.cyrilstudio.top/bing/image.php?size=320x240" alt="secKill" />
              <div className={classes.item_info}>
                <p className={classes.brand_tit}>箱包品类秒杀</p>
                <p className={classes.brand_promo}>低至5折</p>
                <span className={classes.item_info_action}>品类秒杀</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecKill;
