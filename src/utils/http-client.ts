import axios from 'axios';

/**
* 客户端axios实例
 */
const clientInstance = axios.create();

/*
* 客户端axios响应拦截器
 */
clientInstance.interceptors.response.use(
  (response) => response.data,
);

export default clientInstance;
