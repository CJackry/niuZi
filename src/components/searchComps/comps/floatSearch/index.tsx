import React from 'react';
import global from '@/styles/global.module.scss';
import SearchBar from '@/src/components/searchComps/comps/commonComps/searchBar';
import MyCartComp from '../commonComps/myCartComp';
import classes from './floatSearch.module.scss';

const FloatSearch:React.FC = () => (
  <div className={classes.root}>
    <div className={`${global.w} ${classes.floatSearch}`}>
      <img src="/NiuziLogo.png" alt="logo" />
      <SearchBar />
      <MyCartComp />
    </div>
  </div>
);

export default FloatSearch;
