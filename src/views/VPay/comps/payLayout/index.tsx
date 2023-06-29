import React, { ReactNode } from 'react';
import PayHeader from '@/src/views/VPay/comps/payHeader';
import PaySummary from '@/src/views/VPay/comps/paySummary';

type Props = {
    children: ReactNode,
}

const PayLayout:React.FC<Props> = ({ children }) => (
  <>
    <PayHeader />
    {children}
    <PaySummary />
  </>
);

export default PayLayout;
