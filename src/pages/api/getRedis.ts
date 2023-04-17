import redisClient from '@/src/utils/redis';
import { NextApiRequest, NextApiResponse } from 'next';
import { errorReturnObj } from '@/src/utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
):Promise<void> {
  const { id } = req.query;
  console.log('get', req.query);
  try {
    const result = await redisClient.get(String(id));
    console.log('redisGet', result);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(401).send(errorReturnObj('未登录！'));
    }
  } catch (err) {
    res.status(500).send(err || errorReturnObj());
  }
}
