import axios, { AxiosRequestConfig } from 'axios';

/**
* 客户端axios实例
 */
const clientInstance = axios.create();

export type RESPONSE<T> = {
  code: number;
  data: T;
  msg: string;
  success: boolean;
};

type Instance = <T = object>(config: AxiosRequestConfig) => Promise<T extends Blob ? Blob : RESPONSE<T>>;

const clientRequest: Instance = clientInstance.request;
/**
* 客户端axios响应拦截器
 */
clientInstance.interceptors.response.use(
  (response) => response.data,
);

export default clientRequest;
