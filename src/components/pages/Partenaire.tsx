import SquareBtn from '../common/SquareBtn';

const Partenaire = () => {
  return (
    <div className="bg-gradient-to-r from-blueAccent to-greenAccent bg-200% animate-gradientSlow mt-pageGap h-[33rem]">
      <div className="container displayFlex-[space-between] flex-col h-full py-[8rem]">
        <h3 className="text-titleXL text-background">
          Vous avez un site e-commerce ou une boutique ?
        </h3>
        <input type="text" />
        <p className="text-white text-center text-titleM">
          Rejoignez nos partenaires et offrez de multiples services et avantages
          à vos clients.
          <br />
          Augmentez votre chiffre d’affaire avec notre solution en financement.
        </p>

        <SquareBtn
          text="Devenir Partenaire"
          styles="bg-transparent text-titleM border-background px-12 py-4 hover:bg-black hover:text-white duration-300"
        />
      </div>
    </div>
  );
};

export default Partenaire;
