import React, { useEffect, useState } from 'react';
import { HotWords } from '@/src/views/Index/interface';
import { nanoid } from 'nanoid';
import clientRequest from '@/src/utils/http-client';
import SearchBar from '@/src/components/searchComps/comps/commonComps/searchBar';
import MyCartComp from '../commonComps/myCartComp';
import classes from './searchWithCart.module.scss';

type Props = {
    withCart: boolean;
    withHotWords: boolean;
}

const SearchWithCart:React.FC<Props> = ({ withCart, withHotWords }) => {
  const [hotWords, setHotWords] = useState<Array<HotWords>|null>(null);
  useEffect(() => {
    clientRequest<Array<HotWords>>({ url: '/api/hotWords' }).then((r) => setHotWords(r.data));
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src="/jd_logo.png" alt="logo" />
      </div>
      <div className={classes.searchMid}>
        <SearchBar />
        { withHotWords ? (
          <div className={classes.hotWords}>
            {hotWords ? hotWords.map((word) => (
              <a href={word.link} key={nanoid()}>{word.name}</a>
            )) : <a href="https://jd.com">hotWords is loading</a>}
          </div>
        ) : <div />}
      </div>
      {withCart ? (
        <div className={`${classes.searchMid} ${classes.myCart}`}>
          <MyCartComp />
          <p />
        </div>
      ) : <div />}
    </div>
  );
};

export default SearchWithCart;
