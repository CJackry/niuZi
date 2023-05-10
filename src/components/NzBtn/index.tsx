import React, { ReactNode } from 'react';
import * as ReactModal from 'react-modal';
import originClasses from './NzBtn.module.scss';

type Props = {
  children?: ReactNode,
  isOpen: boolean,
  classes?: {
    root?: string,
    content?: string
  }
}

const NzBtn:React.FC<Props> = (props) => {
  const { isOpen, classes, children } = props;
  return (
    <ReactModal
      isOpen={isOpen}
      preventScroll
      className={originClasses.root}
      overlayClassName={originClasses.overlay}
    >
      <div className={originClasses.modal}>
        <span>我是NzBtn</span>
      </div>
    </ReactModal>
  );
};

export default NzBtn;
