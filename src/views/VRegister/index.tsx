import React, { useState } from 'react';
import { UserRegister } from '@/src/views/VRegister/interface';
import NzInput from '@/src/components/nzInput';
import Link from 'next/link';
import classes from './register.module.scss';

function VRegister() {
  const [userInfo, setUserInfo] = useState<UserRegister>({
    username: '',
    password: '',
  });
  const handleNameInput = (content: string) => {
    setUserInfo({ ...userInfo, username: content });
  };
  const handlePwdInput = (content: string) => {
    setUserInfo({ ...userInfo, password: content });
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>
          <img src="/NiuziLogo.png" alt="logo" />
          <span>欢迎注册</span>
        </div>
        <span className={classes.userLogin}>
          已有帐号？
          <Link href="/login">{'请登录>'}</Link>
        </span>
      </div>
      <div className={classes.registerBody}>
        <div className={classes.regisTable}>
          <div className={classes.registerInput}>
            <NzInput
              onInput={handleNameInput}
              placeholder="请输入用户名"
              tips="请输入英文+数字的组合"
              isShowTips
            >
              用户名
            </NzInput>
          </div>
          <div className={classes.registerInput}>
            <NzInput onInput={handlePwdInput} placeholder="请输入密码" type="password">密码</NzInput>
          </div>
          <button className={classes.registerBtn}>注册</button>
        </div>
      </div>
    </div>
  );
}

export default VRegister;
