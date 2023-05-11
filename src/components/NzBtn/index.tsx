import React, { useCallback, useRef, useState } from 'react';
import clsx from 'clsx';
import { NzBtnProps } from '@/src/components/NzBtn/interface';
import originClasses from './NzBtn.module.scss';

const NzBtn:React.FC<NzBtnProps> = (props) => {
  const { onClick, classes } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const btn = useRef(null);
  const handleClick = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | KeyboardEvent) => {
    let promise: Promise<boolean | void> | void;
    console.log('nzBtn is clicked');
    if (disabled || loading) {
      return;
    }
    if (onClick) {
      promise = onClick(e as React.MouseEvent<HTMLButtonElement, MouseEvent>);
    }
    if (promise) {
      console.log('promise');
      setLoading(true);
      setDisabled(true);
      try {
        promise.finally(() => {
          setLoading(false);
          setDisabled(false);
        });
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
  }, [loading, onClick, disabled]);
  return (
    <button
      className={clsx(originClasses.btnRoot, classes?.root)}
      ref={btn}
      onClick={handleClick}
      disabled={disabled}
    >
      {loading ? 'loading' : 'NzBtn'}
    </button>

  );
};

export default NzBtn;
