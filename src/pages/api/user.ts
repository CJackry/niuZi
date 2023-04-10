import type { NextApiRequest, NextApiResponse } from 'next';

type User = {
    name:string,
    password: string
}

export function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>,
):void {
  console.log(req);
  if (req.query) {
    const { name, password } = req.query;
    console.log(name, password);
  }
  switch (req.url) {
    case 'login': {
      res.status(200).json({ name: 'Jack', password: '123' });

      break;
    }
    case 'register': {
      res.status(200).json({ name: 'Jack', password: '123' });
      break;
    }
    default:
      res.status(200).json({ name: 'Jack', password: '123' });
  }
}
