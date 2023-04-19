import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import classes from './Search.module.scss';

function Search() {
  const [hotWords, setHotWords] = useState([{ words: '', link: '' }]);
  useEffect(() => {
    fetch('/api/hotWords').then((r) => r.json()).then((data) => {
      setHotWords(data.data);
      console.log(hotWords);
    });
  }, []);
  return (
    <div className={classes.root}>
      <div className={`${classes.w} ${classes.header_box}`}>
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
                <a>我的购物车</a>
                {/* 此处的数据需要动态加载 */}
                <i className={classes.ci_count}>0</i>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.hotwords}>
          {hotWords.map((word) => (
            <a href={word.link} key={nanoid()}>{word.words}</a>
          ))}
        </div>
        <div className={classes.navitems}>
          <ul id="navitems_group1">
            <a>京东超市</a>
            <a>秒杀</a>
            <a>便宜包邮</a>
            <a>京东生鲜</a>
          </ul>
          <ul id="navitems_group2">
            <a>京东超市</a>
            <a>秒杀</a>
            <a>便宜包邮</a>
            <a>京东生鲜</a>
          </ul>
          <ul id="navitems_group3">
            <a>京东超市</a>
            <a>秒杀</a>
            <a>便宜包邮</a>
            <a>京东生鲜</a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Search;
