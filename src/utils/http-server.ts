import axios, { AxiosRequestConfig } from 'axios';

export type RESPONSE<T> = {
  code: number;
  data: T;
  msg: string;
  success: boolean;
};

/**
 * 服务端axios实例
 */
const serverInstance = axios.create();

type Instance = <T = object>(config: AxiosRequestConfig) => Promise<T extends Blob ? Blob : RESPONSE<T>>;

const serverRequest: Instance = serverInstance.request;

/**
 * 代理转发
 * */
serverInstance.interceptors.request.use((request) => {
  const targetUrl = 'http://localhost:3002';
  console.log('server url: ', request.url);
  if (request.url?.startsWith('/api')) {
    request.url = request.url.replace('/api', '');
    request.baseURL = targetUrl;
  }
  return request;
});

export default serverRequest;
