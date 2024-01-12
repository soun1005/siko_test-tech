import SquareBtn from '../common/SquareBtn';

const Partenaire = () => {
  return (
    <div className="bg-gradient-to-r from-blueAccent to-greenAccent bg-200% animate-gradientSlow mt-pageGap h-[33rem] screenXL:h-[28rem] phone:h-[25rem]">
      <div className="container displayFlex-[space-between] tablet:flexColCenter-[space-between] flex-col h-full py-[8rem] screenXL:py-[5rem] phone:py-[3rem]">
        <h3 className="text-center text-titleXL screenXL:text-titleL text-background tablet:leading-[1] phone:tracking-tighter phone:text-left">
          Vous avez un site e-commerce ou une boutique ?
        </h3>
        <p className="text-white text-center text-titleM tablet:font-extralight tablet:text-titleS phone:text-left phone:text-medium">
          Rejoignez nos partenaires et offrez de multiples services et avantages
          à vos clients.
          <br />
          Augmentez votre chiffre d’affaire avec notre solution en financement.
        </p>

        <SquareBtn
          text="Devenir Partenaire"
          styles="bg-transparent text-titleM border-background px-12 py-4 hover:bg-black hover:text-white duration-300 screenXL:px-8 screenXL:py-2 screenXL:text-basic"
        />
      </div>
    </div>
  );
};

export default Partenaire;
