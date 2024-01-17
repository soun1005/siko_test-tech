import SquareBtn from "./SquareBtn";
import { fadeIn, staggeredMotion } from "../../helpers/variants";
import CustomMotionDiv from "../../helpers/customMotionDiv";
import { motion } from "framer-motion";

type Information = {
  title: string;
  id: number;
  subTitle: string;
  description: string;
  photoSrc: string;
};
type HeroCardProps = {
  data: Information;
  phoneData: Information[]; // Include phoneData in the props
};

const HeroCard: React.FC<HeroCardProps> = ({ data, phoneData }) => {
  const { title, subTitle, id, description, photoSrc } = data;
  const splitedSubtitle = subTitle.split(".");

  phoneData.map((data) => {
    const { title, subTitle } = data;
    return (
      <div>
        <span>{title}</span>
        <span>{subTitle}</span>
      </div>
    );
  });

  return (
    <div key={id} className="mt-space4r h-full w-full displayFlex-[center]">
      <CustomMotionDiv
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="aspect-{3/4} flex w-full justify-center rounded-[48px] bg-gray1 p-5 xl:w-4/5 tablet:rounded-[35px] tablet:p-[13px] phone:hidden"
      >
        {/* image wrap */}
        <div className="aspect-{3/4} h-full w-1/3 ">
          <img
            src={photoSrc}
            alt={title}
            className="aspect-{3/4} rounded-[32px]  tablet:rounded-[23px] "
          />
        </div>
        {/* information wrap */}
        <div className="infoWrap flex w-2/3 flex-col justify-between pl-[53px] pr-[33px] phone:pl-[10px] phone:pr-[5px]">
          <div>
            <h2 className="inline-block bg-gradient-to-r from-logoColor via-blueAccent to-greenAccent bg-clip-text text-titleL font-bold text-transparent hover:animate-gradient hover:bg-180%  screenXL:text-titleM phone:text-medium">
              {title}
            </h2>
            {splitedSubtitle.map((string, index) => {
              return (
                <span
                  className="mb-[-12px] inline-block text-titleM text-gray5 screenXL:text-medium phone:text-small"
                  key={index}
                >
                  {string}.
                </span>
              );
            })}
            <span className="mt-space2r inline-block text-basic font-extralight text-gray4 screenXL:mt-4 screenXL:text-medium screenL:text-[13px] tablet:hidden tablet:text-small">
              {description}
            </span>
          </div>
          {/* button wrap */}
          <div>
            <SquareBtn
              text="Formulaire"
              styles="bg-transparent text-basic px-8 py-2 hover:bg-white cursor-pointer hover:text-black duration-300 screenL:py-[2px] screenL:text-medium phone:px-4 phone:py-1 phone:text-xSmall"
            />
          </div>
        </div>
      </CustomMotionDiv>

      {/* phone version */}
      <div className="phoneHeroCard hidden w-full phone:block">
        {phoneData &&
          phoneData.map((data, index) => (
            <motion.a
              variants={staggeredMotion("up", 1.5, 0.5)}
              href="/"
              key={data.id}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
                amount: 0.5,
              }}
              custom={index}
              className="aspect-{3/4} mb-space1r flex w-full justify-center rounded-[35px] bg-gray1 p-[13px]"
            >
              {/* image wrap */}
              <div className="aspect-{3/4} h-full w-1/3 ">
                <img
                  src={data.photoSrc}
                  alt={data.title}
                  className="aspect-{3/4} rounded-[32px]  tablet:rounded-[23px]"
                />
              </div>
              {/* information wrap */}
              <div className="infoWrap flex w-2/3 flex-col justify-between pl-[14px] pr-[12px]">
                <div>
                  <h2 className="mb-2 inline-block bg-gradient-to-r from-logoColor via-blueAccent to-greenAccent bg-clip-text text-medium font-bold text-transparent hover:animate-gradient hover:bg-180%">
                    {data.title}
                  </h2>
                  <span className="mb-[-12px] mt-2 inline-block text-small font-light tracking-tighter text-gray5">
                    {data.subTitle}.
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
      </div>
    </div>
  );
};

export default HeroCard;
