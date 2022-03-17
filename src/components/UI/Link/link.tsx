import type { AnchorHTMLAttributes, FC } from "react";
import NextLink, { LinkProps } from "next/link";
import cn from "classnames";
import css from "./link.module.css";

const Link: FC<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  prefetch,
  className,
  children,
  as,
  replace,
  passHref,
  scroll,
  shallow,
  locale,
  ...props
}) => (
  <NextLink
    href={href}
    prefetch={prefetch}
    as={as}
    scroll={scroll}
    shallow={shallow}
    locale={locale}
    passHref={passHref}
    replace={replace}>
    <a className={cn(css.root, className)} {...props}>
      {children}
    </a>
  </NextLink>
);

export default Link;
