import React from 'react';
import classes from './SecKill.module.scss'

function SecKill() {
    return (
        <div className={classes.root}>
            <div className={classes.seckill}>
                <div className={classes.seckill_inner}>
                    <a className={classes.countdown}>
                        <strong className={classes.countdown_tit}>京东秒杀</strong>
                        <div>
                            <div className={classes.countdown_desc}>
                                <strong>99:99</strong>点场 距结束
                            </div>
                            <div className={classes.countdown_time}>
                                <span className={classes.countdown_hour}>99</span>
                                <span className={classes.countdown_min}>99</span>
                                <span className={classes.countdown_sec}>99</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SecKill;