/**
 * node 成功 返回对象
 */
export interface ReturnInter{
  data: null|string,
  code: number,
  success: boolean,
  msg: string
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SuccessReturnObj<DATA = any> = (data:DATA)=>ReturnInter;

export const successReturnObj:SuccessReturnObj = (data):ReturnInter => ({
  data: data || null,
  code: 200,
  success: true,
  msg: 'ok',
});

export const errorReturnObj = (data: null | string = null):ReturnInter => ({
  data,
  code: 500,
  success: false,
  msg: 'error',
});
