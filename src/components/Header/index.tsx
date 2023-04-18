import Link from 'next/link';
import { useUserContext } from '@/src/stores/context';
import classes from './Header.module.scss';

function Header() {
  const { store: { name } } = useUserContext();
  console.log('Header name: ', name);
  return (
    <div className={classes.top}>
      <div className={classes.addr}>
        <span>addr</span>
      </div>
      <div className={classes.fr}>
        {name ? <Link href="/login">{name}</Link>
          : (
            <span>
              <Link href="/login">请登录</Link>
              |
              <Link href="/register">免费注册</Link>
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
