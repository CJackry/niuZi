import React, { useRef, useState } from 'react';
import Link from 'next/link';
import classes from './searchbar.module.scss';

const SearchBar:React.FC = () => {
  const [keyShow, setKeyShow] = useState('手机华为');
  const keyWords = useRef<HTMLInputElement>(null);
  const handleInput = () => {
    setKeyShow('');
  };
  const handleBlur = () => {
    if (keyWords.current?.value !== '') setKeyShow('');
    else setKeyShow('手机华为');
  };
  return (
    <div className={classes.search}>
      <input className={classes.keySearch} onInput={handleInput} onBlur={handleBlur} ref={keyWords} />
      <span className={classes.keyWord}>{keyShow}</span>
      <Link className={classes.upload_bg} href="https://jd.com">
        <span className={`${classes.iconfont}`}>&#xe63c;</span>
      </Link>
      <Link className={classes.searchLink} href="https://jd.com">
        <span className={classes.iconfont}>&#xe62d;</span>
      </Link>
    </div>
  );
};

export default SearchBar;
