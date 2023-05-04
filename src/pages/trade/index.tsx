import React from 'react';
import VTrade from '@/src/views/VTrade';

const Trade:React.FC = () => (
  <VTrade />
);

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   if (!context.req.cookies.id) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// };

export default Trade;
