import Pagination from '@mui/material/Pagination';
import React, { useRef } from 'react';
import classes from './NzPagination.module.scss';

type HandleFun = (event:React.ChangeEvent<unknown>, value:number)=>void;
type Props = {
    page: number,
    handlePageChange:HandleFun,
}

const NzPagination:React.FC<Props> = ({ page, handlePageChange }) => {
  const pageNum = useRef<HTMLInputElement>(null);
  return (
    <div className={classes.page}>
      <Pagination
        defaultPage={1}
        count={10}
        page={page || 1}
        variant="outlined"
        shape="rounded"
        size="large"
        onChange={handlePageChange}
      />
      <div className={classes.pageTo}>
        <em>
          共
          <span>100</span>
          页 到第
        </em>
        <input className={classes.pageText} ref={pageNum} />
        <em>页</em>
        <button>确定</button>
      </div>
    </div>
  );
};

export default NzPagination;
