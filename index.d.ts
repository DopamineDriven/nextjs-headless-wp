/// <reference types="google.maps" />
/// <reference types="grecaptcha" />
/// <reference types="gtag.js" />

declare module "google.maps";
declare module "grecaptcha";
declare module "gtag.js";

// Recursive Optional Mapping good-good
declare type RecursiveOptional<T> = {
  [P in keyof T]?: RecursiveOptional<T[P]>;
};

// Strip RecursiveOptional Wrapper post-recursion for 1:1 alignment with core react typedefs
declare type OmitRecursiveOptionalWrapper<T> = T extends RecursiveOptional<
  infer U
>
  ? U
  : T;

// Recursively implement the shit out of JSX.Intrinsic Elements
declare type ReactRecursive<
  T,
  _implements = ({
    ...props
  }: JSX.IntrinsicElements) => T extends Record<keyof T, infer U>
    ? Record<keyof U, U>
    : Record<keyof T, T>
> = Partial<
  OmitRecursiveOptionalWrapper<RecursiveOptional<JSX.IntrinsicElements>>
>;

// strips the recursively conditional helper type for 1:1 alignment with Reacts internal definitions
declare const ReactRecursiveUnwrapped = ({
  jsxProps
}: {
  jsxProps: Partial<
    OmitRecursiveOptionalWrapper<RecursiveOptional<JSX.IntrinsicElements>>
  >;
}) => ({ ...jsxProps });

// TypeDef to use Globally
declare type ReactUnwrapped<
  T extends keyof ReturnType<typeof ReactRecursiveUnwrapped>
> = {
  [P in T]?: ReturnType<typeof ReactRecursiveUnwrapped>[P];
};

// function def to use globally
declare const UnwrapReactWrapperFunction = ({
  ...props
}: OmitRecursiveOptionalWrapper<
  ReactUnwrapped<`${keyof ReturnType<typeof ReactRecursiveUnwrapped>}`>
>) => ({ ...props });

interface Window {
  dataLayer?: object[];
}
