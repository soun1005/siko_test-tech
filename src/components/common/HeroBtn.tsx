import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  text: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  isActive?: boolean;
};

const HeroBtn = ({ text, icon = null, onClick, isActive }: Props) => {
  return (
    <button
      className="rounded-full bg-gradient-to-r from-logoColor via-blueAccent to-greenAccent hover:animate-float10"
      onClick={onClick}
    >
      {/* border width -> m-0.5 */}
      <p
        className={`block text-white px-10 py-4 font-semibold rounded-full m-0.5 hover:bg-transparent duration-300 ${
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

export default HeroBtn;
// bg-gradient-to-r from-blueAccent to-greenAccent
