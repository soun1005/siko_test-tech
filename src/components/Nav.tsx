import logo from '../assets/Siko-logo.png';

const Nav = () => {
  return (
    <div className="min-h-full">
      <div className="container h-40 displayFlex-[space-between] text-basic text-white ">
        <div>
          <img src={logo} alt="logo" />
        </div>

        {/* menu */}
        <ul className="w-10/12 displayFlex-[center] gap-20">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/" className="displayFlex-[center]">
              Nos services{' '}
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </a>
          </li>
          <li>
            <a href="/">Devenir partenaire</a>
          </li>
          <li>
            <a href="/">Espace marchand</a>
          </li>
        </ul>
        <div>
          <button className="rounded-full border-solid border-[3px] py-2 px-10 displayFlex-[center] border-yellow ">
            <p>Simulation</p>
            <span className="material-symbols-outlined">
              keyboard_double_arrow_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
