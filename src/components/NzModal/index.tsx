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
    children, title = '',
    footerCom, handleClose,
  } = props;
  const closeClick = () => {
    if (typeof handleClose === 'function') {
      handleClose();
    }
  };
  return (
    <ReactModal
      className={clsx(classes.content, customClasses?.content)}
      isOpen={isOpen}
      overlayClassName={clsx(classes.overlay, customClasses?.overlay)}
      ariaHideApp={false}
    >
      <div className={clsx(classes.header, customClasses?.header)}>
        {title}
        {typeof handleClose === 'function' && (
          <button
            onClick={closeClick}
            className={classes.closeBtn}
          >
            x
          </button>
        )}
      </div>
      {children}
      {footerCom}
    </ReactModal>
  );
};

export default NzModal;
