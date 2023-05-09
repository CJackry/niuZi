import React from 'react';
import { useScroll } from 'ahooks';
import classes from './floatSideBar.module.scss';

const FloatSideBar:React.FC = () => {
  const scroll = useScroll();
  return (
    <div
      className={classes.root}
      style={(scroll?.top ? scroll?.top > 660 : false) ? {
        position: 'fixed',
        top: '75px',
      } : { display: 'block' }}
    >
      <div className={classes.sideItems}>
        <div className={classes.item}>NiuZi秒杀</div>
        <div className={classes.item}>频道广场</div>
        <div className={classes.item}>为你推荐</div>
        <div className={classes.item}>
          <i className={classes.iconfont}>&#xe625;</i>
          客服
        </div>
        <div className={classes.item}>
          <i className={classes.iconfont}>&#xe738;</i>
          反馈
        </div>
        {(scroll?.top ? (scroll?.top > 660) : false) ? (
          <div className={classes.item}>
            <i className={classes.iconfont}>&#xe600;</i>
            顶部
          </div>
        ) : <div />}
      </div>
    </div>
  );
};

export default FloatSideBar;
