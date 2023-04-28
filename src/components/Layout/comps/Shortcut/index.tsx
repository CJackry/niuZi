import Link from 'next/link';
import { useUserContext } from '@/src/stores/context';
import { useState } from 'react';
import clientRequest from '@/src/utils/http-client';
import { useRouter } from 'next/router';
import classes from './Shortcut.module.scss';

function Shortcut() {
  const { store: { name }, dispatch } = useUserContext();
  const [username] = useState(name);
  const router = useRouter();
  const handleLogout = async () => {
    const res = await clientRequest({
      url: '/api/logout',
    });
    if (res.success) {
      dispatch({ type: 'logout' });
      await router.push('/');
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.w}>
        <div className={classes.addr}>
          <span>addr</span>
        </div>
        <div className={classes.fr}>
          {name ? (
            <span>
              <Link href="/login">{username}</Link>
              <span onClick={handleLogout}>退出登录</span>
            </span>
          )
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

export default Shortcut;
