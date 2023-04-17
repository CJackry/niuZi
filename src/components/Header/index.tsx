import { parseCookies } from 'nookies';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import classes from './Header.module.scss';

// const getName = async (id:string):Promise<string> => {
//   console.log(id);
//   let name = '';
//   // const isLogin = !!id;
//   if (id) {
//     console.log('request getRedis');
//     const instance = axios.create();
//     await instance({
//       url: '/api/getRedis',
//       params: { id },
//       method: 'get',
//     }).then((r) => {
//       name = r.data.name;
//     });
//   }
//   return name;
// };

function Header() {
  const cookies = parseCookies();
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  console.log('isLogin: ', isLogin);
  useEffect(() => {
    const { id } = cookies;
    setIsLogin(!!id);
    setUsername(username);
    // if (isLogin) getName(id).then((name) => setUsername(name));
  }, [isLogin]);
  return (
    <div className={classes.top}>
      <div className={classes.addr}>
        <span>addr</span>
      </div>
      <div className={classes.fr}>
        {isLogin ? <Link href="/api/login">{username}</Link>
          : (
            <span>
              <Link href="/api/login">请登录</Link>
              |
              <Link href="/api/register">免费注册</Link>
            </span>
          )}

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
