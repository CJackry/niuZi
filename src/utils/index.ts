/**
 * node 成功 返回对象
 */
export interface ReturnInter{
  data: null|string,
  code: number,
  success: boolean,
  msg: string
}
export const successReturnObj = (data = null):ReturnInter => ({
  data,
  code: 200,
  success: true,
  msg: 'ok',
});

export const errorReturnObj = (data: null| string = null):ReturnInter => ({
  data,
  code: 500,
  success: false,
  msg: 'error',
});
