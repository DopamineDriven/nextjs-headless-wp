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
import { DeepPartial } from "utility-types";
import { ImmutablePick } from "./helpers";

// naked 'any' type in a conditional type will short circuit and union both the then/else branches
// so boolean is only resolved for T = any
type IsExactlyAny<T> = boolean extends (T extends never ? true : false)
  ? true
  : false;

// export type TestingSOmething<T extends JSX.IntrinsicElements> = T[keyof T]
// let x = ({ ...props }: TestingSOmething<JSX.IntrinsicElements>) => ({ ...props });
export type HTMLElementUnion =
  | HTMLAnchorElement
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

export type HTMLAttributesUnion<T> =
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

export type UnwrapHtmlUnion<
  H extends HTMLElementUnion,
  T extends HTMLAttributesUnion<H>
> = {
  [L in keyof DetailedHTMLProps<T, H>]?: DetailedHTMLProps<T, H>[L];
};

export type SvgElementUnion =
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

export type UnwrapSvgUnion<
  T extends SvgElementUnion,
  P extends keyof SVGProps<T>
> = {
  [R in P]?: SVGProps<T>[R];
};
//   export type PickFromHTMLUnion<T extends HTMLElementUnion> = DeepPartial<HTMLAttributesUnion<T>>

/* interface with all optional values to accept ONLY one of them */
export type ConditionalSansOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export type PickJustOne<
  T extends HTMLElementUnion,
  S extends HTMLAttributesUnion<T>
> = DeepPartial<DetailedHTMLProps<S, T>>;

export const yy = ({
  ...props
}: PickJustOne<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>) => ({ ...props });
