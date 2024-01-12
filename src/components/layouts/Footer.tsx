import logo from '../../assets/footer-logo.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import whatsapp from '../../assets/whatsapp.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
  return (
    <div className="mt-pageGap">
      <div className="container text-white">
        {/* logo & menu */}
        <div className="flex justify-between mb-pageGap">
          <div className="w-1/3">
            <div className="mb-space1r">
              <img src={logo} alt="logo" />
            </div>
            <p className="text-medium text-gray4 font-extralight">
              Siko Mobility respecte les normes sociales et environnementales et
              s'inscrit dans une démarche de progrès.
            </p>
          </div>
          <div className="flex w-3/5 justify-between pl-[5rem]">
            <div>
              <h3 className="mb-4">SIKO MOBILITY</h3>
              <ul className="text-medium text-gray4 ">
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
            <div>
              <h3 className="mb-4">INFORMATIONS</h3>
              <ul className="text-medium text-gray4">
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
            <div>
              <h3 className="mb-4">SERVICES</h3>
              <ul className="text-medium text-gray4">
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
        <div className="flex justify-between items-center my-[30px] border-t-[1px] border-gray4 pt-space1r">
          <p className="text-medium text-gray4">
            © 2021 Siko Mobility. Tous droits réservés.
          </p>
          {/* icons */}
          <div className="displayFlex-[flex-start] gap-2">
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
