import React from 'react';
import Link from 'next/link';
import { useScroll } from 'ahooks';
import global from '@/styles/global.module.scss';
import SearchComps from '@/src/components/searchComps';
import classes from './Header.module.scss';

type Props = {
  isShowFloat: boolean;
}

const Header: React.FC<Props> = ({ isShowFloat }) => {
  const scroll = useScroll();
  return (
    <div className={classes.root}>
      {(scroll?.top && isShowFloat ? scroll?.top > 660 : false) ? <SearchComps type="float" /> : <div />}
      <div className={`${global.w} ${classes.header_box}`}>
        <SearchComps
          type="withCart"
          withCart
          withHotWords
        />
        <div className={classes.navitems}>
          <ul id="navitems_group1">
            <Link href="https://jd.com">京东超市</Link>
            <Link href="https://jd.com">秒杀</Link>
            <Link href="https://jd.com">便宜包邮</Link>
            <Link href="https://jd.com">京东生鲜</Link>
          </ul>
          <ul id="navitems_group1">
            <Link href="https://jd.com">京东超市</Link>
            <Link href="https://jd.com">秒杀</Link>
            <Link href="https://jd.com">便宜包邮</Link>
            <Link href="https://jd.com">京东生鲜</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
