import redis from '@/src/utils/redis';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
):Promise<void> {
  const { id } = req.query;
  const result = await redis.get(String(id));
  console.log('redisGet: ', result);
  if (result) res.send(result);
  else res.send({ code: 403, message: 'cannot get result' });
}
