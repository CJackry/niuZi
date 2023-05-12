import React, { useEffect, useState } from 'react';
import { CommonData } from '@/src/views/Index/interface';
import { getStaticData } from '@/src/utils/commonFuns';
import { nanoid } from 'nanoid';
import ListContainer from '@/src/views/Index/comps/ListContainer';
import SecKill from '@/src/views/Index/comps/SecKill';

const IndexApps:React.FC = () => {
  const [staticData, setStaticData] = useState<CommonData|null>(null);
  useEffect(() => {
    getStaticData().then((r) => {
      setStaticData(r.data);
      staticData?.secKillList.forEach((item) => {
        Object.defineProperty(item, 'id', nanoid());
      });
    });
  }, []);
  return (
    <div>
      <ListContainer navList={staticData?.navList || []} serviceItem={staticData?.serviceItem || []} />
      <SecKill secKillList={staticData?.secKillList || []} />
    </div>
  );
};

export default IndexApps;
