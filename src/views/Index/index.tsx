import React from 'react';
import global from '@/styles/global.module.scss';
import FloatSideBar from '@/src/components/floatSideBar';
import IndexApps from '@/src/views/Index/comps/indexApps';
import Header from '../../components/Layout/comps/Header';
import classes from './index.module.scss';

const Index:React.FC = () => (
  <div className={classes.root}>
    <div className={global.w}>
      <Header isShowFloat />
      <IndexApps />
      <FloatSideBar />
    </div>
  </div>
);

export default Index;
