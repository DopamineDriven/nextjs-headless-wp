import type { DetailedHTMLProps, HTMLAttributes } from "react";

/* interface with all optional values to accept ONLY one of them */
export type ConditionalSansOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export type UnwrapPickOneInUnion<
  T extends
    | HTMLAnchorElement
    | HTMLAudioElement
    | HTMLBodyElement
    | HTMLCanvasElement
    | HTMLDetailsElement
    | HTMLDivElement
    | HTMLFieldSetElement
    | HTMLFormElement
    | HTMLHeadingElement
    | HTMLHRElement
    | HTMLInputElement
    | HTMLLabelElement
    | HTMLLegendElement
    | HTMLLIElement
    | HTMLOListElement
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



// export type UnwrappingWithTemplateLiterals<
// T extends `HTML${
//   | "Anchor"
//   | "Audio"
//   | "Body"
//   | "Canvas"
//   | "Details"
//   | "Div"
//   | "FieldSet"
//   | "Form"
//   | "Heading"
//   | "HR"
//   | "Input"
//   | "Label"
//   | "Legend"
//   | "LI"
//   | "OList"
//   | "Paragraph"
//   | "Quote"
//   | "Select"
//   | "Span"
//   | "Table"
//   | "TextArea"
//   | "Time"
//   | "Title"
//   | "UList"
//   | "Video"}Element`
//   ,
//   P extends keyof DetailedHTMLProps<HTMLAttributes<T>, T>
// > = {
//   [R in P]: DetailedHTMLProps<HTMLAttributes<T>, T>[R];
// };
// export type UnwrapPickOneInUnionTemplateLiteral<
//   T extends `HTML${
//     | "Anchor"
//     | "Audio"
//     | "Body"
//     | "Canvas"
//     | "Details"
//     | "Div"
//     | "FieldSet"
//     | "Form"
//     | "Heading"
//     | "HR"
//     | "Input"
//     | "Label"
//     | "Legend"
//     | "LI"
//     | "OList"
//     | "Paragraph"
//     | "Quote"
//     | "Select"
//     | "Span"
//     | "Table"
//     | "TextArea"
//     | "Time"
//     | "Title"
//     | "UList"
//     | "Video"}Element`
// > = T;
// export type DoesThisWOrk = DetailedHTMLProps<
//   HTMLAttributes<UnwrapPickOneInUnionTemplateLiteral<"HTMLVideoElement">>,
//   UnwrapPickOneInUnionTemplateLiteral<"HTMLVideoElement">
//   >;
