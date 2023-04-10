import React from 'react';
import axios from 'axios';
import classes from './login.module.scss';

function VLogin() {
  const handleLogin = ():void => {
    axios.get('/api/user').then((res) => console.log(res));
  };
  return (
    <div className={classes.root}>
      <div>
        <input className={classes.login_user} />
        <input className={classes.login_pwd} />
        <button className={classes.loginBtn} onClick={handleLogin}>登录</button>
      </div>
    </div>
  );
}

export default VLogin;
