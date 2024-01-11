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
            <p>
              Siko Mobility respecte les normes sociales et environnementales et
              s'inscrit dans une démarche de progrès.
            </p>
          </div>
          <div className="flex w-3/5 justify-between pl-[5rem]">
            <div>
              <h3>SIKO MOBILITY</h3>
              <ul>
                <li>
                  <a href="/">Accueil</a>
                </li>
                <li>
                  <a href="/">Devenir partenaire</a>
                </li>
                <li>
                  <a href="/">Qui sommes-nous?</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>INFORMATIONS</h3>
              <ul>
                <li>
                  <a href="/">Mentions légales</a>
                </li>
                <li>
                  <a href="/">Conditions générales de vente</a>
                </li>
                <li>
                  <a href="/">Politique de confidentialité</a>
                </li>
                <li>
                  <a href="/">RGPD & Cookies</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>SERVICES</h3>
              <ul>
                <li>
                  <a href="/">Nos services</a>
                </li>
                <li>
                  <a href="/">Assurance</a>
                </li>
                <li>
                  <a href="/">Forfait entretien</a>
                </li>
                <li>
                  <a href="/">Assistance dépannage</a>
                </li>
                <li>
                  <a href="/">Garantie 3ans</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-between items-center my-[30px]">
          <p>© 2021 Siko Mobility. Tous droits réservés.</p>
          {/* icons */}
          <div className="displayFlex-[start] gap-2">
            <a href="/">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="/">
              {' '}
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="/">
              {' '}
              <img src={twitter} alt="twitter" />
            </a>
            <a href="/">
              {' '}
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
