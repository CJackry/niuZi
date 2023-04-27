import Pagination from '@mui/material/Pagination';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { usePageContext } from '@/src/stores/pageContext';
import classes from './NzPagination.module.scss';

const NzPagination:React.FC = () => {
  const pageNum = useRef<HTMLInputElement>(null);
  const { store: { page }, dispatch } = usePageContext();
  const router = useRouter();
  const localUrl = router.pathname;
  const currentP = Number(router.query.page);
  const [currentPage, setCurrentPage] = useState<number>(currentP);
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);
  const handleChangePage = (event:React.ChangeEvent<unknown>, value:number) => {
    dispatch({ type: 'moveTo', page: value });
    router.push(`${localUrl}?page=${value}`).catch((e) => console.log(e));
  };
  const handleMove = () => {
    const p = Number(pageNum.current?.value);
    dispatch({ type: 'moveTo', page: p });
    router.push(`${localUrl}?page=${p}`).catch((e) => console.log(e));
  };
  return (
    <div className={classes.page}>
      <Pagination
        defaultPage={1}
        count={20}
        page={currentPage}
        variant="outlined"
        shape="rounded"
        size="large"
        onChange={handleChangePage}
      />
      <div className={classes.pageTo}>
        <em>
          共
          <span>100</span>
          页 到第
        </em>
        <input className={classes.pageText} ref={pageNum} />
        <em>页</em>
        <button onClick={handleMove}>确定</button>
      </div>
    </div>
  );
};

export default NzPagination;
