import clientInstance from '@/src/utils/http-client';

export const getNavList = () => clientInstance({
  url: '/api/navList',
  method: 'get',
});
