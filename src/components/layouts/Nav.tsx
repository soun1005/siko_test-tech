import logo from '../../assets/Siko-logo.png';
import { useState, useEffect, useRef } from 'react';

const Nav = () => {
  // hidden dropdown menu for desktop version
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const navHiddenMenu = useRef<HTMLUListElement | null>(null);
  const [menuAnimation, setMenuAnimation] = useState(false);

  // handle dropdown menu
  useEffect(() => {
    const handleOpenMenu: any = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Update the state when the div loses focus

      if (
        hiddenMenu &&
        navHiddenMenu.current?.className.includes('active') &&
        !navHiddenMenu.current.contains(e.target as Node)
      ) {
        setHiddenMenu(false);
      }
    };
    document.addEventListener('mousedown', handleOpenMenu);
    return () => {
      document.removeEventListener('click', handleOpenMenu);
    };
  }, [hiddenMenu]);

  // dropdown menu animation
  useEffect(() => {
    if (hiddenMenu) {
      setMenuAnimation(true);
    } else {
      setTimeout(() => {
        setMenuAnimation(false);
      }, 300); // Adjust this delay to match your CSS transition duration
    }
  }, [hiddenMenu]);

  return (
    <div className="min-h-full">
      <div className="container h-40 displayFlex-[space-between] text-basic text-white ">
        <div>
          <img src={logo} alt="logo" />
        </div>

        {/* menu */}
        <ul className="w-10/12 displayFlex-[center] gap-20">
          <li className="hover:animate-float5 p-2">
            <a href="/">About</a>
          </li>
          {/* when hiddenMenu is opened, no hover */}
          <li className="relative hover:animate-float5 p-2">
            <div
              className="displayFlex-[center] cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setHiddenMenu(!hiddenMenu);
              }}
            >
              Nos services{' '}
              {hiddenMenu ? (
                <span className="material-symbols-outlined">
                  keyboard_arrow_up
                </span>
              ) : (
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              )}
              {/* nav dropdown hidden menu */}
              <ul
                className={`${
                  !hiddenMenu
                    ? 'translate-y-[-150%] opacity-0 w-[12rem] absolute top-[2.5rem]left-0 bg-gray1 p-4 rounded-lg duration-500'
                    : 'hidden-menu w-[12rem] opacity-100 absolute left-0 bg-gray1 p-4 top-[2.5rem] rounded-lg duration-300 translate-y-0'
                } ${menuAnimation ? 'active' : ''}`}
                ref={navHiddenMenu}
              >
                <li className="mb-4 hover:border-b-2 hover:border-yellowAccent hover:border-solid ">
                  <a href="/">Assurance</a>
                </li>
                <li className="mb-4 hover:border-b-2 hover:border-yellowAccent hover:border-solid">
                  <a href="/">Assistance</a>
                </li>
                <li className="mb-4 hover:border-b-2 hover:border-yellowAccent hover:border-solid">
                  <a href="/">Maintenance</a>
                </li>
                <li className="hover:border-b-2 hover:border-yellowAccent hover:border-solid">
                  <a href="/">Extension de garantie</a>
                </li>
              </ul>
              {/* {hiddenMenu ? (
                <ul
                  className={`hidden-menu w-[12rem] absolute left-0 bg-gray1 p-4 top-[2.5rem] rounded-lg duration-1000 ${
                    menuAnimation ? 'active' : ''
                  }`}
                  ref={navHiddenMenu}
                >
                  <li className="mb-4 hover:border-b-2 hover:border-yellowAccent hover:border-solid ">
                    <a href="/">Assurance</a>
                  </li>
                  <li className="mb-4 hover:border-b-2 hover:border-yellowAccent hover:border-solid">
                    <a href="/">Assistance</a>
                  </li>
                  <li className="mb-4 hover:border-b-2 hover:border-yellowAccent hover:border-solid">
                    <a href="/">Maintenance</a>
                  </li>
                  <li className="hover:border-b-2 hover:border-yellowAccent hover:border-solid">
                    <a href="/">Extension de garantie</a>
                  </li>
                </ul>
              ) : (
                ''
              )} */}
            </div>
          </li>
          <li className="hover:animate-float5  p-2">
            <a href="/">Devenir partenaire</a>
          </li>
          <li className="hover:animate-float5  p-2">
            <a href="/">Espace marchand</a>
          </li>
        </ul>
        <div>
          <button className="rounded-full border-solid border-[3px] py-2 px-10 displayFlex-[center] border-yellow hover:animate-vibrate">
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
