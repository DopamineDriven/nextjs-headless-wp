import KeenSlider, { useKeenSlider } from "keen-slider/react";
import React, {
  Children,
  FC,
  isValidElement,
  useState,
  useEffect,
  useRef,
  useCallback
} from "react";
import cn from "classnames";
import css from "./keen-styles.module.css";
import { CardSliderController } from "./keen-controller";
import { a } from "@react-spring/web";
import "keen-slider/keen-slider.min.css";

export type CardSliderProps = {
  children?: React.ReactNode[];
  className?: string;
};

const KeenCarousel: FC<CardSliderProps> = ({ children, className }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const thumbsContainerRef = useRef<HTMLDivElement>(null);

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    updated: () => setIsMounted(true),
    slideChanged(
      slider: KeenSlider.KeenSliderInstance<{}, {}, KeenSlider.KeenSliderHooks>
    ) {
      const slideNumber = slider.track.details.rel;
      setCurrentSlide(slideNumber);
      if (thumbsContainerRef.current) {
        const $el = document.getElementById(
          `thumb-${slider.track.details.rel}`
        );
        if (slideNumber >= 1 && thumbsContainerRef.current) {
          thumbsContainerRef.current.scrollLeft === $el?.scrollLeft;
        } else {
          thumbsContainerRef.current.scrollLeft = 0;
        }
      }
    }
  });

  // Stop the history navigation gesture on touch devices
  useEffect(() => {
    const preventNavigation = (event: TouchEvent) => {
      // Center point of the touch area
      const touchXPosition = event.touches[0].pageX;
      // Size of the touch area
      const touchXRadius = event.touches[0].radiusX || 0;

      // Set a threshold (10px) on both sizes of the screen;
      // if the touch area overlaps with the screen edges,
      // it's likely to trigger the navigation. This prevents it.
      if (
        touchXPosition - touchXRadius < 10 ||
        touchXPosition + touchXRadius > window.innerWidth - 10
      )
        event.preventDefault();
    };
    const innerSliderRef = sliderContainerRef.current;
    innerSliderRef?.addEventListener("touchstart", preventNavigation);

    return () => {
      if (innerSliderRef) {
        innerSliderRef?.removeEventListener("touchstart", preventNavigation);
      }
    };
  }, []);

  const onPrev = useCallback(() => slider.current?.prev(), [slider]);
  const onNext = useCallback(() => slider.current?.next(), [slider]);

  return (
    <div className={cn(css.root, className)} ref={sliderContainerRef}>
      <div
        ref={ref}
        className={cn(css.slider, { [css.show]: isMounted }, "keen-slider")}>
        {slider && <CardSliderController onPrev={onPrev} onNext={onNext} />}
        {Children.map(children, child => {
          // Add the keen-slider__slide className to children
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className} ` : ""
                }keen-slider__slide`
              }
            };
          }
          return child;
        })}
      </div>

      <a.div className={css.album} ref={thumbsContainerRef}>
        {slider &&
          Children.map(children, (child, idx) => {
            if (isValidElement(child)) {
              return {
                ...child,
                props: {
                  ...child.props,
                  className: cn(child.props.className, css.thumb, {
                    [css.selected]: currentSlide === idx
                  }),
                  id: `thumb-${idx}`,
                  onClick: () => {
                    slider.current?.moveToIdx(idx);
                  }
                }
              };
            }
            return child;
          })}
      </a.div>
    </div>
  );
};

export default KeenCarousel;
