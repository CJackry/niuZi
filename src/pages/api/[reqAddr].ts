import { NextApiRequest, NextApiResponse } from 'next';
import serverInstance from '@/src/utils/http-server';

// export default async function handler(req:NextApiRequest, res:NextApiResponse):Promise<void> {
//   const { reqAddr } = req.query;
//   // const targetUrl = 'http://localhost:3002';
//   // const proxyUrl = req.url?.replace('/api', targetUrl);
//   // const instance = axios.create();
//   // const data = await instance({
//   //   url: proxyUrl,
//   //   method: 'get',
//   // });
//   const data = await serverInstance({
//     url: `api/${reqAddr}`,
//     method: 'get',
//   });
//
//   res.send({ data: data.data });
// }
