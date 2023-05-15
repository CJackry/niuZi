import React from 'react';

type Props = {
  type: string,
  onClick: React.MouseEventHandler,
  disabled: boolean,
}

const NumBtn:React.FC<Props> = (props) => {
  const {
    type, onClick, disabled,
  } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
    >
      {type}
    </button>
  );
};

export default NumBtn;
