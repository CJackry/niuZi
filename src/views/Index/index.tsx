import React, { useEffect, useState } from 'react';
import Search from '@/src/views/Index/comps/Search';
import SecKill from '@/src/views/Index/comps/SecKill';
import ListContainer from '@/src/views/Index/comps/ListContainer';
import { getStaticData } from '@/src/utils/commonFuns';
import {
  HotWords, NavList, SecKillList, ServiceItem,
} from '@/src/views/Index/data';
import classes from './index.module.scss';

type commonData = {
    hotWords: HotWords,
    serviceItem: ServiceItem,
    navList: NavList,
    secKillList: SecKillList,
}
const Index:React.FC = () => {
  const [staticData, setStaticData] = useState<commonData|null>(null);
  useEffect(() => {
    getStaticData('/api/getStaticData').then((r) => {
      setStaticData((r.data));
    });
  }, []);
  return (
    <div className={classes.root}>
      <Search hotWords={staticData?.hotWords} />
      <ListContainer navList={staticData?.navList} serviceItem={staticData?.serviceItem} />
      <SecKill secKillList={staticData?.secKillList} />
    </div>
  );
};

export default Index;
