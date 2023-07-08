import React, { ReactNode } from 'react';
import clsx from 'clsx';
import originClasses from './nzInput.module.scss';

type Props = {
  classes?: {
    root?: string,
    title?: string,
    input?: string,
    tips?: string
  }
  onInput?: (content: string) => void,
  children?: ReactNode,
  placeholder?: string,
  type?: 'text' | 'password',
  isShowTips?: boolean,
  tips?: string
}

const NzInput:React.FC<Props> = ({
  classes, onInput, children, placeholder, type, tips, isShowTips,
}) => {
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (onInput) onInput(e.currentTarget.value);
  };
  return (
    <div>
      <div className={clsx(originClasses.inputTable, classes?.root)}>
        <span className={clsx(originClasses.inputTit, classes?.title)}>{children}</span>
        <input
          className={clsx(originClasses.registerInput, classes?.input)}
          onInput={(e) => handleInput(e)}
          placeholder={placeholder}
          type={type || 'text'}
        />
      </div>
      <span className={clsx(originClasses.tips, classes?.tips)}>{isShowTips ? tips : ''}</span>
    </div>
  );
};

export default NzInput;
