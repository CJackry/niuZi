import React from 'react';
import { SelectItemProps } from '@/src/components/selectItem/interface';
import clsx from 'clsx';
import oriClasses from './selectItem.module.scss';

const SelectItem:React.FC<SelectItemProps> = ({
  children, onClick, classes, isSelected,
}) => (
  <div
    className={clsx(oriClasses.root, { [oriClasses.selected]: isSelected }, classes?.root)}
    onClick={onClick}
    role="button"
    tabIndex={0}
    title={String(children)}
  >
    {children}
  </div>
);

export default SelectItem;
