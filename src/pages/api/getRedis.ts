import redis from '@/src/utils/redis';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
):Promise<void> {
  console.log('getRedis');
  const { id } = req.query;
  console.log(String(id));
  await redis.get(String(id)).then((result) => {
    console.log('redisGet: ', result);
    res.send(result);
  });
  // res.send({ message: '123' });
}
