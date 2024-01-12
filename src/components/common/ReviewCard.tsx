import React from 'react';

type Reviews = {
  title: string;
  description: string;
  name: string;
  id: number;
};
type ReviewCardProps = {
  data: Reviews[];
};

const ReviewCard = ({ data }: ReviewCardProps) => {
  const cards = data.map((review) => {
    const { title, description, name, id } = review;

    return (
      <div
        className="w-full h-full text-white bg-gray1 flex flex-col justify-between aspect-square p-[33px] rounded-[48px] tablet:rounded-[20px] phone:p-[15px]"
        key={id}
      >
        <div>
          <span className="inline-block text-titleM mb-[1rem] phone:mb-[5px] tablet:text-titleS screenXL:leading-tight phone:text-medium">
            {title}
          </span>
          <p className="text-medium  text-gray4  tablet:text-medium tablet:leading-tight phone:text-xSmall">
            {description}
          </p>
        </div>
        <span className="text-medium  text-gray4  tablet:text-medium  phone:text-xSmall">
          - {name}
        </span>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-4 gap-[43px] tablet:gap-[25px] phone:gap-[10px] screenXL:grid-cols-2">
      {cards}
    </div>
  );
};

export default ReviewCard;
