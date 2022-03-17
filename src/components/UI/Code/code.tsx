import { FC, HTMLAttributes } from "react";
import cn from "classnames";
import css from "./code.module.css";
import linkStyles from "../Link/link.module.css";

const Code: FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => (
  <code className={cn(css.root, linkStyles.inlineCode, className)} {...props} />
);

export default Code;

// import { CodeProps } from "@/types/mapped";
// import { HTMLAttributes, VFC } from "react";

// export interface CodePropsExtended extends VFC<HTMLAttributes<HTMLElement>> {
//   props: CodeProps<"lang" | "dangerouslySetInnerHTML" | "className">;
// }

// const CodeBlock: VFC<CodePropsExtended> = ({ ...props }) => {
//   return (
//     <div className='overflow-auto'>
//       <pre className={`language-${props?.props.lang} min-w-full py-6 my-0`}>
//         <code
//           className={`language-${props.props.lang} !text-white`}
//           dangerouslySetInnerHTML={
//             props.props.dangerouslySetInnerHTML?.__html
//               ? { __html: props.props.dangerouslySetInnerHTML.__html }
//               : { __html: "no dice" }
//           }
//         />
//       </pre>
//     </div>
//   );
// };

// export default CodeBlock;
