import axios, { AxiosRequestConfig } from 'axios';

export type RESPONSE<T> = {
    code: number;
    data: T;
    message: string;
    success: boolean;
};
type NzInstance = <T = object>(config: AxiosRequestConfig) => Promise<T extends Blob ? Blob: RESPONSE<T>>
/**
* 客户端axios实例
 */
const clientInstance = axios.create();
const clientRequest:NzInstance = clientInstance.request;

/**
* 客户端axios响应拦截器
 */
clientInstance.interceptors.response.use(
  (response) => response.data,
);

export default clientRequest;
