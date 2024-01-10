import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  text: string;
  styles: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  isActive?: boolean;
};

const Btn = ({ text, icon = null, styles, onClick, isActive }: Props) => {
  return (
    <button
      className={`rounded-full ${styles} ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Btn;
