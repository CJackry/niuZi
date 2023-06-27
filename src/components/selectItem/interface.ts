import React, { ReactNode } from 'react';

export interface SelectItemProps{
  children?: ReactNode;
  classes?: {
    root?: string,
  },
  onClick: React.MouseEventHandler;
  isSelected?: boolean;
}
