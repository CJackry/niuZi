import React from 'react';

import classes from './register.module.scss';

function Register() {
  return (
    <div className={classes.root}>
      <div>
        <input className={classes.register_user} />
        <input className={classes.register_pwd} />
        <button className={classes.registerBtn}>注册</button>
      </div>
    </div>
  );
}

export default Register;
