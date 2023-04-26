import { NextApiRequest, NextApiResponse } from 'next';
import serverInstance from '@/src/utils/http-server';
import { errorReturnObj } from '@/src/utils';

export default async function handler(req:NextApiRequest, res:NextApiResponse):Promise<void> {
  const { reqAddr, ...params } = req.query;
  console.log('query', req.query);
  const result = await serverInstance({
    url: `/api/${reqAddr}`,
    method: 'get',
    params,
  });
  if (result) {
    res.status(200).send(result.data);
  } else {
    res.status(401).send(errorReturnObj('请求有误！'));
  }
}
