import { parseCookies } from 'nookies';
import axios from 'axios';
import classes from './Header.module.scss';

// const getName = () => {
//   const cookies = parseCookies();
//   const { id } = cookies;
//   console.log(id);
//   // const isLogin = !!id;
//   if (id) {
//     const instance = axios.create();
//     instance({
//       url: 'api/getredis',
//       params: { id },
//       method: 'get',
//     }).then((r) => console.log(r));
//   }
// };
function Header() {
  // getName();
  return (
    <div className={classes.top}>
      <div className={classes.addr}>
        <span>addr</span>
      </div>
      <div className={classes.fr}>
        {/* {isLogin ? <a href="/api/login">{redis.get(id).name}</a> */}
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
