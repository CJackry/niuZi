import Pagination from '@mui/material/Pagination';
import type { PaginationProps } from '@mui/material/Pagination';
import React from 'react';
import classes from './NzPagination.module.scss';

interface NzPaginationProps extends PaginationProps{
  total: number;
  pageSize: number;
}

const NzPagination: React.FC<NzPaginationProps> = ({
  onChange,
  total,
  pageSize,
  variant,
  shape,
  size,
  defaultPage,
  ...reset
}) => {
  const [inputValue, setInputVale] = React.useState<string>(String(defaultPage));
  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    if (typeof onChange === 'function') {
      onChange(event, value);
    }
  };
  const handleMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof onChange === 'function') {
      onChange(event, Number(inputValue));
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVale(e.target.value);
  };

  const pageNum = Math.ceil(total / pageSize);

  return (
    <div className={classes.page}>
      <Pagination
        variant={variant || 'outlined'}
        shape={shape || 'rounded'}
        size={size || 'large'}
        defaultPage={defaultPage || 1}
        onChange={handleChangePage}
        count={pageNum}
        {...reset}
      />
      <div className={classes.pageTo}>
        <em>
          共
          <span>{pageNum}</span>
          页 到第
        </em>
        <input className={classes.pageText} value={inputValue} onChange={handleInput} />
        <em>页</em>
        <button onClick={handleMove}>确定</button>
      </div>
    </div>
  );
};

export default NzPagination;
