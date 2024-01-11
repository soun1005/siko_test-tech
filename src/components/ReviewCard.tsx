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
        className="text-white bg-gray1 flex flex-col justify-between aspect-square p-[33px] rounded-[48px]"
        key={id}
      >
        <div>
          <span>{title}</span>
          <p>{description}</p>
        </div>
        <span>{name}</span>
      </div>
    );
  });

  return <div className=" grid grid-cols-4 gap-[43px]">{cards}</div>;
};

export default ReviewCard;
