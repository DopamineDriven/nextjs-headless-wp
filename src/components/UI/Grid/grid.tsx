import cn from "classnames";
import { ReactNode, Component, VFC } from "react";
import css from "./grid.module.css";
import type { Enumerable } from "@/types/helpers";

export interface GridProps {
  children?: Enumerable<ReactNode> | Enumerable<Component> | Enumerable<any>;
  layout?: "A" | "B" | "C" | "D" | "normal";
  variant?: "default" | "filled";
  divProps?: ReactUnwrapped<"div">;
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
    divProps?.div?.className ?? ""
  );
  return (
    <div className={rootClassName} {...divProps?.div}>
      {divProps?.div?.children || children}
    </div>
  );
};

export default Grid;
