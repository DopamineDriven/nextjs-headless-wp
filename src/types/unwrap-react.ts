import type { DetailedHTMLProps, HTMLAttributes, SVGProps } from "react";
// let mixin: ARIAMixin
export type UnwrapHtmlPickOneUnion<
  T extends
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
    | HTMLWebViewElement
    | HTMLWebViewElement,
  P extends keyof DetailedHTMLProps<HTMLAttributes<T>, T>
> = {
  [R in P]?: DetailedHTMLProps<HTMLAttributes<T>, T>[R];
};

export type UnwrapSvgPickOneUnion<
  T extends
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
    | SVGViewElement,
  P extends keyof SVGProps<T>
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
