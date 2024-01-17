import { useState } from "react";
import { motion } from "framer-motion";
import { staggeredMotion } from "../../../helpers/variants";

type NavLinksProps = {
  isOpened: boolean;
};

const NavLinks: React.FC<NavLinksProps> = ({ isOpened }) => {
  const [serviceMenu, setServiceMenu] = useState(false);

  const arrowDown = (
    <span className="material-symbols-outlined ml-[2px] hidden duration-300 group-hover:-mt-2 group-hover:rotate-180 md:block">
      keyboard_arrow_down
    </span>
  );

  const toggleServiceMenu = (e: { target: any }) => {
    setServiceMenu(!serviceMenu);
  };

  const navHiddenLinks = [
    "Assurance",
    "Assistance",
    "Maintenance",
    "Extension de garantie",
  ];

  return (
    <>
      {!isOpened && (
        <div className="container whitespace-nowrap pr-0 displayFlex-[center] tablet:hidden">
          {/* desktop nav */}
          <ul className="w-10/12 gap-20 displayFlex-[center] screenXXL:gap-[3rem] screenXL:gap-8 screenXL:text-small screenL:text-xSmall tablet:hidden">
            <li className="p-2 hover:animate-float5">
              <a href="/">About</a>
            </li>
            {/* when hiddenMenu is opened, no hover */}
            <li className="dropdownMenu group relative p-2 displayFlex-[center]">
              <div className="cursor-pointer displayFlex-[center]">
                <span>Nos services</span>
                {/* icon */}
                {arrowDown}
              </div>
              {/* nav dropdown hidden menu */}
              <ul className="absolute left-0 top-[2.5rem] hidden rounded-lg bg-gray1 p-4 shadow-[0px_1px_13px_1px_rgba(255,255,255,0.1)] hover:md:block group-hover:md:block">
                {navHiddenLinks.map((link, index) => {
                  return (
                    <motion.li
                      variants={staggeredMotion("down", 0.1, 0.4, 0.4)}
                      initial="initial"
                      whileInView="animate"
                      viewport={{
                        once: false,
                        amount: 0.7,
                      }}
                      custom={index}
                      key={index}
                    >
                      <a
                        href="/"
                        className="mb-[4px] inline-block w-full cursor-pointer rounded p-[5px] hover:bg-yellowAccent hover:text-black"
                      >
                        {link}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </li>
            <li className="p-2 hover:animate-float5">
              <a href="/">Devenir partenaire</a>
            </li>
            <li className="p-2 hover:animate-float5">
              <a href="/">Espace marchand</a>
            </li>
          </ul>
          <button className="ml-space2r rounded-full border-[3px] border-solid border-yellow px-10 py-2 displayFlex-[center] hover:animate-vibrate screenXL:border-[2px] screenXL:px-4 screenXL:py-2 tablet:hidden">
            <p className="screenXL:text-small">Simulation</p>
            <span className="material-symbols-outlined">
              keyboard_double_arrow_right
            </span>
          </button>
        </div>
      )}

      {/* mobile version */}
      <div
        className={`hidden ${isOpened && "h-full flex-col items-center justify-center gap-4 tablet:flex"}`}
      >
        <li className="p-2 hover:animate-float5">
          <a href="/">About</a>
        </li>
        {/* when hiddenMenu is opened, no hover */}
        <button
          className="dropdownMenu relative cursor-pointer flex-col p-2 displayFlex-[center]"
          onClick={toggleServiceMenu}
        >
          <div className="z-50 cursor-pointer displayFlex-[center]">
            <span>Nos services</span>
            {/* icon */}
            <span
              className={`material-symbols-outlined ml-[2px] duration-300 group-hover:-mt-2 group-hover:rotate-180 ${serviceMenu ? "rotate-180" : ""}`}
            >
              keyboard_arrow_down
            </span>
          </div>
          {/* nav dropdown hidden menu */}
          {serviceMenu && (
            <ul className="left-0 pt-space1r font-extralight text-gray4">
              {navHiddenLinks.map((link, index) => {
                return (
                  <motion.li
                    variants={staggeredMotion("down", 0.1, 0.2, 0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: false,
                      amount: 0.7,
                    }}
                    custom={index}
                    key={index}
                  >
                    <a
                      href="/"
                      className="mb-[4px] inline-block w-full cursor-pointer rounded p-[5px] hover:bg-yellowAccent hover:text-black"
                    >
                      {link}
                    </a>
                  </motion.li>
                );
              })}
              {/* <li>
                <a
                  href="/"
                  className="mb-[4px] inline-block w-full cursor-pointer rounded p-[5px] hover:bg-yellowAccent hover:text-black"
                >
                  Assurance
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-[4px] inline-block w-full cursor-pointer rounded p-[5px] hover:bg-yellowAccent hover:text-black"
                >
                  Assistance
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-[4px] inline-block w-full cursor-pointer rounded p-[5px] hover:bg-yellowAccent hover:text-black"
                >
                  Maintenance
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="inline-block  w-full cursor-pointer rounded p-[5px] hover:bg-yellowAccent hover:text-black"
                >
                  Extension de garantie
                </a>
              </li> */}
            </ul>
          )}
        </button>
        <li className="p-2  hover:animate-float5">
          <a href="/">Devenir partenaire</a>
        </li>
        <li className="p-2  hover:animate-float5">
          <a href="/">Espace marchand</a>
        </li>
        <button className="mt-6 rounded-full border-[2px] border-solid border-yellow px-12 py-2 displayFlex-[center] hover:animate-vibrate">
          <p className="text-medium">Simulation</p>
          <span className="material-symbols-outlined">
            keyboard_double_arrow_right
          </span>
        </button>
      </div>
    </>
  );
};

export default NavLinks;
