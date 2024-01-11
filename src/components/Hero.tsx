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
    // because of whitespace, 'find' didn't work. so had to trim()
    // const selectedTitle = e.currentTarget.textContent || '';
    const selectedTitle = e.currentTarget.textContent?.trim() || '';

    // 타이틀과 맞는 정보 찾기
    const selectedInfo = information.find(
      (info) => info.title === selectedTitle
    );

    // console.log(selectedInfo);

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
      <Btn
        text={el.title}
        key={el.id}
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
