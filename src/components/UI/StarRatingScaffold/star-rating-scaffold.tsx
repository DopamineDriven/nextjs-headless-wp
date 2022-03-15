import { StarIcon } from "@/components/Icons";
import cn from "classnames";
import css from "./star-rating-scaffold.module.css";

export type StarRatingProps = {
  stars: number;
};

const StarRating = ({ stars }: StarRatingProps) => (
  <div className={css.root}>
    <div>
      {[0, 1, 2, 3, 4].map((review, l) => (
        <StarIcon
          key={review ** (2 ** -++l)}
          className={cn(stars > review ? "text-white " : "text-gray-300")}
          aria-hidden='true'
        />
      ))}
    </div>
  </div>
);

export default StarRating;
