import type { NextApiRequest, NextApiResponse } from 'next';
import redisClient from '@/src/utils/redis';
import { nanoid } from 'nanoid';
import nookies from 'nookies';
import { errorReturnObj, ReturnInter, successReturnObj } from '@/src/utils';

type loginData = {
    token:string,
    name: string
}

const loginSaveRedis = async (res:NextApiResponse, loginInfo:loginData) => {
  const id = nanoid();
  await redisClient.set(
    id,
    JSON.stringify({
      token: loginInfo.token,
      name: loginInfo.name,
    }),
  );
  nookies.set({ res }, 'id', id, {
    maxAge: 24 * 60 * 60,
    path: '/',
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnInter>,
):Promise<void> {
  const token = 'token';
  const { name, password } = req.query;
  // 模拟网络请求延迟2s
  setTimeout(async () => {
    console.log('发送login请求');
    if (name === '123' && password === '123') {
      const loginInfo: loginData = { token, name };
      await loginSaveRedis(res, loginInfo).then((r) => console.log(r));
      res.status(200).send(successReturnObj());
    } else {
      res.status(203).send(errorReturnObj('login fail!'));
    }
  }, 2000);
}
