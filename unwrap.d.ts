import type {
  DetailedHTMLProps,
  HTMLAttributes,
  SVGProps,
  DetailedHTMLFactory,
  AreaHTMLAttributes,
  AudioHTMLAttributes,
  AnchorHTMLAttributes,
  AllHTMLAttributes,
  BaseHTMLAttributes,
  BlockquoteHTMLAttributes,
  ButtonHTMLAttributes,
  CanvasHTMLAttributes,
  ColHTMLAttributes,
  ColgroupHTMLAttributes,
  DataHTMLAttributes,
  DetailsHTMLAttributes,
  DelHTMLAttributes,
  EmbedHTMLAttributes,
  FieldsetHTMLAttributes,
  DialogHTMLAttributes,
  FormHTMLAttributes,
  HtmlHTMLAttributes,
  IframeHTMLAttributes,
  ImgHTMLAttributes,
  InsHTMLAttributes,
  InputHTMLAttributes,
  KeygenHTMLAttributes,
  LabelHTMLAttributes,
  LiHTMLAttributes,
  LinkHTMLAttributes,
  MapHTMLAttributes,
  MenuHTMLAttributes,
  MediaHTMLAttributes,
  MetaHTMLAttributes,
  MeterHTMLAttributes,
  QuoteHTMLAttributes,
  ObjectHTMLAttributes,
  OlHTMLAttributes,
  OptgroupHTMLAttributes,
  OptionHTMLAttributes,
  OutputHTMLAttributes,
  ParamHTMLAttributes,
  ProgressHTMLAttributes,
  SlotHTMLAttributes,
  ScriptHTMLAttributes,
  SelectHTMLAttributes,
  SourceHTMLAttributes,
  StyleHTMLAttributes,
  TableHTMLAttributes,
  TextareaHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
  TimeHTMLAttributes,
  TrackHTMLAttributes,
  VideoHTMLAttributes,
  WebViewHTMLAttributes
} from "react";
export declare module Unwrap {
  /**
   * @type ExciseEnumerble<T> = T extends Array<infer U> ? U : T;
   * @description
   * if T encounters an Array-wrapped type then and only then will it extend the
   * Array (T in Array<infer U> ) to infer the child type(s), U, within;
   * if no array is present T is returned unchanged
   */
  type ExciseEnumerble<T> = T extends Array<infer U> ? U : T;

  type Enumerable<T> = T extends Array<infer U> | infer U
    ? Array<U> | U
    : Array<T[keyof T]> | T[keyof T];

  /**
   * @description
   * naked 'any' in a conditional will short circuit and union both the then/else branches
   *
   * boolean extends (T extends never ? true : false) ? true : false;
   *
   * boolean is only resolved for T = any
   */
  type IsExactlyAny<T> = boolean extends (T extends never ? true : false)
    ? true
    : false;

  type UnionToIntersection<U> = (
    U extends any ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  type RecursiveOptional<T> = { [P in keyof T]?: RecursiveOptional<T[P]> };

  type OmitRecursiveOptionalRecursionAgent<T> = T extends RecursiveOptional<
    infer U
  >
    ? U
    : T;
  interface UnwrapInterface {
    ReactRecursiveUnwrapped: <
      T extends keyof JSX.IntrinsicElements extends Record<keyof T, infer U>
        ? Record<keyof U, U>
        : Record<keyof T, T>
    >({
      ...jsxProps
    }: Partial<
      OmitRecursiveOptionalRecursionAgent<
        RecursiveOptional<JSX.IntrinsicElements>
      >
    >) => typeof jsxProps;
    reactRecursiveReturnTypeInferred: ReturnType<
      Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
    >;

    UnwrapReactWrapperFunction: (
      props: OmitRecursiveOptionalRecursionAgent<
        RecursiveOptional<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>
      >
    ) => ReturnType<typeof props>;
  }
  type ReactUnwrapped<
    T extends keyof ReturnType<
      Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
    >
  > = {
    [P in T]?: ReturnType<Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]>[P];
  };

  type ImplementUnwrapReact<
    T extends keyof ReturnType<
      Unwrap.UnwrapInterface["ReactRecursiveUnwrapped"]
    >,
    _implements = ({
      ...props
    }: Partial<
      OmitRecursiveOptionalRecursionAgent<
        RecursiveOptional<JSX.IntrinsicElements>
      >
    >) => T extends Record<keyof T, infer U>
      ? Record<keyof U, U>
      : Record<keyof T, T>
  > = T;

