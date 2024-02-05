import { motion } from "framer-motion";
import { staggeredMotion } from "../../helpers/variants";

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
  const cards = data.map((review, index) => {
    const { title, description, name, id } = review;

    return (
      <motion.div
        variants={staggeredMotion("up", 0.2, 0.1)}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: false,
          amount: 0.5,
        }}
        custom={index}
        className="flex aspect-square h-full w-full flex-col justify-between rounded-[48px] bg-gray1 p-[33px] text-white tablet:rounded-[20px] phone:p-[15px]"
        key={id}
      >
        <div>
          <span className="mb-[1rem] inline-block text-titleM screenXL:leading-tight tablet:text-titleS phone:mb-[5px] phone:text-medium">
            {title}
          </span>
          <p className="text-medium  text-gray4  tablet:text-medium tablet:leading-tight phone:text-xSmall">
            {description}
          </p>
        </div>
        <span className="text-medium  text-gray4  tablet:text-medium  phone:text-xSmall">
          - {name}
        </span>
      </motion.div>
    );
  });

  return (
    <div className="grid grid-cols-4 gap-[43px] screenXL:grid-cols-2 tablet:gap-[25px] phone:gap-[10px]">
      {cards}
    </div>
  );
};

export default ReviewCard;
