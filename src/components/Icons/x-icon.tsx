import { VFC } from "react";

const X: VFC<Unwrap.ReactUnwrapped<"svg" | "path">> = ({ svg, path }) => {
  return (
    <svg
      width={svg?.width ? svg.width : 24}
      height={svg?.height ? svg.height : 24}
      viewBox='0 0 24 24'
      fill={svg?.fill ? svg.fill : "none"}
      xmlns='http://www.w3.org/2000/svg'
      {...svg}>
      <path
        {...path}
        d='M6 6L18 18M6 18L18 6L6 18Z'
        stroke='rgb(29, 78, 216)'
        strokeWidth='2'
        className='ring-2 ring-blue-700'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default X;
