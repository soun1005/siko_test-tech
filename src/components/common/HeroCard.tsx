import SquareBtn from './SquareBtn';

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
  const splitedSubtitle = subTitle.split('.');

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
    <div key={id} className="w-full h-full displayFlex-[center] mt-space4r">
      {/* mobile version */}
      <div className="w-full xl:w-4/5 aspect-{3/4} bg-gray1 flex justify-center p-5 rounded-[48px] phone:hidden tablet:rounded-[35px] tablet:p-[13px]">
        {/* image wrap */}
        <div className="aspect-{3/4} w-1/3 h-full ">
          <img
            src={photoSrc}
            alt={title}
            className="rounded-[32px] aspect-{3/4}  tablet:rounded-[23px] "
          />
        </div>
        {/* information wrap */}
        <div className="infoWrap w-2/3 pl-[53px] pr-[33px] flex justify-between flex-col phone:pl-[10px] phone:pr-[5px]">
          <div>
            <h2 className="text-titleL font-bold text-transparent inline-block bg-clip-text bg-gradient-to-r from-logoColor via-blueAccent to-greenAccent hover:bg-180% hover:animate-gradient  screenXL:text-titleM phone:text-medium">
              {title}
            </h2>
            {splitedSubtitle.map((string, index) => {
              return (
                <span
                  className="text-titleM inline-block text-gray5 mb-[-12px] screenXL:text-medium phone:text-small"
                  key={index}
                >
                  {string}.
                </span>
              );
            })}
            <span className="text-basic inline-block font-extralight text-gray4 mt-space2r screenXL:text-medium screenL:text-small screenXL:mt-4 tablet:hidden">
              {description}
            </span>
          </div>
          {/* button wrap */}
          <div>
            <SquareBtn
              text="Fomulaire"
              styles="bg-transparent text-basic px-8 py-2 hover:bg-white cursor-pointer hover:text-black duration-300 phone:px-4 phone:py-1 phone:text-xSmall"
            />
          </div>
        </div>
      </div>

      {/* phone version */}
      <div className="phoneHeroCard hidden w-full phone:block">
        {phoneData &&
          phoneData.map((data) => (
            <div
              key={data.id}
              className="w-full aspect-{3/4} bg-gray1 flex justify-center rounded-[35px] p-[13px] mb-space1r"
            >
              {/* image wrap */}
              <div className="aspect-{3/4} w-1/3 h-full ">
                <img
                  src={data.photoSrc}
                  alt={data.title}
                  className="rounded-[32px] aspect-{3/4}  tablet:rounded-[23px] "
                />
              </div>
              {/* information wrap */}
              <div className="infoWrap w-2/3 pl-[53px] pr-[33px] flex justify-between flex-col phone:pl-[10px] phone:pr-[5px]">
                <div>
                  <h2 className="text-small mb-2 font-bold text-transparent inline-block bg-clip-text bg-gradient-to-r from-logoColor via-blueAccent to-greenAccent hover:bg-180% hover:animate-gradient">
                    {data.title}
                  </h2>
                  <span className=" inline-block text-gray5 mb-[-12px] text-xSmall">
                    {data.subTitle}.
                  </span>
                </div>
                {/* button wrap */}
                <div>
                  <SquareBtn
                    text="Fomulaire"
                    styles="bg-transparent text-basic px-8 py-2 hover:bg-white cursor-pointer hover:text-black duration-300 phone:px-4 phone:py-1 phone:text-xSmall"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeroCard;
