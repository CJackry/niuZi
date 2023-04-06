import React from 'react';
import classes from './Search.module.scss'

function Search() {
    return (
        <div className={classes.root}>
            <div className={`${classes.w} ${classes.header_box}`}>
                <div className={classes.logo}>
                    <img src='https://img10.360buyimg.com/img/jfs/t1/192028/25/33459/5661/63fc2af2F1f6ae1b6/d0e4fdc2f126cbf5.png' alt='logo' />
                </div>
                <div id="search">
                    <div className={classes.search_m}>
                        <div className={classes.search_logo}></div>
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
                                {/*此处的数据需要动态加载*/}
                                <i className={classes.ci_count}>0</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.hotwords}>
                    {/*此处的数据需要动态加载*/}
                    <a className={classes.style_red}>Jack</a>
                    <a>Jack</a>
                    <a>Jack</a>
                    <a>Jack</a>
                    <a>Jack</a>
                </div>
                <div className={classes.navitems}>
                    <ul id='navitems_group1'>
                        <a>京东超市</a>
                        <a>秒杀</a>
                        <a>便宜包邮</a>
                        <a>京东生鲜</a>
                    </ul>
                    <ul id='navitems_group2'>
                        <a>京东超市</a>
                        <a>秒杀</a>
                        <a>便宜包邮</a>
                        <a>京东生鲜</a>
                    </ul>
                    <ul id='navitems_group3'>
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