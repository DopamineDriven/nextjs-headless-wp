import type { DetailedHTMLProps, HTMLAttributes, SVGProps } from "react";

export type UnwrapPickOneHtmlUnion<
  T extends
  | HTMLOrSVGElement
    | HTMLAnchorElement
    | HTMLAreaElement
    | HTMLAudioElement
    | HTMLBodyElement
    | HTMLButtonElement
    | HTMLCanvasElement
    | HTMLDataElement
    | HTMLDetailsElement
    | HTMLDivElement
    | HTMLElement
    | HTMLFieldSetElement
    | HTMLFormElement
    | HTMLHeadingElement
    | HTMLHRElement
    | HTMLInputElement
    | HTMLLabelElement
    | HTMLLegendElement
    | HTMLLIElement
    | HTMLOListElement
    | HTMLOptionElement
    | HTMLParagraphElement
    | HTMLQuoteElement
    | HTMLSelectElement
    | HTMLSpanElement
    | HTMLTableElement
    | HTMLTextAreaElement
    | HTMLTimeElement
    | HTMLTitleElement
    | HTMLUListElement
    | HTMLVideoElement,
  P extends keyof DetailedHTMLProps<HTMLAttributes<T>, T>
> = {
  [R in P]?: DetailedHTMLProps<HTMLAttributes<T>, T>[R];
  };

  export type UnwrapPickOneSvgUnion<
  T extends
    | SVGAElement
    | SVGAnimateElement
    | SVGSVGElement,
  P extends keyof SVGProps<T>,
> = {
  [R in P]?: SVGProps<T>[R];
};

/* interface with all optional values to accept ONLY one of them */
export type ConditionalSansOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];
