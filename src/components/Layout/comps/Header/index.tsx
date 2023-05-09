import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HotWords } from '@/src/views/Index/interface';
import clientRequest from '@/src/utils/http-client';
import { useScroll } from 'ahooks';
import FloatSearch from '@/src/components/Layout/comps/floatSearch';
import global from '@/styles/global.module.scss';
import classes from './Header.module.scss';

type Props = {
  isShowFloat: boolean;
}

const Header: React.FC<Props> = ({ isShowFloat }) => {
  const [hotWords, setHotWords] = useState<Array<HotWords>|null>(null);
  useEffect(() => {
    clientRequest<Array<HotWords>>({ url: '/api/hotWords' }).then((r) => setHotWords(r.data));
  }, []);
  const scroll = useScroll();
  return (
    <div className={classes.root}>
      {(scroll?.top && isShowFloat ? scroll?.top > 660 : false) ? <FloatSearch /> : <div />}
      <div className={`${global.w} ${classes.header_box}`}>
        <div className={classes.logo}>
          <img src="/jd_logo.png" alt="logo" />
        </div>
        <div id="search">
          <div className={classes.search_m}>
            <div className={classes.search_logo} />
            <div className={classes.form}>
              <ul className={classes.search_helper}>
                <li>这里是模糊搜索结果</li>
              </ul>
              <div className={classes.search_bg}>I am search_bg</div>
              <input className={classes.search_input} type="text" />
              <span className={classes.photo_search_btn}>
                <span className={`${classes.upload_bg} ${classes.iconfont}`}>&#xe63c;</span>
              </span>
              <button className={classes.iconfont}>&#xe62d;</button>
            </div>
            <div className={classes.dropdown}>
              <div className={classes.cw_icon}>
                <i className={classes.iconfont}>&#xe70b;</i>
                <Link href="https://jd.com">我的购物车</Link>
                {/* 此处的数据需要动态加载 */}
                <i className={classes.ci_count}>0</i>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.hotwords}>
          {hotWords ? hotWords.map((word) => (
            <a href={word.link} key={nanoid()}>{word.name}</a>
          )) : <a href="https://jd.com">hotWords is loading</a>}
        </div>
        <div className={classes.navitems}>
          <ul id="navitems_group1">
            <a href="https://jd.com">京东超市</a>
            <a href="https://jd.com">秒杀</a>
            <a href="https://jd.com">便宜包邮</a>
            <a href="https://jd.com">京东生鲜</a>
          </ul>
          <ul id="navitems_group1">
            <a href="https://jd.com">京东超市</a>
            <a href="https://jd.com">秒杀</a>
            <a href="https://jd.com">便宜包邮</a>
            <a href="https://jd.com">京东生鲜</a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
