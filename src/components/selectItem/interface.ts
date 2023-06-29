import { ReactNode } from 'react';

export interface SelectItemProps{
  children?: ReactNode;
  classes?: {
    root?: string,
  },
  onClick?: (val: unknown) => void;
  isSelected?: boolean;
}
