import mergeRefs from "react-merge-refs";
import { LoadingSpinner } from "../index";
import cn from "classnames";
import css from "./anchor.module.css";
import React, {
  FC,
  CSSProperties,
  AnchorHTMLAttributes,
  useRef,
  JSXElementConstructor
} from "react";
import { Url, UrlObject } from "url";
import Unwrap from "unwrap-react";

// Omit intrinsic href to reinject with conditional Url interface to accept query hrefs from next/link
// query hrefs, e.g.: href={{ query: { slug }, pathname: '', href: '', { ...options, etc } }}

export interface ForwardedAnchorProps<T extends Unwrap.ReactUnwrapped<"a">>
  extends Omit<AnchorHTMLAttributes<T>, "href"> {
  className?: string;
  Component?: string | JSXElementConstructor<any>;
  width?: string | number;
  variant?: "flat" | "slim";
  loading?: boolean;
  type?: "submit" | "link" | "active";
  href?: string | UrlObject;
  active?: boolean;
  disabled?: boolean;
  style?: CSSProperties | {};
}

// this component serves to wrap imported functional components -- allows for proper embedding of href in browser when
// wrapping functional components with Link and anchor, respectively

const Anchor: FC<ForwardedAnchorProps<Unwrap.ReactUnwrapped<"a">>> =
  React.forwardRef<
    unknown extends infer U ? U : unknown,
    ForwardedAnchorProps<Unwrap.ReactUnwrapped<"a">>
  >((props, aRef) => {
    const {
      onClick,
      width,
      className,
      href,
      active,
      style,
      variant = "flat",
      disabled = false,
      loading = false,
      Component = "a",
      children,
      ...rest
    } = props;

    const ref = useRef<typeof Component>(null);

    const rootClassName = cn(
      css.root,
      {
        [css.slim]: variant === "slim",
        [css.loading]: loading,
        [css.disabled]: disabled
      },
      className
    );

    return (
      <Component
        aria-pressed={active}
        disabled={disabled}
        ref={mergeRefs([ref, aRef])}
        className={rootClassName}
        onClick={onClick}
        href={href}
        style={{ width, ...style }}
        {...rest}>
        {children}
        {loading && (
          <i className='pl-2 m-0 flex'>
            <LoadingSpinner className='transform-gpu transition-all duration-150 animate-spin' />
          </i>
        )}
      </Component>
    );
  });
export default Anchor;
