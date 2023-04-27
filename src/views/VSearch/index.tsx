import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import global from '@/styles/global.module.scss';
import { nanoid } from 'nanoid';
import type { Phone } from '@/src/views/VSearch/interface';
import { useWhyDidYouUpdate } from 'ahooks';
import Category from '@/src/views/VSearch/comps/category';
import AttrFilter from '@/src/views/VSearch/comps/attrFilter';
import ResultItem from '@/src/views/VSearch/comps/resultItem';
import NzPagination from '@/src/components/NzPagination';
import { getPhone } from '@/src/views/VSearch/service';
import classes from './VSearch.module.scss';

export const PAGE_SIZE = 10;

const VSearch: React.FC = () => {
  const [phoneInfo, setPhoneInfo] = useState<Array<Phone> | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageInfo, setPageInfo] = React.useState({
    total: 0,
    pageSize: PAGE_SIZE,
  });
  useWhyDidYouUpdate('VSearch', { phoneInfo });
  useEffect(() => {
    getPhone(currentPage).then((res) => {
      if (res?.success) {
        setPhoneInfo(res.data.records);
        setPageInfo({ total: res.data.total, pageSize: PAGE_SIZE });
      }
    });
  }, [currentPage]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    console.log(value);
    setCurrentPage(value);
  };
  const handleMove = (p:number) => {
    setCurrentPage(currentPage + p);
  };
  console.log(pageInfo);

  return (
    <div className={classes.root}>
      <div className={global.w}>
        <div className={classes.topNav}>
          <Link href="https://jd.com">全部结果</Link>
          <span>{'>'}</span>
        </div>
        <Category />
        <AttrFilter
          currentPage={currentPage}
          total={pageInfo.total}
          pageSize={PAGE_SIZE}
          handleMove={handleMove}
        />
        <div className={classes.goodsList}>
          {phoneInfo ? phoneInfo.map((phone) => (
            <ResultItem phone={phone} key={nanoid()} />
          )) : (
            <div className={classes.loading}>
              <span>Loading</span>
            </div>
          )}
        </div>
        <NzPagination
          onChange={handlePageChange}
          defaultPage={1}
          page={currentPage}
          total={pageInfo.total}
          pageSize={PAGE_SIZE}
        />
      </div>
    </div>
  );
};

export default VSearch;
