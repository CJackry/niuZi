import React, { useRef } from 'react';
import clientRequest from '@/src/utils/http-client';
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
      <div>
        <input className={classes.login_user} ref={nameEl} type="text" />
        <input className={classes.login_pwd} ref={pwdEl} type="text" />
        <button className={classes.loginBtn} onClick={handleLogin}>登录</button>
      </div>
    </div>
  );
}

export default VLogin;
