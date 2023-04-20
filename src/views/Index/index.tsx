import React, { useEffect, useState } from 'react';
import Search from '@/src/views/Index/comps/Search';
import SecKill from '@/src/views/Index/comps/SecKill';
import ListContainer from '@/src/views/Index/comps/ListContainer';
import { getStaticData } from '@/src/utils/commonFuns';
import type { CommonData } from '@/src/views/Index/interface';
import classes from './index.module.scss';

const Index:React.FC = () => {
  const [staticData, setStaticData] = useState<CommonData|null>(null);
  useEffect(() => {
    getStaticData().then((r) => {
      setStaticData((r.data));
    });
  }, []);
  return (
    <div className={classes.root}>
      <Search hotWords={staticData?.hotWords || []} />
      <ListContainer navList={staticData?.navList || []} serviceItem={staticData?.serviceItem || []} />
      <SecKill secKillList={staticData?.secKillList || []} />
    </div>
  );
};

export default Index;
