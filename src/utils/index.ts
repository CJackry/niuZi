/**
 * node 成功 返回对象
 */
export const successReturnObj = (data = null) => ({
  data,
  code: 200,
  success: true,
  msg: 'ok',
});

export const errorReturnObj = (data = null) => ({
  data,
  code: 500,
  success: false,
  msg: 'error',
});
