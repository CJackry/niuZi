import React, { useEffect, useState } from 'react';
import SecKill from '@/src/views/Index/comps/SecKill';
import ListContainer from '@/src/views/Index/comps/ListContainer';
import { getStaticData } from '@/src/utils/commonFuns';
import type { CommonData } from '@/src/views/Index/interface';
import global from '@/styles/global.module.scss';
import FloatSideBar from '@/src/components/floatSideBar';
import Header from '../../components/Layout/comps/Header';
import classes from './index.module.scss';

const Index:React.FC = () => {
  const [staticData, setStaticData] = useState<CommonData|null>(null);
  useEffect(() => {
    getStaticData().then((r) => {
      setStaticData(r.data);
    });
  }, []);
  return (
    <div className={classes.root}>
      <div className={global.w}>
        <Header isShowFloat />
        <ListContainer navList={staticData?.navList || []} serviceItem={staticData?.serviceItem || []} />
        <SecKill secKillList={staticData?.secKillList || []} />
        <FloatSideBar />
      </div>
    </div>
  );
};

export default Index;
