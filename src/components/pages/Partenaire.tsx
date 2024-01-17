import SquareBtn from "../common/SquareBtn";
import { fadeIn } from "../../helpers/variants";
import CustomMotionDiv from "../../helpers/customMotionDiv";

const Partenaire = () => {
  return (
    <div className="mt-pageGap h-[33rem] animate-gradientSlow bg-gradient-to-r from-blueAccent to-greenAccent bg-200% screenXL:h-[28rem] phone:h-[25rem]">
      <div className="container h-full flex-col py-[8rem] displayFlex-[space-between] screenXL:py-[5rem] tablet:flexColCenter-[space-between] phone:py-[3rem]">
        <CustomMotionDiv
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="w-full "
        >
          <h3 className="text-center text-titleXL text-background screenXL:text-titleL tablet:leading-[1] phone:text-left phone:tracking-tighter">
            Possédez-vous un site e-commerce ou une boutique?
          </h3>
        </CustomMotionDiv>
        <CustomMotionDiv
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="w-full"
        >
          <p className="text-center text-titleM text-white tablet:text-titleS tablet:font-extralight phone:text-left phone:text-medium">
            Rejoignez nos partenaires et offrez de multiples services et
            avantages à vos clients.
            <br />
            Augmentez votre chiffre d’affaires avec notre solution de
            financement.
          </p>
        </CustomMotionDiv>
        <CustomMotionDiv
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="w-full text-center"
        >
          <SquareBtn
            text="Collaborer avec Nous"
            styles="bg-transparent text-titleM border-background px-12 py-4 hover:bg-black hover:text-white duration-300 screenXL:px-8 screenXL:py-2 screenXL:text-basic"
          />
        </CustomMotionDiv>
      </div>
    </div>
  );
};

export default Partenaire;
