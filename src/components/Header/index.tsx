import { parseCookies } from 'nookies';
import axios from 'axios';
import { useEffect } from 'react';
import classes from './Header.module.scss';

const getName = async (id:string):Promise<void> => {
  console.log(id);
  // const isLogin = !!id;
  if (id) {
    console.log('request getRedis');
    const instance = axios.create();
    await instance({
      url: '/api/getRedis',
      params: { id },
      method: 'get',
    });
  }
};

function Header() {
  const cookies = parseCookies();
  const { id } = cookies;
  const isLogin = !!id;
  console.log('isLogin: ', isLogin);
  useEffect(() => {
    if (isLogin) getName(id).then((r) => console.log(r));
  }, [isLogin]);
  return (
    <div className={classes.top}>
      <div className={classes.addr}>
        <span>addr</span>
      </div>
      <div className={classes.fr}>
        {/* {isLogin ? <a href="/api/login">{}</a> */}
        {/*  : <a href="/api/login">请登录</a> */}
        {/*        | <a href="/api/register">免费注册</a>} */}

        <a href="https://www.jd.com">我的订单</a>
        |
        <a href="https://www.jd.com">购物车</a>
        |
        <a href="https://www.jd.com">商家后台</a>
      </div>
    </div>
  );
}

export default Header;
