import Link from 'next/link';
import { useUserContext } from '@/src/stores/context';
import classes from './Header.module.scss';

function Header() {
  const { store: { name } } = useUserContext();
  return (
    <div className={classes.root}>
      <div className={classes.w}>
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

          <Link href="https://www.jd.com">我的订单</Link>
          |
          <Link href="https://www.jd.com">购物车</Link>
          |
          <Link href="https://www.jd.com">商家后台</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
