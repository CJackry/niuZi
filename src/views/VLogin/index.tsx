import React, { useRef } from 'react';
import clientRequest from '@/src/utils/http-client';
import Link from 'next/link';
import classes from './login.module.scss';

function VLogin() {
  const nameEl = useRef<HTMLInputElement>(null);
  const pwdEl = useRef<HTMLInputElement>(null);
  const handleLogin = async (): Promise<void> => {
    const user = { name: nameEl.current?.value, password: pwdEl.current?.value };
    await clientRequest({
      url: 'api/login',
      method: 'get',
      params: user,
    });
  };
  return (
    <div className={classes.root}>
      <div className={classes.w}>
        <div className={classes.welcome}>
          <img src="https://misc.360buyimg.com/lib/img/e/logo-201305-b.png" alt="logo" />
          <span className={classes.welcome_text}>欢迎登陆</span>
        </div>
        <div className={classes.mid}>
          <div className={classes.imgShow}>
            <img src="https://www.dmoe.cc/random.php" alt="ad" />
          </div>
          <div className={classes.loginForm}>
            <div className={classes.loginTab}>
              <span className={classes.loginCode}>扫码登陆</span>
              <span className={classes.loginInput}>账户登录</span>
            </div>
            <div className={classes.loginBox}>
              <input className={classes.login_user} ref={nameEl} type="text" />
              <input className={classes.login_pwd} ref={pwdEl} type="text" />
              <div className={classes.loginSubmit}>
                <Link className={classes.forget} href="https://jd.com">忘记密码</Link>
                <button className={classes.loginBtn} onClick={handleLogin}>登录</button>
              </div>
            </div>
            <div className={classes.loginBottom}>
              <div className={classes.loginShort}>
                <span>QQ</span>
                <span>|</span>
                <span>微信</span>
              </div>
              <div className={classes.loginRegister}>
                <i>·</i>
                <span>立即注册</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default VLogin;
