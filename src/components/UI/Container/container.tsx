import cn from "classnames";
import { VFC, ComponentType, HTMLAttributes } from "react";

interface Props {
  className?: string;
  children?: any;
  el?: ComponentType<HTMLAttributes<HTMLDivElement>>;
  clean?: boolean;
}

const Container: VFC<Props> = ({ children, className, el = "div", clean }) => {
  const rootClassName = cn(className, {
    "mx-auto max-w-10xl": !clean
  });

  const Component: ComponentType<HTMLAttributes<HTMLDivElement>> =
    el as ComponentType<HTMLAttributes<HTMLDivElement>>;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
