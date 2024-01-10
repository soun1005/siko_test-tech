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

  return (
    <div key={id}>
      <div>
        <img src={photoSrc} alt={title} />
      </div>
      <div>
        information
        <h2>{title}</h2>
        <span>{subTitle}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default HeroCard;
