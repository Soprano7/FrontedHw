import type {ReactNode} from 'react'

type ButtonPropsType = {
  onClick: () => void;
  children: ReactNode;
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
    props.onClick();
  };

  return (
      <button id={'hw04-button'} onClick={callBackHandler}>
        {props.children}
      </button>
  );
};