import classes from './Header.module.scss';

function Header() {
  return (
    <div className={classes.top}>
      <div className={classes.addr}>
        <span>addr</span>
      </div>
      <div className={classes.fr}>
        <a href="#">请登录</a>
        |
        <a href="#">免费注册</a>
        <a href="#">我的订单</a>
        |
        <a href="#">购物车</a>
        |
        <a href="#">商家后台</a>
      </div>
    </div>
  );
}

export default Header;
