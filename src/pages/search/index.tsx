import React, { useState } from 'react';
import VSearch from '@/src/views/VSearch';
import { Phone, PhoneListModel } from '@/src/views/VSearch/interface';
import serverRequest from '@/src/utils/http-server';

type Props = {
  phoneInfo: Array<Phone>,
  total: number,
}
interface PhoneResponse extends Response{
  data: PhoneListModel;
}

const Search:React.FC<Props> = (props) => {
  const { phoneInfo, total } = props;
  const [phones] = useState<Array<Phone>>(phoneInfo);
  const [totalNum] = useState(total);
  return (
    <VSearch phones={phones} totalNum={totalNum} />
  );
};

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
