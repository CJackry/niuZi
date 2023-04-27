import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import global from '@/styles/global.module.scss';
import { nanoid } from 'nanoid';
import { Phone } from '@/src/views/VSearch/interface';
import clientRequest from '@/src/utils/http-client';
import { useRouter } from 'next/router';
import { useWhyDidYouUpdate } from 'ahooks';
import Category from '@/src/views/VSearch/comps/category';
import AttrFilter from '@/src/views/VSearch/comps/attrFilter';
import ResultItem from '@/src/views/VSearch/comps/resultItem';
import NzPagination from '@/src/components/NzPagination';
import { usePageContext } from '@/src/stores/pageContext';
import classes from './VSearch.module.scss';

const getPhone = async (page:number) => {
  const res = await clientRequest<Array<Phone>>({
    url: '/api/phones',
    params: { page },
  });
  return res.data;
};

const VSearch:React.FC = () => {
  const { store: { page } } = usePageContext();
  const [phoneInfo, setPhoneInfo] = useState<Array<Phone>|null>();
  const router = useRouter();
  const p = router.query.page ? Number(router.query.page) : 1;
  useWhyDidYouUpdate('VSearch', { phoneInfo });

  useEffect(() => {
    getPhone(p).then((r) => {
      setPhoneInfo(r);
    });
  }, [page]);
  return (
    <div className={classes.root}>
      <div className={global.w}>
        <div className={classes.topNav}>
          <Link href="https://jd.com">全部结果</Link>
          <span>{'>'}</span>
        </div>
        <Category />
        <AttrFilter />
        <div className={classes.goodsList}>
          {phoneInfo ? phoneInfo.map((phone) => (
            <ResultItem phone={phone} key={nanoid()} />
          )) : (
            <div className={classes.loading}>
              <span>Loading</span>
            </div>
          )}
        </div>
        <NzPagination />
      </div>
    </div>
  );
};

export default VSearch;
