import React from 'react';
import Search from '@/src/views/Index/comps/Search';
import ListContainer from '@/src/views/Index/comps/ListContainer';
import SecKill from '@/src/views/Index/comps/SecKill';
import classes from './index.module.scss';

function Index() {
  return (
    <div className={classes.root}>
      <Search />
      <ListContainer />
      <SecKill />
    </div>
  );
}

export default Index;
