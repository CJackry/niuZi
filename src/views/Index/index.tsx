import React from 'react';
import global from '@/styles/global.module.scss';
import IndexApps from '@/src/views/Index/comps/indexApps';
import ListContainer from '@/src/views/Index/comps/ListContainer';
import { CommonData } from '@/src/views/Index/interface';
import Header from '../../components/Layout/comps/Header';
import classes from './index.module.scss';

type Props = {
  staticData: CommonData;
}

const Index:React.FC<Props> = ({ staticData }) => (
  <div className={classes.root}>
    <div className={global.w}>
      <Header isShowFloat />
      <ListContainer navList={staticData?.navList || []} serviceItem={staticData?.serviceItem || []} />
      <IndexApps staticData={staticData} />
    </div>
  </div>
);

export default Index;
