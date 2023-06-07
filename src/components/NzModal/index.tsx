import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';
import clsx from 'clsx';
import classes from './nzModal.module.scss';

interface CustomClasses{
  root?: string;
  overlay?: string;
  content?: string;
}

type Props = {
  isOpen: boolean;
  customClasses?: CustomClasses;
  children?: ReactNode;
  content?: string;
  title?: string;
  footerCom: ReactNode;
  handleClose?: () => void;
}

const NzModal:React.FC<Props> = (props) => {
  const {
    isOpen, customClasses,
    children, title,
    footerCom, handleClose,
  } = props;
  return (
    <ReactModal
      className={clsx(classes.content, customClasses?.content)}
      isOpen={isOpen}
      overlayClassName={clsx(classes.overlay, customClasses?.overlay)}
    >
      <div className={classes.header}>
        {title}
        {handleClose ? <span>x</span> : ''}
      </div>
      {children}
      {footerCom}
    </ReactModal>
  );
};

export default NzModal;
