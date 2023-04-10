import redis from '@/src/utils/redis';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  await redis.get('id', (result) => {
    console.log(result);
    res.send(result);
  });
  res.send({ message: '123' });
}
