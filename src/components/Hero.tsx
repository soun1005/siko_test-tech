import { MouseEventHandler, useState } from 'react';

import Btn from './Btn';
import information from '../assets/information.json';
import HeroCard from './HeroCard';

const Hero = () => {
  // default card is set to first
  const [heroCard, setHeroCard] = useState(information[0]);
  // button active class
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHeroCard: MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const selectedTitle = e.currentTarget.textContent || '';
    const selectedInfo = information.find(
      (info) => info.title === selectedTitle
    );
    if (selectedInfo) {
      setHeroCard(selectedInfo);
    }
    // Get the index of the clicked button
    const index = information.findIndex((info) => info.title === selectedTitle);
    if (index !== -1) {
      setActiveIndex(index);
    }
  };

  const buttons = information.map((el, index) => {
    return (
      <Btn
        text={el.title}
        key={el.id}
        styles="bg-blueAccent py-4 px-12"
        onClick={handleHeroCard}
        isActive={activeIndex === index}
      />
    );
  });

  return (
    <div className="bg-yellowAccent">
      <div className="container displayFlex-[center] flex-col">
        <h1>Découvrez notre gamme de services pour toutes les mobilités</h1>
        {/* btn wrap */}
        <div className="btnWrap w-full displayFlex-[space-around]">
          {buttons}
        </div>
        <div className="infoWrap">
          <HeroCard data={heroCard} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
