import React from 'react';
import { Phone } from '@/src/views/VSearch/interface';
import classes from '@/src/views/VSearch/VSearch.module.scss';
import { nanoid } from 'nanoid';
import Link from 'next/link';

type Props = {
    phone: Phone;
}

const phoneImg = 'https://img11.360buyimg.com/n7/jfs/t1/99542/29/27716/49463/635bb90eEdd20de26/9e7aca116e9bd23a.jpg';

const ResultItem:React.FC<Props> = ({ phone }) => (
  <div className={classes.goodsItem}>
    <div className={classes.goodsWarp}>
      <Link href="https://jd.com" className={classes.goodsImg}>
        <img src={phone.color[0].img_link ? phone.color[0].img_link : phoneImg} alt="phone" />
      </Link>
      <div className={classes.phoneScroll}>
        {phone.color.map((colorAttr) => (
          <li className={classes.psItem} key={nanoid()}>
            <a href="https://jd.com">
              <img
                src={colorAttr.img_link ? colorAttr.img_link : phoneImg}
                alt={colorAttr.name}
                title={colorAttr.name}
              />
            </a>
          </li>
        ))}
      </div>
      <div className={classes.phonePrice}>
        <span>￥</span>
        <strong>{phone.price}</strong>
      </div>
      <div className={classes.phoneTitle}>
        <a href="https://jd.com">
          <span>{phone.title}</span>
        </a>
      </div>
      <div className={classes.phoneCommits}>
        <span>{phone.commits}</span>
        条评价
      </div>
      <div className={classes.phoneStore}>
        <Link href={phone.shop.link}>
          <span className={classes.storeName}>
            {phone.shop.name}
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default ResultItem;
