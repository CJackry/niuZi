import React from 'react';
import { Phone, PhoneListModel } from '@/src/views/VSearch/interface';
import serverRequest from '@/src/utils/http-server';
import Header from '@/src/components/Layout/comps/Header';
import VSearchResult from '@/src/views/VSearch';

type Props = {
  phoneInfo: Array<Phone>,
  total: number,
}
interface PhoneResponse extends Response{
  data: PhoneListModel;
}

const Search:React.FC<Props> = ({ phoneInfo, total }) => (
  <>
    <Header isShowFloat={false} />
    <VSearchResult phones={phoneInfo} totalNum={total} />
  </>
);

export async function getServerSideProps() {
  const res = await serverRequest<PhoneResponse>({
    url: '/api/phones',
    params: { page: 1 },
  });
  const phoneInfo = res.data.data.records;
  const { total } = res.data.data;
  return {
    props: {
      phoneInfo,
      total,
    },
  };
}

export default Search;
