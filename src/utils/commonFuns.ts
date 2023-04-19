// 用于将数值转化为两位字符串，如0->'00'
export function numToStringDouble(num:number) {
  if (num < 10) return `0${String(num)}`;
  return String(num);
}

export const getStaticData = async (url:string) => {
  const res = await fetch(url);
  return res.json();
};
