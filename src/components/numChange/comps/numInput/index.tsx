import React from 'react';

type Props = {
  val: number,
  onInput: (e:React.ChangeEvent<HTMLInputElement>)=> void;
}

const NumInput:React.FC<Props> = (props) => {
  const { val, onInput } = props;
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput(e);
  };
  return (
    <input
      value={val}
      onChange={(e) => { handleInput(e); }}
    />
  );
};

export default NumInput;
