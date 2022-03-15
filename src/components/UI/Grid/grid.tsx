import cn from "classnames";
import { FC, ReactNode, Component } from "react";
import css from "./grid.module.css";

interface GridProps {
  className?: string;
  children?: Array<ReactNode> | Component[] | any[];
  layout?: "A" | "B" | "C" | "D" | "normal";
  variant?: "default" | "filled";
}

const Grid: FC<GridProps> = ({
  className,
  layout = "A",
  children,
  variant = "default"
}) => {
  const rootClassName = cn(
    css.root,
    {
      [css.layoutA]: layout === "A",
      [css.layoutB]: layout === "B",
      [css.layoutC]: layout === "C",
      [css.layoutD]: layout === "D",
      [css.layoutNormal]: layout === "normal",
      [css.default]: variant === "default",
      [css.filled]: variant === "filled"
    },
    className ?? ""
  );
  return <div className={rootClassName}>{children}</div>;
};

export default Grid;
