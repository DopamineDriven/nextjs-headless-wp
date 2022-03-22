import type { UnwrapSvgUnion } from "@/types/unwrap-react";
import type { SVGAttributes } from "react";

const ExpressVpn = ({
  ...props
}: UnwrapSvgUnion<SVGSVGElement, keyof SVGAttributes<SVGSVGElement>>) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 128 128'
    version='1.1'>
    <title>{"ExpressVPN"}</title>
    <g
      id='Browser-Icon-&amp;-Menus'
      stroke='none'
      strokeWidth='1'
      fill='none'
      fillRule='evenodd'>
      <g
        id='Logo/ExpressVPN/Badge/Brand'
        fill='#DA3940'
        transform='translate(0.000000, 13.000000)'>
        <path
          d='M33.0895902,102 C18.7914676,102 9.66774786,93.9957258 9.66774786,82.8724535 C9.66774786,79.2115523 10.7578493,74.7357594 14.9791803,65.6476792 L1.5158245e-14,65.6476792 L13.7520492,36.3482464 L109.480546,36.3482464 C111.660749,36.3482464 113.157849,34.7225373 113.157849,32.8238396 C113.157849,30.9251418 111.660749,29.2973955 109.480546,29.2973955 L32.0015339,29.2973955 L38.8080211,14.7862108 C43.0293521,5.83258768 52.1530718,0 62.0928337,0 L94.6383958,0 C113.429863,0 127.320987,12.8854758 127.320987,29.7048414 C127.320987,49.6432052 108.936518,65.6476792 87.694879,65.6476792 L24.7839578,65.6476792 C22.875769,69.5836063 25.0559719,72.7026045 29.6843014,72.7026045 L79.7962451,72.7026045 C88.1018774,72.7026045 94.5013661,78.5331549 94.5013661,85.9955261 C94.5013661,94.5396661 86.197779,102 76.8,102 L33.0895902,102 L33.0895902,102 Z'
          id='Path'
        />
      </g>
    </g>
  </svg>
);

export default ExpressVpn;
