import { FC, VFC } from "react";
import cn from "classnames";
import css from "./code.module.css";
import linkStyles from "../Link/link.module.css";
import Unwrap from "unwrap-react";

// const Code: FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => (
//   <code className={cn(css.root, linkStyles.inlineCode, className)} {...props} />
// );

// export default Code;

const CodeBlock: VFC<Unwrap.ReactUnwrapped<"code">> = ({ code }) => {
  return (
    <div className='overflow-auto'>
      <pre className={`language-${code?.lang} min-w-full py-6 my-0`}>
        <code
          className={`language-${code?.lang} !text-white`}
          dangerouslySetInnerHTML={
            code?.dangerouslySetInnerHTML?.__html
              ? { __html: code.dangerouslySetInnerHTML.__html }
              : { __html: "no dice" }
          }
        />
      </pre>
    </div>
  );
};

export default CodeBlock;
