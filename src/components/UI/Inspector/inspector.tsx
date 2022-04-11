import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  HTMLAttributes
} from "react";
import cn from "classnames";
import Unwrap from "unwrap-react";

const DataInspector: FC<Unwrap.ReactUnwrapped<"div" | "pre">> = ({
  div,
  pre,
  children
}) => {
  return (
    <div
      lang={div?.lang ? div.lang : "json"}
      className={cn(
        `font-interVar container max-w-6xl justify-center mx-auto fit min-h-48 break-normal flex-wrap`,
        div?.className ? div.className : ""
      )}
      {...div}>
      <pre
        className='container flex-col mx-auto text-[0.75rem] flex-grow text-left bg-[#151515] leading-[1.29rem] min-w-full text-yellow-400 break-normal w-4xl w-fit-4xl overflow-x-clip '
        {...pre}>
        {children ?? <></>}
      </pre>
    </div>
  );
};

export default DataInspector;

export const PureOOPHandlesMultipleElementsGracefully = ({
  a,
  div,
  button,
  pre,
  i
}: Unwrap.ReactUnwrapped<"a" | "div" | "button" | "pre" | "i">) => {
  return (
    <i {...i}>
      <pre {...pre}>
        {JSON.stringify(
          {
            exhaustive: <a {...a} />,
            divExhaustive: <div {...div}>{div?.children ?? <></>}</div>,
            buttonExhaustive: <button {...button}></button>
          },
          null,
          2
        )}
      </pre>
    </i>
  );
};

export const SingletonUnionizesDomAttributesErroneously = ({
  ...rest
}: Unwrap.ReactUnwrapped<"a" | "div" | "button" | "pre" | "i">) => {
  return (
    <i {...(rest as HTMLAttributes<HTMLElement>)}>
      <pre {...(rest as HTMLAttributes<HTMLPreElement>)}>
        {JSON.stringify({
          exhaustive: (
            <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} />
          ),
          divExhaustive: <div {...(rest as HTMLAttributes<HTMLDivElement>)} />,
          buttonExhaustive: (
            <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />
          )
        })}
      </pre>
    </i>
  );
};
