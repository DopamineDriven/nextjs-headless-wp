import cn from "classnames";
import { ReactNode, Component, VFC } from "react";
import css from "./grid.module.css";
import type { Enumerable } from "@/types/helpers";
import Unwrap from "unwrap-react";

export interface GridProps {
  children?: Enumerable<ReactNode> | Enumerable<Component> | Enumerable<any>;
  layout?: "A" | "B" | "C" | "D" | "normal";
  variant?: "default" | "filled";
  divProps?: Unwrap.ReactUnwrapped<"div">["div"];
}

const Grid: VFC<GridProps> = ({
  layout = "A",
  children,
  variant = "default",
  divProps
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
    divProps?.className ?? ""
  );
  return (
    <div className={rootClassName} {...divProps}>
      {children}
    </div>
  );
};

export default Grid;
