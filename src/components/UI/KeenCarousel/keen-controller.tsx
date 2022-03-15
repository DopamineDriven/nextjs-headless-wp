import { MouseEventHandler, FC, memo } from "react";
import { ArrowLeft, ArrowRight } from "@/components/Icons";
import css from "./keen-styles.module.css";

export interface ProductSliderControl {
  onPrev: MouseEventHandler<HTMLButtonElement>;
  onNext: MouseEventHandler<HTMLButtonElement>;
}

export const CardSliderController: FC<ProductSliderControl> = memo(
  ({ onPrev, onNext }) => (
    <div className={css.control}>
      <button
        className={css.leftControl}
        onClick={onNext}
        aria-label='Previous Card'>
        <ArrowLeft />
      </button>
      <button
        className={css.rightControl}
        onClick={onPrev}
        aria-label='Next Card'>
        <ArrowRight />
      </button>
    </div>
  )
);
