import React from 'react';
import { DealStatus } from '@/src/views/VPay/comps/taskProgress/interface';
import clsx from 'clsx';
import classes from './taskPart.module.scss';

type Props = {
  dealStatus: DealStatus;
}

const TaskPart:React.FC<Props> = ({ dealStatus }) => {
  let colorClass = classes.done;
  if (dealStatus.isFinish === 'doing') colorClass = classes.doing;
  else if (dealStatus.isFinish === 'incomplete') colorClass = classes.incomplete;
  return (
    <div className={classes.root}>
      <div className={classes.progress}>
        <span className={clsx(classes.line, colorClass)} />
        <span className={clsx(classes.partNum, colorClass)}>{dealStatus.partNum}</span>
        <span className={clsx(classes.line, colorClass)} />
      </div>
      <span className={clsx(classes.partName, colorClass)}>{`${dealStatus.partNum}. ${dealStatus.name}`}</span>
    </div>
  );
};

export default TaskPart;
