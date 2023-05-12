import React, { useEffect, useRef, useState } from 'react';
import { NumChangeProps } from '@/src/components/numChange/interface';
import clsx from 'clsx';
import classes from './numChange.module.scss';

const NumChange:React.FC<NumChangeProps> = (props) => {
  const {
    onChange, defaultValue, max, min, customClasses,
  } = props;
  const defaultVal = max && defaultValue >= max ? max : defaultValue;
  const [val, setVal] = useState(defaultVal);
  const [addDisable, setAddDisable] = useState(false);
  const [reduceDisable, setReduceDisable] = useState(false);
  const numInput = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    const value = Number(numInput.current?.value) || 1;
    setVal(value);
    onChange(value);
  };
  const handleAdd = () => {
    const maxVal = max || 99;
    if (val < maxVal) setVal(val + 1);
  };
  const handleReduce = () => {
    const minVal = min || 1;
    if (val > minVal) setVal(val - 1);
  };
  useEffect(() => {
    if (max && val >= max) setAddDisable(true);
    if (min && val <= min) setReduceDisable(true);
  }, [val]);

  return (
    <div className={clsx(classes.chooseAmount, customClasses?.root)}>
      <input
        className={clsx(classes.numInput, customClasses?.input)}
        value={val}
        onInput={handleInput}
        ref={numInput}
      />
      <div>
        <button
          className={clsx(classes.changeBtn, customClasses?.btn)}
          onClick={handleAdd}
          disabled={addDisable}
        >
          +
        </button>
        <button
          className={clsx(classes.changeBtn, customClasses?.btn)}
          onClick={handleReduce}
          disabled={reduceDisable}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default NumChange;
