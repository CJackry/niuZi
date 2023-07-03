import { useEffect, useState } from 'react';

export interface WindowHW{
  width: number,
  height: number,
}

// 实时获取当前窗口大小
const useWindowSize = () => {
  const [windowHW, setWindowHW] = useState<WindowHW>({
    width: 0,
    height: 0,
  });

  const handler = () => {
    setWindowHW({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handler();
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);
  return windowHW;
};

export default useWindowSize;
