import logo from "../../../assets/Siko-logo.png";
import NavLinks from "./NavLinks";
import { useState } from "react";

const Nav = () => {
  const [iconClickEffect, setIconClickEffect] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  // mobile nav btn
  const mobileNavBtn = (btnName: string) => (
    <span className="material-symbols-outlined z-50 text-[2.5rem] font-semibold text-white">
      {btnName}
    </span>
  );

  return (
    <nav className="min-h-full">
      <div className="container h-40 text-basic text-white displayFlex-[space-between]">
        {/* logo container */}
        <div>
          <img src={logo} alt="logo" className="min-w-full" />
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
        fixed bottom-0 top-0 hidden w-full overflow-y-auto bg-background py-24 pl-4
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
