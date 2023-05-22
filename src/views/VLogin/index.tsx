import React, { useRef, useState } from 'react';
import clientRequest from '@/src/utils/http-client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReturnInter } from '@/src/utils';
import NzBtn from '@/src/components/NzBtn';
import Notice from '@/src/components/Notice';
import classes from './login.module.scss';

function VLogin() {
  const nameEl = useRef<HTMLInputElement>(null);
  const pwdEl = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [isFinish, setIsFinish] = useState(true);
  const handleLogin = async (): Promise<void> => {
    const user = {
      name: nameEl.current?.value,
      password: pwdEl.current?.value,
    };
    if (user.name && user.password) {
      setIsFinish(true);
      const result = await clientRequest<ReturnInter>({
        url: 'api/login',
        method: 'get',
        params: user,
      });
      if (result.code === 200) await router.push('/');
      else setIsFinish(false);
    } else {
      setIsFinish(false);
    }
  };

  const NzClasses = {
    root: classes.loginBtn,
  };
  return (
    <div className={classes.root}>
      <div className={classes.w}>
        <div className={classes.welcome}>
          <Link href="/">
            <img src="/NiuziLogo.png" alt="logo" />
          </Link>
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
                <NzBtn classes={NzClasses} onClick={handleLogin}>登录</NzBtn>
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
      {isFinish ? <div />
        : (
          <Notice
            type="fail"
            handleClose={() => { setIsFinish(true); }}
          >
            请输入正确的用户名和密码
          </Notice>
        )}
    </div>
  );
}

export default VLogin;
