export interface DealStatus{
  name: string,
  partNum: number;
  isFinish: 'done'|'doing'|'incomplete';
}
