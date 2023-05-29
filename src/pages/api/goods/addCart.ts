import { NextApiRequest, NextApiResponse } from 'next';
import redisClient from '@/src/utils/redis';
import { ReturnInter, successReturnObj } from '@/src/utils';
import { AddCartInfo } from '@/src/views/VDetails/interface';

const addCartSaveRedis = async (
  res: NextApiResponse,
  cartInfo: AddCartInfo,
):Promise<void> => {
  const { cart, user } = cartInfo;
  await redisClient.set(user, cart);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnInter>,
):Promise<void> {
  const addCartInfo = req.body;
  await addCartSaveRedis(res, addCartInfo);
  res.status(200).send(successReturnObj('add successful!'));
}
