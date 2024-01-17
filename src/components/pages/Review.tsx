import ReviewCard from "../common/ReviewCard";
import reviews from "../../assets/reviews.json";

const Review = () => {
  return (
    <div className="mt-pageGap w-full">
      <div className="container">
        <h1 className="mb-pageGap text-center text-titleXL text-white underline decoration-yellowAccent underline-offset-8 tablet:text-titleM phone:text-titleS">
          Ils ont choisi de travailler avec nous!
          <br />À vous maintenant!
        </h1>
        <ReviewCard data={reviews} />
      </div>
    </div>
  );
};

export default Review;
