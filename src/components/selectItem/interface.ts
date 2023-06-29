import { ReactNode } from 'react';

export interface SelectItemProps{
  children?: ReactNode;
  classes?: {
    root?: string,
  },
  onClick?: (val: string) => void;
  isSelected?: boolean;
}
