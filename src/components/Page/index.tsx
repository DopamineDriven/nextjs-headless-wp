import type { FC, ComponentType, HTMLAttributes } from "react";
import cn from "classnames";
import { UnwrapHtmlPickOneUnion } from "@/types/unwrap-react";

export { default as Text } from "@/components/UI/Text/text";
export { default as LoadingSpinner } from "@/components/UI/LoadingSpinner";
export { default as World } from "@/components/UI/World";
export { default as Container } from "@/components/UI/Container";

const Noop: FC = ({ children }) => <>{children}</>;

export const Page: FC<
  UnwrapHtmlPickOneUnion<HTMLElement, keyof HTMLAttributes<HTMLElement>>
> = ({ children, className, ...props }) => (
  <main
    {...props}
    className={cn("w-full max-w-3xl mx-auto py-16", className ?? "")}>
    {children}
  </main>
);

export default function getLayout<
  LP extends Record<string, unknown extends infer U ? U : any>
>(
  Component: ComponentType<unknown extends infer U ? U : any>
): ComponentType<LP> {
  return (Component as any).Layout || Noop;
}
