import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  text: string;

  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  isActive?: boolean;
};

const Btn = ({ text, icon = null, onClick, isActive }: Props) => {
  return (
    <button
      className="rounded-full bg-gradient-to-r from-blueAccent to-greenAccent"
      onClick={onClick}
    >
      <p
        className={`block text-white px-4 py-2 font-semibold rounded-full m-1 ${
          isActive ? 'bg-transparent' : 'bg-black'
        } `}
      >
        {' '}
        {text}
      </p>

      {icon}
    </button>
  );
};

export default Btn;
// bg-gradient-to-r from-blueAccent to-greenAccent
