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
        className="w-full h-full text-white bg-gray1 flex flex-col justify-between aspect-square p-[33px] rounded-[48px]"
        key={id}
      >
        <div>
          <span className=" inline-block text-titleS mb-[1rem]">{title}</span>
          <p className="text-medium  text-gray4">{description}</p>
        </div>
        <span className="text-medium  text-gray4">- {name}</span>
      </div>
    );
  });

  return <div className=" grid grid-cols-4 gap-[43px]">{cards}</div>;
};

export default ReviewCard;
