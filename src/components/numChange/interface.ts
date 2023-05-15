import React from 'react';

export interface NumChangeFun{
  (value: number): void;
}

export interface CustomClasses{
  root?: string;
  input?: string;
  btn?: string;
}

export interface NumChangeProps{
  type: 'floatRight' | 'center';
  onChange: React.ChangeEventHandler;
  defaultValue: number;
  min?: number | 1;
  max?: number;
  customClasses?: CustomClasses
}
