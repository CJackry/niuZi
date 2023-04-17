import redis from '@/src/utils/redis';
import { NextApiRequest, NextApiResponse } from 'next';
import { RESPONSE } from '@/src/utils/http-client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
):Promise<void> {
  const { id } = req.query;
  let body:RESPONSE<object>;
  const result = await redis.get(String(id));
  if (result) {
    body = {
      success: true, code: 200, message: '', data: JSON.parse(result),
    };
  } else {
    body = {
      success: false, code: 400, message: 'cannot get info', data: {},
    };
  }
  res.send(body);
}
