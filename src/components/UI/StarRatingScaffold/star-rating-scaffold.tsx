import { StarIcon } from "@/components/Icons";
import cn from "classnames";
import css from "./star-rating-scaffold.module.css";

export type StarRatingProps = {
  stars: number;
};
// update to consume path props, too
const StarRating = ({ stars }: StarRatingProps) => (
  <div className={css.root}>
    <div>
      {[0, 1, 2, 3, 4].map((review, l) => (
        <StarIcon
          svg={{
            "aria-hidden": true,
            className: cn(stars > review ? "text-white " : "text-gray-300")
          }}
          key={review ** (2 ** -++l)}
        />
      ))}
    </div>
  </div>
);

export default StarRating;
