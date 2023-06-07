import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';
import clsx from 'clsx';
import classes from './nzModal.module.scss';

interface CustomClasses{
  root?: string;
  overlay?: string;
  content?: string;
  header?: string;
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
  const closeClick = () => {
    if (handleClose) {
      handleClose();
    }
  };
  return (
    <ReactModal
      className={clsx(classes.content, customClasses?.content)}
      isOpen={isOpen}
      overlayClassName={clsx(classes.overlay, customClasses?.overlay)}
    >
      <div className={clsx(classes.header, customClasses?.header)}>
        {title}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        {handleClose ? <span onClick={closeClick}>x</span> : ''}
      </div>
      {children}
      {footerCom}
    </ReactModal>
  );
};

export default NzModal;
