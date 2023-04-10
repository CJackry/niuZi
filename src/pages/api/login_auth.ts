import { NextApiRequest, NextApiResponse } from 'next';

type resData = {
    message: string,
    status_code: number
}
export default function handler(
  req:NextApiRequest,
  res:NextApiResponse<resData>,
):void {
  const body:resData = { message: '', status_code: -1 };
  const { name, password } = req.query;
  if (name === '123' && password === '123') {
    body.message = 'info correct';
    body.status_code = 200;
  } else {
    body.message = 'username or password incorrect';
    body.status_code = 403;
  }
  res.send(body);
}
