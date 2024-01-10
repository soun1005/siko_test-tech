import { ReactNode } from 'react';

type Props = {
  text: string;
  styles: string;
  icon: ReactNode;
};

const Btn = ({ text, icon, styles }: Props) => {
  return (
    <button className={`rounded-full ${styles}`}>
      {text}
      {icon}
    </button>
  );
};

export default Btn;
