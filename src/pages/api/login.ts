import type { NextApiRequest, NextApiResponse } from 'next';
import redis from '@/src/utils/redis';
import { nanoid } from 'nanoid';
import nookies from 'nookies';

type resData = {
    message:string,
    status_code: number
}
type loginData = {
    token:string,
    name: string
}

const loginSaveRedis = async (res:NextApiResponse, loginInfo:loginData) => {
  const id = nanoid();
  await redis.set(
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
  res: NextApiResponse<resData>,
):Promise<void> {
  const token = 'token';
  const resBody:resData = { message: '', status_code: -1 };
  const { name, password } = req.query;
  if (name === '123' && password === '123') {
    const loginInfo:loginData = { token, name };
    await loginSaveRedis(res, loginInfo).then((r) => console.log(r));
    resBody.message = 'login succeed!';
    resBody.status_code = 200;
  } else {
    resBody.message = 'login failed!';
    resBody.status_code = 403;
  }
  res.send(resBody);
}
