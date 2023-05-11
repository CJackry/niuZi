export interface NumChangeFun{
  (value: number): void;
}

export interface NumChangeProps{
  onChange: NumChangeFun;
  defaultValue: number;
  min?: number | 1;
  max?: number;
  customClasses?: {
    root?: string
    input?: string,
    btn?: string,
  }
}