  type HTMLElementUnion =
    | React.HTMLAnchorElement
    | HTMLAreaElement
    | HTMLAudioElement
    | HTMLBRElement
    | HTMLBaseElement
    | HTMLBodyElement
    | HTMLButtonElement
    | HTMLCanvasElement
    | HTMLDListElement
    | HTMLDataElement
    | HTMLDataListElement
    | HTMLDetailsElement
    | HTMLDivElement
    | HTMLElement
    | HTMLEmbedElement
    | HTMLFieldSetElement
    | HTMLFormElement
    | HTMLHRElement
    | HTMLHeadElement
    | HTMLHeadingElement
    | HTMLHtmlElement
    | HTMLIFrameElement
    | HTMLImageElement
    | HTMLInputElement
    | HTMLLIElement
    | HTMLLabelElement
    | HTMLLegendElement
    | HTMLLinkElement
    | HTMLMapElement
    | HTMLMediaElement
    | HTMLMenuElement
    | HTMLMetaElement
    | HTMLMeterElement
    | HTMLModElement
    | HTMLOListElement
    | HTMLObjectElement
    | HTMLOptGroupElement
    | HTMLOptionElement
    | HTMLParagraphElement
    | HTMLParamElement
    | HTMLPictureElement
    | HTMLProgressElement
    | HTMLQuoteElement
    | HTMLScriptElement
    | HTMLSelectElement
    | HTMLSlotElement
    | HTMLSourceElement
    | HTMLSpanElement
    | HTMLStyleElement
    | HTMLTableCaptionElement
    | HTMLTableCellElement
    | HTMLTableColElement
    | HTMLTableElement
    | HTMLTableRowElement
    | HTMLTableSectionElement
    | HTMLTemplateElement
    | HTMLTextAreaElement
    | HTMLTimeElement
    | HTMLTitleElement
    | HTMLTrackElement
    | HTMLUListElement
    | HTMLUnknownElement
    | HTMLVideoElement
    | HTMLWebViewElement;

  type HTMLAttributesUnion<T> =
    | HTMLAttributes<T>
    | AllHTMLAttributes<T>
    | AnchorHTMLAttributes<T>
    | AreaHTMLAttributes<T>
    | AudioHTMLAttributes<T>
    | BaseHTMLAttributes<T>
    | BlockquoteHTMLAttributes<T>
    | ButtonHTMLAttributes<T>
    | CanvasHTMLAttributes<T>
    | ColHTMLAttributes<T>
    | ColgroupHTMLAttributes<T>
    | DataHTMLAttributes<T>
    | DetailsHTMLAttributes<T>
    | DelHTMLAttributes<T>
    | DialogHTMLAttributes<T>
    | EmbedHTMLAttributes<T>
    | FieldsetHTMLAttributes<T>
    | FormHTMLAttributes<T>
    | HtmlHTMLAttributes<T>
    | IframeHTMLAttributes<T>
    | ImgHTMLAttributes<T>
    | InputHTMLAttributes<T>
    | InsHTMLAttributes<T>
    | KeygenHTMLAttributes<T>
    | LabelHTMLAttributes<T>
    | LiHTMLAttributes<T>
    | LinkHTMLAttributes<T>
    | MapHTMLAttributes<T>
    | MenuHTMLAttributes<T>
    | MediaHTMLAttributes<T>
    | MetaHTMLAttributes<T>
    | MeterHTMLAttributes<T>
    | QuoteHTMLAttributes<T>
    | ObjectHTMLAttributes<T>
    | OlHTMLAttributes<T>
    | OptgroupHTMLAttributes<T>
    | OptionHTMLAttributes<T>
    | OutputHTMLAttributes<T>
    | ParamHTMLAttributes<T>
    | ProgressHTMLAttributes<T>
    | SlotHTMLAttributes<T>
    | ScriptHTMLAttributes<T>
    | SelectHTMLAttributes<T>
    | SourceHTMLAttributes<T>
    | StyleHTMLAttributes<T>
    | TableHTMLAttributes<T>
    | TextareaHTMLAttributes<T>
    | TdHTMLAttributes<T>
    | ThHTMLAttributes<T>
    | TimeHTMLAttributes<T>
    | TrackHTMLAttributes<T>
    | VideoHTMLAttributes<T>
    | WebViewHTMLAttributes<T>;

