import React from 'react';
import AttrCategory from './comps/attrCategory';
import classes from './category.module.scss';
import BrandCategory from './comps/brandCategory';

const Category:React.FC = () => {
  const cateName = '分类';
  const cateValueList = ['手机', '二手手机', '合约机'];
  return (
    <div className={classes.attrNav}>
      <BrandCategory />
      <AttrCategory cateName={cateName} cateValueList={cateValueList} />
    </div>
  );
};

export default Category;
