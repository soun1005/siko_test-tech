type Props = {
  text: string;
  styles: string;
};

const SquareBtn = ({ text, styles }: Props) => {
  return (
    <>
      <button
        className={`${styles} rounded-[5px] border-[3px] hover:animate-float10`}
      >
        {text}
      </button>
    </>
  );
};

export default SquareBtn;
