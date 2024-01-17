import logo from "../../assets/crocodile mobility.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import whatsapp from "../../assets/whatsapp.png";
import linkedin from "../../assets/linkedin.png";
import { fadeIn } from "../../helpers/variants";
import CustomMotionDiv from "../../helpers/customMotionDiv";

const Footer = () => {
  return (
    <CustomMotionDiv
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
      className="mt-pageGap"
    >
      <div className="container text-white">
        {/* logo & menu */}
        <div className="mb-pageGap flex justify-between phone:flexColCenter-[center]">
          <div className="w-[27%] phone:mb-8 phone:w-full">
            <div className="mb-space1r phone:flexColCenter-[center]">
              <img src={logo} alt="logo" className="w-3/4" />
            </div>
            <p className="text-medium font-extralight tracking-tighter text-gray4 screenL:text-medium tablet:text-[10px] phone:text-center phone:text-medium">
              Crocochat Mobility adhère aux normes sociales et environnementales
              tout en poursuivant son engagement envers l'amélioration continue.
            </p>
          </div>
          <div className="flex w-3/5 justify-between pl-[5rem] screenXL:pl-0 tablet:w-[67%] tablet:gap-2 phone:w-full phone:flexColCenter-[center]">
            <div className="phone:inline-block phone:w-full phone:text-center">
              <h3 className="mb-4 screenL:text-medium tablet:text-xSmall phone:mb-2 phone:text-basic">
                CROCOCHAT MOBILITY
              </h3>
              <ul className="text-medium tracking-tighter text-gray4 screenL:text-[10px] phone:mb-8 phone:text-medium">
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Accueil</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Devenir partenaire</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">About Crocochat mobility</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Contact</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">F & Q</a>
                </li>
              </ul>
            </div>
            <div className="phone:inline-block phone:w-full phone:text-center">
              <h3 className="mb-4 screenL:text-medium tablet:text-xSmall phone:mb-2 phone:text-basic">
                INFORMATIONS
              </h3>
              <ul className="text-medium tracking-tighter text-gray4 screenL:text-[10px] phone:mb-8 phone:text-medium">
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Mentions légales</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Conditions générales</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Politique de confidentialité</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">RGPD & Cookies</a>
                </li>
              </ul>
            </div>
            <div className="phone:inline-block phone:w-full phone:text-center">
              <h3 className="mb-4 screenL:text-medium tablet:text-xSmall phone:mb-2 phone:text-basic">
                SERVICES
              </h3>
              <ul className="text-medium tracking-tighter text-gray4 screenL:text-[10px] phone:mb-8 phone:text-medium">
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Nos services</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Options d'assurance</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Forfaits d'entretien</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Assistance dépannage</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Garantie 5ans</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="my-[30px] flex items-center justify-between border-t-[1px] border-gray4 pt-space1r phone:flex-col-reverse">
          <p className="text-medium text-gray4">
            © 2024 Crocochat Mobility. Tous droits réservés.
          </p>
          {/* icons */}
          <div className="gap-2 displayFlex-[flex-start] phone:mb-space1r phone:gap-6">
            <a href="/">
              <img src={facebook} alt="facebook" className="w-[2rem]" />
            </a>
            <a href="/">
              {" "}
              <img src={linkedin} alt="linkedin" className="w-[2rem]" />
            </a>
            <a href="/">
              {" "}
              <img src={twitter} alt="twitter" className="w-[2rem]" />
            </a>
            <a href="/">
              {" "}
              <img src={whatsapp} alt="whatsapp" className="w-[2rem]" />
            </a>
          </div>
        </div>
      </div>
    </CustomMotionDiv>
  );
};

export default Footer;
