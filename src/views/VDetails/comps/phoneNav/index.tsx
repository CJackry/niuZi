import React, { Fragment } from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import globalClass from '@/styles/global.module.scss';
import classes from './phoneNav.module.scss';

const navList = ['首页', '小米手机', 'Redmi', 'MiTV', 'PC', '智能生活'];
const navPath = ['手机通讯', '手机', '手机', '小米（MI）', '小米13'];

const PhoneNav:React.FC = () => (
  <div className={classes.root}>
    <div className={globalClass.w}>
      <div className={classes.topNav}>
        <div className={classes.topCate}>
          <span>全部分类</span>
          <span>{'>'}</span>
        </div>
        <div className={classes.topList}>
          {navList.map((item) => (
            <Link href="https://jd.com" key={nanoid()}>{item}</Link>
          ))}
        </div>
      </div>
      <div className={classes.bottomNav}>
        <div className={classes.navPath}>
          {navPath.map((p, index) => (
            <Fragment key={nanoid()}>
              <span>{p}</span>
              {index < navPath.length - 1 ? <span className={classes.sep}>{'>'}</span> : <div /> }
            </Fragment>
          ))}
        </div>
        <div className={classes.shop}>
          <li>
            <span className={classes.zy}>自营</span>
            <span>小米京东自营旗舰店</span>
          </li>
          <li>
            <i className={classes.kfSprite} />
            <span>联系客服</span>
          </li>
          <li>
            <i className={classes.gzSprite} />
            <span>关注店铺</span>
          </li>
        </div>
      </div>
    </div>
  </div>
);

export default PhoneNav;
