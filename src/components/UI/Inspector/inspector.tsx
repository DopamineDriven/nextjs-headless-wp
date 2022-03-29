import type { FC } from "react";
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

// const example = <T extends string | number | bigint | boolean | null | undefined extends infer U ? U : T>(replacer?: ((this: typeof globalThis, key: string, value: any) => any) | undefined) => {
//   return (
//     <>
//       <DataInspector>{JSON.stringify(``, ((key, value) => {

//       }), 2) }</DataInspector>
//     </>
//   )
// }
