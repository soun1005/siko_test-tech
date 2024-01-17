import logo from "../../../assets/crocodile mobility.png";
import NavLinks from "./NavLinks";
import { useState, useEffect } from "react";

const Nav = () => {
  const [iconClickEffect, setIconClickEffect] = useState(false);
  const [open, setOpen] = useState(false);
  // nav bg color
  const [navbg, setNavbg] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  // mobile nav btn
  const mobileNavBtn = (btnName: string) => (
    <span className="material-symbols-outlined z-50 text-[2.5rem] font-semibold text-white">
      {btnName}
    </span>
  );

  useEffect(() => {
    //box-shadow of nav appearing after scrolling a bit
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setNavbg(true);
      } else {
        setNavbg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`fixed top-0 z-10 
    w-full bg-background shadow-md ${navbg && "shadow-white/10"}`}
    >
      <div className="container h-[6rem] text-basic text-white displayFlex-[space-between]">
        {/* logo container */}
        <div>
          <img src={logo} alt="logo" className="w-3/4" />
        </div>

        {/* mobile burger menu */}
        <button
          className={`z-50 hidden cursor-pointer tablet:block ${
            iconClickEffect && "animate-spin delay-500"
          }`}
          onClick={() => {
            setIconClickEffect(true);
            toggleNav();
          }}
          onAnimationEnd={() => setIconClickEffect(false)}
        >
          {open ? mobileNavBtn("close") : mobileNavBtn("menu")}
        </button>

        {/* desktop menu */}
        {!open && <NavLinks isOpened={open} />}

        {/* mobile nav */}

        <ul
          className={`
        fixed bottom-0 top-0 hidden w-full overflow-y-auto bg-gray1 py-24 pl-4
         duration-500 tablet:block ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks isOpened={open} />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
