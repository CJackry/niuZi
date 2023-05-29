import React, { useEffect, useState } from 'react';
import { NumChangeProps } from '@/src/components/numChange/interface';
import clsx from 'clsx';
import NumInput from '@/src/components/numChange/comps/numInput';
// import { useWhyDidYouUpdate } from 'ahooks';
import NumBtn from './comps/numBtn';
import classes from './numChange.module.scss';

const NumChange:React.FC<NumChangeProps> = (props) => {
  const {
    onChange, defaultValue, max,
    min, customClasses, type,
  } = props;
  const defaultVal = max && defaultValue >= max ? max : defaultValue;
  const [val, setVal] = useState(defaultVal);
  const [addDisable, setAddDisable] = useState(false);
  const [reduceDisable, setReduceDisable] = useState(false);
  // useWhyDidYouUpdate('NumChange', props);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number((e.target as HTMLInputElement).value) || 1;
    setVal(num);
    console.log('numChange ', num);
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
    if (onChange) onChange(val);
  }, [val]);
  return (
    <div className={clsx(classes.root, customClasses?.root)}>
      {
        type === 'floatRight' ? (
          <div className={classes.floatRight}>
            <NumInput val={val} onInput={handleInput} />
            <div>
              <NumBtn type="+" onClick={handleAdd} disabled={addDisable} />
              <NumBtn type="-" onClick={handleReduce} disabled={reduceDisable} />
            </div>
          </div>
        ) : (
          <div className={classes.center}>
            <NumBtn type="+" onClick={handleAdd} disabled={addDisable} />
            <NumInput val={val} onInput={handleInput} />
            <NumBtn type="-" onClick={handleReduce} disabled={reduceDisable} />
          </div>
        )
      }
    </div>
  );
};

export default NumChange;
