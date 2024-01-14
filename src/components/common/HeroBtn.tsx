import { MouseEventHandler, ReactNode } from "react";

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
        className={`m-0.5 block rounded-full px-10 py-4 font-semibold text-white duration-300 hover:bg-transparent screenXL:px-6 screenXL:py-2 screenXL:font-medium tablet:px-4 tablet:text-xSmall tablet:font-medium ${
          isActive ? "bg-transparent" : "bg-black"
        } `}
      >
        {" "}
        {text}
      </p>

      {icon}
    </button>
  );
};

export default HeroBtn;
