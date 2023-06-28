import React, { ReactNode } from 'react';
import PayHeader from '@/src/views/VPay/comps/payHeader';
import PaySummary from '@/src/views/VPay/comps/paySummary';
import { PaySummery } from '@/src/views/VPay/interface';

type Props = {
    children: ReactNode,
}

const paySum: PaySummery = {
  totalPrice: 4955,
  addrInfo: {
    name: 'jack',
    phone: 12349874551,
    addr: '等你回复数据库更不能是根据考生的',
  },
  express: 50,
};

const PayLayout:React.FC<Props> = ({ children }) => (
  <>
    <PayHeader />
    {children}
    <PaySummary paySum={paySum} />
  </>
);

export default PayLayout;
