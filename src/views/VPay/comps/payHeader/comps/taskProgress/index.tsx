import React from 'react';
import { DealStatus } from '@/src/views/VPay/comps/payHeader/comps/taskProgress/interface';
import TaskPart from '@/src/views/VPay/comps/payHeader/comps/taskProgress/comps/taskPart';
import classes from './taskProgress.module.scss';

type Props = {
  taskStatusArray: Array<DealStatus>;
}

const TaskProgress:React.FC<Props> = ({ taskStatusArray }) => (
  <div className={classes.root}>
    {
      taskStatusArray.map((task) => (
        <TaskPart dealStatus={task} />
      ))
    }
  </div>
);

export default TaskProgress;
