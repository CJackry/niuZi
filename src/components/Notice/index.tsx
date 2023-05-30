import React, { ReactNode } from 'react';
import classes from './notice.module.scss';

type Props = {
  children: ReactNode,
  type: 'success'|'fail',
  handleClose?: React.MouseEventHandler,
}

const typeClass = {
  success: {
    icon: '',
    background: 'green',
    contentColor: 'blue',
    borderColor: '#e3e4e5',
  },
  fail: {
    icon: '',
    background: 'rgb(253 243 243/1)',
    contentColor: 'rgb(184 48 46/1)',
    borderColor: 'rgb(243 198 195/1)',
  },
};

const Notice:React.FC<Props> = ({ children, type, handleClose }) => {
  let noticeStatus;
  if (type === 'success') {
    noticeStatus = typeClass.success;
  } else {
    noticeStatus = typeClass.fail;
  }
  return (
    <div
      className={classes.root}
      style={{ borderColor: noticeStatus.borderColor, background: noticeStatus.background }}
    >
      <div
        className={classes.status}
      >
        {noticeStatus.icon}
      </div>
      <div className={classes.col3}>
        <div
          className={classes.notice}
          style={{ color: noticeStatus.contentColor }}
        >
          {children}
        </div>
        <button className={classes.close} onClick={handleClose}>x</button>
      </div>
    </div>
  );
};

export default Notice;
