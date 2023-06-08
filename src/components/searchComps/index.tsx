import React from 'react';
import SearchWithCart from '@/src/components/searchComps/comps/searchWithCart';
import FloatSearch from '@/src/components/searchComps/comps/floatSearch';

type Props = {
    type: 'withCart'|'float';
    withCart?: boolean;
    withHotWords?: boolean;
}

const SearchComps:React.FC<Props> = ({ type, withCart, withHotWords }) => (
  <div>
    {
            type === 'withCart'
              ? (
                <SearchWithCart
                  withCart={withCart || false}
                  withHotWords={withHotWords || false}
                />
              ) : <FloatSearch />
        }
  </div>
);

export default SearchComps;
