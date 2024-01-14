import reviews from "../../assets/reviews.json";
import ReviewCard from "../common/ReviewCard";

const Review = () => {
  return (
    <div className="mt-pageGap w-full">
      <div className="container">
        <h1 className="mb-pageGap text-center text-titleXL text-white underline decoration-yellowAccent underline-offset-8 tablet:text-titleM phone:text-titleS">
          Ils nous ont fait confiance! À votre tour !
        </h1>
        <ReviewCard data={reviews} />
      </div>
    </div>
  );
};

export default Review;
