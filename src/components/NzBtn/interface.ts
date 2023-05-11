import React, { ReactNode } from 'react';

export interface NzBtnProps{
  children?: ReactNode,
  onClick: React.MouseEventHandler,
  classes?: {
    root?: string,
    content?: string,
    overlay?: string,
    btnRoot?: string,
  }
}
