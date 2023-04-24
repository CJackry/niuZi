import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Footer from './comps/Footer';
import classes from './Layout.module.scss';
import Header from './comps/Shortcut';

interface Props {
    children?: ReactNode
}

// 包含头尾组件的通用布局组件
const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  if (router.pathname === '/login') return (<div>{ children }</div>);
  console.log('render');
  return (
    <div className={classes.root}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
