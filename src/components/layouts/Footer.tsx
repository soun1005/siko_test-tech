import logo from '../../assets/footer-logo.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import whatsapp from '../../assets/whatsapp.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
  return (
    <div className="mt-pageGap">
      <div className="container text-white">
        {/* <div className="container text-white screenXL:bg-red-800 screenL:bg-orange-800 tablet:bg-yellow-800"> */}
        {/* logo & menu */}
        <div className="flex justify-between mb-pageGap phone:flexColCenter-[center]">
          <div className="w-[27%] phone:w-full phone:mb-8">
            <div className="mb-space1r phone:flexColCenter-[center]">
              <img src={logo} alt="logo" />
            </div>
            <p className="text-medium text-gray4 tracking-tighter font-extralight screenL:text-medium tablet:text-[10px] phone:text-medium phone:text-center">
              Siko Mobility respecte les normes sociales et environnementales et
              s'inscrit dans une démarche de progrès.
            </p>
          </div>
          <div className="flex w-3/5 justify-between pl-[5rem] screenXL:pl-0 tablet:w-[67%] tablet:gap-2 phone:w-full phone:flexColCenter-[center]">
            <div className="phone:inline-block phone:w-full phone:text-center">
              <h3 className="mb-4 phone:mb-2 screenL:text-medium tablet:text-xSmall phone:text-basic">
                SIKO MOBILITY
              </h3>
              <ul className="text-medium text-gray4 tracking-tighter screenL:text-[10px] phone:mb-8 phone:text-medium">
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Accueil</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Devenir partenaire</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Qui sommes-nous?</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Contact</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="phone:inline-block phone:w-full phone:text-center">
              <h3 className="mb-4 phone:mb-2 screenL:text-medium tablet:text-xSmall phone:text-basic">
                INFORMATIONS
              </h3>
              <ul className="text-medium text-gray4 tracking-tighter screenL:text-[10px] phone:mb-8 phone:text-medium">
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Mentions légales</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Conditions générales de vente</a>
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
              <h3 className="mb-4 phone:mb-2 screenL:text-medium tablet:text-xSmall phone:text-basic">
                SERVICES
              </h3>
              <ul className="text-medium text-gray4 tracking-tighter screenL:text-[10px] phone:mb-8 phone:text-medium">
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Nos services</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Assurance</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Forfait entretien</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Assistance dépannage</a>
                </li>
                <li className="mb-[8px] font-extralight hover:font-normal">
                  <a href="/">Garantie 3ans</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-between items-center my-[30px] border-t-[1px] border-gray4 pt-space1r phone:flex-col-reverse">
          <p className="text-medium text-gray4">
            © 2021 Siko Mobility. Tous droits réservés.
          </p>
          {/* icons */}
          <div className="displayFlex-[flex-start] gap-2 phone:mb-space1r phone:gap-6">
            <a href="/">
              <img src={facebook} alt="facebook" className="w-[2rem]" />
            </a>
            <a href="/">
              {' '}
              <img src={linkedin} alt="linkedin" className="w-[2rem]" />
            </a>
            <a href="/">
              {' '}
              <img src={twitter} alt="twitter" className="w-[2rem]" />
            </a>
            <a href="/">
              {' '}
              <img src={whatsapp} alt="whatsapp" className="w-[2rem]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
