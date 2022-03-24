import cn from "classnames";
import { VFC, ComponentType, HTMLAttributes } from "react";

export interface ContainerProps {
  className?: string;
  children?: any;
  el?: ComponentType<HTMLAttributes<HTMLDivElement>>;
  clean?: boolean;
  props?: ReactUnwrapped<"div">;
}

const Container: VFC<ContainerProps> = ({
  children,
  className,
  el = "div",
  clean,
  props
}) => {
  const rootClassName = cn(className, {
    "mx-auto max-w-10xl": !clean
  });

  const Component: ComponentType<HTMLAttributes<HTMLDivElement>> =
    el as ComponentType<HTMLAttributes<HTMLDivElement>>;

  return (
    <Component className={rootClassName} {...props?.div}>
      {props?.div?.children ?? children}
    </Component>
  );
};

export default Container;
