import React, { ReactNode } from 'react';
import Footer from '@/src/components/Footer';
import classes from './Layout.module.scss';
import Header from '../Header';

interface Props {
    children?: ReactNode
}

// 包含头尾组件的通用布局组件
const Layout: React.FC<Props> = ({ children }) => (
  <div className={classes.root}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
