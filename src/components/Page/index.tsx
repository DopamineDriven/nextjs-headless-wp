import type { FC, ComponentType, HTMLAttributes } from "react";
import cn from "classnames";
import type { UnwrapHtmlUnion } from "@/types/unwrap-react";

export { default as Text } from "@/components/UI/Text/text";
export { default as LoadingSpinner } from "@/components/UI/LoadingSpinner";
export { default as World } from "@/components/UI/World";
export { default as Container } from "@/components/UI/Container";

const Noop: FC = ({ children }) => <>{children}</>;

export const Page: FC<
  UnwrapHtmlUnion<HTMLElement, HTMLAttributes<HTMLElement>>
> = ({ children, className, ...props }) => (
  <main
    typeof='main'
    {...props}
    className={cn("w-full max-w-3xl mx-auto py-16", className ?? "")}>
    {children}
  </main>
);

export default function getLayout<
  LP extends Record<string | number | symbol, unknown extends infer U ? U : any>
>(
  Component: ComponentType<unknown extends infer U ? U : any>
): ComponentType<LP> {
  return (Component as any).Layout || Noop;
}
