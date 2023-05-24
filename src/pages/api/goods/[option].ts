import { NextApiRequest, NextApiResponse } from 'next';
import serverRequest from '@/src/utils/http-server';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { option, ...params } = req.query;
  const result = await serverRequest({
    url: `/api/${option}`,
    method: 'get',
    params,
  });
  console.log(result);
  res.status(200).send(result.data);
}
