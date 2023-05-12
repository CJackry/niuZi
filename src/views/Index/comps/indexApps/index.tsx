import React from 'react';
import FloatSideBar from '@/src/components/floatSideBar';
import { CommonData } from '@/src/views/Index/interface';
import SecKill from './comps/SecKill';
import classes from './indexApps.module.scss';

type Props = {
  staticData: CommonData;
}

const IndexApps:React.FC<Props> = ({ staticData }) => (
  <div className={classes.root}>
    <div>
      <SecKill secKillList={staticData?.secKillList || []} />
    </div>
    <FloatSideBar />
  </div>
);

export default IndexApps;
