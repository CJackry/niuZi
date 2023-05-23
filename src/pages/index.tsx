import Index from '@/src/views/Index';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { CommonData } from '@/src/views/Index/interface';
import { nanoid } from 'nanoid';
import React from 'react';
import serverRequest from '@/src/utils/http-server';

interface CommonDataResponse{
  data: CommonData;
}

export const getServerSideProps: GetServerSideProps<{ staticData: CommonData }> = async () => {
  const res = await serverRequest<CommonDataResponse>({
    url: '/api/getStaticData',
  });
  const staticData = res.data.data;
  staticData.secKillList = staticData.secKillList.map((item) => ({
    // @ts-ignore
    id: nanoid(),
    ...item,
  }));
  return {
    props: {
      staticData,
    },
  };
};

export function Home({ staticData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Index staticData={staticData} />
  );
}

export default Home;
