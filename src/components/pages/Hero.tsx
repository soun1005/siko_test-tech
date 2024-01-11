import { MouseEventHandler, useState } from 'react';

import HeroBtn from '../HeroBtn';
import information from '../../assets/information.json';
import HeroCard from '../HeroCard';

const Hero = () => {
  // default card is set to first
  const [heroCard, setHeroCard] = useState(information[0]);
  // button active class
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHeroCard: MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    // because of whitespace, 'find' didn't work. so had to trim()
    // const selectedTitle = e.currentTarget.textContent || '';
    const selectedTitle = e.currentTarget.textContent?.trim() || '';

    // 타이틀과 맞는 정보 찾기
    const selectedInfo = information.find(
      (info) => info.title === selectedTitle
    );

    // selectedInfo가 있을 시, setHeroCard에 저장
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
    <div className="text-white w-full h-auto">
      <div className="container displayFlex-[center] flex-col w-full h-full">
        <h1 className="mb-[87px] text-titleXL">
          Découvrez notre gamme de services pour toutes les mobilités
        </h1>
        {/* btn wrap */}
        <div className="btnWrap w-full displayFlex-[space-around]">
          {buttons}
        </div>
        <div className="infoWrap h-full w-full">
          <HeroCard data={heroCard} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
