import React from 'react';

import classes from './login.module.scss';

function Login() {
  return (
    <div className={classes.root}>
      <div>
        <input className={classes.login_user} />
        <input className={classes.login_pwd} />
        <button className={classes.loginBtn}>登录</button>
      </div>
    </div>
  );
}

export default Login;
