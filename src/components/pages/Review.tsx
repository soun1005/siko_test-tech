import reviews from '../../assets/reviews.json';
import ReviewCard from '../ReviewCard';

const Review = () => {
  return (
    <div className="w-full mt-pageGap">
      <div className="container">
        <h1 className="text-white mb-pageGap text-titleXL text-center">
          Ils nous ont fait confiance! À votre tour !
        </h1>
        <ReviewCard data={reviews} />
      </div>
    </div>
  );
};

export default Review;
