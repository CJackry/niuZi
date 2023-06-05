import { NextApiRequest, NextApiResponse } from 'next';
import { errorReturnObj, ReturnInter, successReturnObj } from '@/src/utils';
import redisClient from '@/src/utils/redis';
import nookies from 'nookies';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnInter>,
):Promise<void> {
  const { id } = req.cookies;
  if (id !== undefined) await redisClient.destroy(id);
  else { res.status(400).send(errorReturnObj('notLogin')); }
  nookies.destroy({ res }, 'id');
  res.status(200).send(successReturnObj('succeed'));
}
