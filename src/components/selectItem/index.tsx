import React from 'react';
import { SelectItemProps } from '@/src/components/selectItem/interface';
import clsx from 'clsx';
import oriClasses from './selectItem.module.scss';

const SelectItem:React.FC<SelectItemProps> = ({
  children, onClick, classes, isSelected,
}) => {
  const handleClick = () => {
    if (onClick) onClick(String(children));
  };
  return (
    <div
      className={clsx(oriClasses.root, { [oriClasses.selected]: isSelected }, classes?.root)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      title={String(children)}
    >
      {children}
    </div>
  );
};

export default SelectItem;
