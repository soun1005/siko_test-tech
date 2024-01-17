import { MouseEventHandler, useEffect, useState } from "react";
import { fadeIn } from "../../helpers/variants";
import CustomMotionDiv from "../../helpers/customMotionDiv";

import HeroBtn from "../common/HeroBtn";
import HeroCard from "../common/HeroCard";

import information from "../../assets/information.json";

const Hero = () => {
  // default card is set to first
  const [heroCard, setHeroCard] = useState(information[0]);
  // button active class
  const [activeIndex, setActiveIndex] = useState(0);

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 550);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 550);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHeroCard: MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    // because of whitespaces, 'find' didn't work. so had to trim()
    // the code that didn't work => const selectedTitle = e.currentTarget.textContent || '';
    const selectedTitle = e.currentTarget.textContent?.trim() || "";

    const selectedInfo = information.find(
      (info) => info.title === selectedTitle,
    );

    // when there is info -> save in the useState
    if (selectedInfo) {
      setHeroCard(selectedInfo);
    }
    // Get the index of the clicked button
    const index = information.findIndex((info) => info.title === selectedTitle);
    // console.log(index);
    if (index !== -1) {
      setActiveIndex(index);
    }
  };

  const buttons = information.map((el, index) => {
    return (
      <HeroBtn
        text={el.title}
        key={el.id}
        onClick={handleHeroCard}
        isActive={activeIndex === index}
      />
    );
  });

  return (
    <div className="h-auto w-full text-white">
      <div className="container h-full w-full flex-col displayFlex-[center]">
        <CustomMotionDiv
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
        >
          <h1 className="mb-[87px] text-titleXL leading-[0.9] screenXL:text-titleLL phone:mb-0">
            Découvrez notre gamme de services pour toutes les mobilités
          </h1>
        </CustomMotionDiv>

        <CustomMotionDiv
          variants={fadeIn("down", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.8 }}
          className="btnWrap w-full displayFlex-[space-around] phone:hidden"
        >
          {buttons}
        </CustomMotionDiv>

        {isMobile ? (
          <div className="infoWrap h-full w-full">
            <HeroCard data={heroCard} phoneData={information} />
          </div>
        ) : (
          // desktop version
          <CustomMotionDiv
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="infoWrap h-full w-full"
          >
            <div className="infoWrap h-full w-full">
              <HeroCard data={heroCard} phoneData={information} />
            </div>
          </CustomMotionDiv>
        )}
      </div>
    </div>
  );
};

export default Hero;
