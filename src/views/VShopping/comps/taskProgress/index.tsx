import React from 'react';
import { DealStatus } from '@/src/views/VShopping/comps/taskProgress/interface';
import { nanoid } from 'nanoid';
import TaskPart from '../taskPart';
import classes from './taskProgress.module.scss';

type Props = {
  taskStatusArray: Array<DealStatus>;
}

const TaskProgress:React.FC<Props> = ({ taskStatusArray }) => {
  const key = [nanoid(), nanoid(), nanoid()];
  return (
    <div className={classes.root}>
      {
          taskStatusArray.map((task, index) => (
            <TaskPart dealStatus={task} key={key[index]} />
          ))
        }
    </div>
  );
};

export default TaskProgress;
