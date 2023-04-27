import clientRequest from '@/src/utils/http-client';
import { PhoneListModel } from '@/src/views/VSearch/interface';

export const getPhone = async (page:number) => clientRequest<PhoneListModel>({
  url: '/api/phones',
  params: { page },
});
