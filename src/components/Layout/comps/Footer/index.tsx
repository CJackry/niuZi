import React from 'react';
import classes from './Footer.module.scss';

function Footer() {
  return (
    <div className={classes.root}>
      <div className={classes.mod_service}>
        <div className={classes.service_inner}>
          <ul className={classes.service_list}>
            <li className={classes.service_item}>
              <div className={classes.service_unit}>
                <img className={`${classes.service_tit} ${classes.service_tit_duo}`} alt="tit" />
                <p className={classes.service_txt}>品类齐全，轻松购物</p>
              </div>
            </li>
            <li className={classes.service_item}>
              <div className={classes.service_unit}>
                <img className={`${classes.service_tit} ${classes.service_tit_kuai}`} alt="tit" />
                <p className={classes.service_txt}>多仓直发，急速配送</p>
              </div>
            </li>
            <li className={classes.service_item}>
              <div className={classes.service_unit}>
                <img className={`${classes.service_tit} ${classes.service_tit_hao}`} alt="tit" />
                <p className={classes.service_txt}>正品行货，精致服务</p>
              </div>
            </li>
            <li className={classes.service_item}>
              <div className={classes.service_unit}>
                <img className={`${classes.service_tit} ${classes.service_tit_sheng}`} alt="tit" />
                <p className={classes.service_txt}>天天低价，畅选无忧</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