  type UnwrapHtmlUnion<
    H extends HTMLElementUnion,
    T extends HTMLAttributesUnion<H>
  > = {
    [L in keyof DetailedHTMLProps<T, H>]?: DetailedHTMLProps<T, H>[L];
  };

  type SvgElementUnion =
    | SVGAElement
    | SVGAnimateElement
    | SVGAngle
    | SVGAnimateMotionElement
    | SVGAnimateTransformElement
    | SVGAnimatedAngle
    | SVGAnimatedBoolean
    | SVGAnimatedEnumeration
    | SVGAnimatedInteger
    | SVGAnimatedLength
    | SVGAnimatedLengthList
    | SVGAnimatedNumber
    | SVGAnimatedNumberList
    | SVGAnimatedPoints
    | SVGAnimatedPreserveAspectRatio
    | SVGAnimatedRect
    | SVGAnimatedString
    | SVGAnimatedTransformList
    | SVGAnimationElement
    | SVGBoundingBoxOptions
    | SVGCircleElement
    | SVGClipPathElement
    | SVGComponentTransferFunctionElement
    | SVGDefsElement
    | SVGDescElement
    | SVGElement
    | SVGEllipseElement
    | SVGFEBlendElement
    | SVGFEColorMatrixElement
    | SVGFEComponentTransferElement
    | SVGFECompositeElement
    | SVGFEConvolveMatrixElement
    | SVGFEDiffuseLightingElement
    | SVGFEDistantLightElement
    | SVGFEDropShadowElement
    | SVGFEFloodElement
    | SVGFEFuncAElement
    | SVGFEFuncBElement
    | SVGFEFuncGElement
    | SVGFEFuncRElement
    | SVGFEGaussianBlurElement
    | SVGFEImageElement
    | SVGFEMergeElement
    | SVGFEMergeNodeElement
    | SVGFEMorphologyElement
    | SVGFEOffsetElement
    | SVGFEPointLightElement
    | SVGFESpecularLightingElement
    | SVGFESpotLightElement
    | SVGFETileElement
    | SVGFETurbulenceElement
    | SVGFilterElement
    | SVGFitToViewBox
    | SVGForeignObjectElement
    | SVGGElement
    | SVGGeometryElement
    | SVGGradientElement
    | SVGGraphicsElement
    | SVGImageElement
    | SVGLineElement
    | SVGLinearGradientElement
    | SVGMPathElement
    | SVGMarkerElement
    | SVGMaskElement
    | SVGMetadataElement
    | SVGPathElement
    | SVGPatternElement
    | SVGPolygonElement
    | SVGPolylineElement
    | SVGRadialGradientElement
    | SVGRectElement
    | SVGSVGElement
    | SVGScriptElement
    | SVGSetElement
    | SVGStopElement
    | SVGStyleElement
    | SVGSwitchElement
    | SVGSymbolElement
    | SVGTSpanElement
    | SVGTextContentElement
    | SVGTextElement
    | SVGTextPathElement
    | SVGTextPositioningElement
    | SVGTitleElement
    | SVGUseElement
    | SVGViewElement;

  type UnwrapSvgUnion<
    T extends SvgElementUnion,
    P extends keyof SVGProps<T>
  > = {
    [R in P]?: SVGProps<T>[R];
  };
  //   export type PickFromHTMLUnion<T extends HTMLElementUnion> = DeepPartial<HTMLAttributesUnion<T>>

  /* interface with all optional values to accept ONLY one of them */
  type ConditionalSansOne<T, Keys extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, Keys>
  > &
    {
      [K in Keys]-?: Required<Pick<T, K>> &
        Partial<Record<Exclude<Keys, K>, undefined>>;
    }[Keys];
}
// map out the children props of each recursed JSX.IntrinsicElement via
// an additional round of conditional recursion for type deepening
// @ts-ignore:export-just-namespace
export = Unwrap;
export as namespace Unwrap;
export default namespace = Unwrap;
