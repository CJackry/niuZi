import axios from 'axios';

/**
 * 服务端axios实例
 */
const serverInstance = axios.create({
  timeout: 5000,
});

/**
 * 代理转发
 * */
serverInstance.interceptors.request.use((request) => {
  const targetUrl = 'http://localhost:3002';
  console.log('url: ', request.url);
  if (request.url.startsWith('/api')) {
    request.url = request.url.replace('/api', '');
    request.baseURL = targetUrl;
  }
  return request;
});

export default serverInstance;
