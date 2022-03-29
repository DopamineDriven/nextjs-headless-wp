import type {
  AnchorHTMLAttributes,
  JSXElementConstructor,
  ReactChild,
  ReactElement,
  VFC
} from "react";
import Unwrap from "unwrap-react";
export interface MaybeElement<
  P extends Unwrap.ReactUnwrapped<keyof JSX.IntrinsicElements>,
  T extends (
    ...args: Array<
      ReturnType<Unwrap.UnwrapInterface["UnwrapReactWrapperFunction"]>
    >
  ) => ReactElement<T, React.JSXElementConstructor<P>>
> {
  reactElement: ReactElement<
    Unwrap.ReactUnwrapped<keyof JSX.IntrinsicElements>,
    React.JSXElementConstructor<
      T extends (
        ...args: Array<
          ReturnType<Unwrap.UnwrapInterface["UnwrapReactWrapperFunction"]>
        >
      ) => ReactElement<T, JSXElementConstructor<P>>
        ? ReactElement<T, JSXElementConstructor<P>>
        : ReactElement<any, JSXElementConstructor<any>>
    >
  >;
}

// { component: MaybeElement<Unwrap.ReactUnwrapped<"div">; props: Unwrap.UnwrapHtmlUnion<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>}

const GitHubIcon: VFC<
  Unwrap.ReactUnwrapped<"svg" | "path" | "foreignObject">
> = ({ svg, path, foreignObject }) => (
  <svg
    {...svg}
    className={svg?.className ? svg.className : "h-6 w-6"}
    xmlns='http://www.w3.org/2000/svg'
    fill={svg?.fill ? svg.fill : "none"}
    viewBox='0 0 24 24'
    stroke={svg?.stroke ? svg.stroke : "currentColor"}>
    <path
      {...path}
      d='M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z'
      fill={path?.fill ? path.fill : "currentColor"}
    />
    <foreignObject
      className={
        foreignObject?.className
          ? foreignObject.className
          : "mx-auto p-1.5 justify-center overflow-x-hidden"
      }>
      {foreignObject?.children ? (
        (foreignObject.children as ReactElement<
          Unwrap.ReactUnwrapped<keyof JSX.IntrinsicElements>,
          React.JSXElementConstructor<
            ReturnType<Unwrap.UnwrapInterface["UnwrapReactWrapperFunction"]>
          >
        >)
      ) : (
        <></>
      )}
    </foreignObject>
  </svg>
);

export default GitHubIcon;
