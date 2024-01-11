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
};

const HeroCard: React.FC<HeroCardProps> = ({ data }) => {
  const { title, subTitle, id, description, photoSrc } = data;
  const splitedSubtitle = subTitle.split('.');

  return (
    <div key={id} className="w-full h-full displayFlex-[center] mt-space4r">
      <div className="w-3/4 aspect-{3/4} bg-gray1 flex justify-center p-5 rounded-[48px]">
        {/* image wrap */}
        <div className="aspect-{3/4} w-1/3 h-full ">
          <img
            src={photoSrc}
            alt={title}
            className="rounded-[32px] aspect-{3/4} "
          />
        </div>
        {/* information wrap */}
        <div className="infoWrap w-2/3 pl-[53px] pr-[33px] flex justify-between flex-col">
          <div>
            <h2 className="text-titleL font-bold text-transparent inline-block bg-clip-text bg-gradient-to-r from-logoColor via-blueAccent to-greenAccent hover:bg-180% hover:animate-gradient">
              {title}
            </h2>
            {splitedSubtitle.map((string, index) => {
              return (
                <span
                  className="text-titleM inline-block text-gray5 mb-[-12px]"
                  key={index}
                >
                  {string}.
                </span>
              );
            })}
            <span className="text-medium inline-block font-extralight text-gray4 mt-space2r">
              {description}
            </span>
          </div>
          {/* button wrap */}
          <div>
            <SquareBtn
              text="Fomulaire"
              styles="bg-transparent text-basic px-8 py-2 hover:bg-white cursor-pointer hover:text-black duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
