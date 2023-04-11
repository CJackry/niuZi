import { NextApiRequest, NextApiResponse } from 'next';
import serverInstance from '@/src/utils/http-server';

export default async function handler(req:NextApiRequest, res:NextApiResponse):Promise<void> {
  const { reqAddr } = req.query;
  const data = await serverInstance({
    url: `/api/${reqAddr}`,
    method: 'get',
  });

  res.send({ data: data.data });
}
