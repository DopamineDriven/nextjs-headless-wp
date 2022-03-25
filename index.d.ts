/// <reference types="google.maps" />
/// <reference types="grecaptcha" />
/// <reference types="gtag.js" />

declare module "google.maps";
declare module "grecaptcha";
declare module "gtag.js";

// for google tag manager analytics compat
interface Window {
  dataLayer?: object[];
}

// tslint:disable-next-line:export-just-namespace
export = Unwrap;
export as namespace Unwrap;
declare global {
  namespace Unwrap {
    /**
     * @type {RecursiveOptional}
     * @description Recursive Optional Mapping <T[P]>
     */
    type RecursiveOptional<T> = {
      [P in keyof T]?: RecursiveOptional<T[P]>;
    };

    /**
     * @type {OmitRecursiveOptionalWrapper}
     * @description RecursiveOptional Extraction Agent; strips target post-recursion
     */
    type OmitRecursiveOptionalWrapper<T> = T extends RecursiveOptional<infer U>
      ? U
      : T;

    /**
     * @function ReactRecursiveUnwrapped
     * @description Strip'N'Spread; OmitRecursiveOptionalWrapper and RecursiveOptional cancel
     * one another out -- achieves 1:1 alignment with internal JSX.IntrinsicElements
     */
    function ReactRecursiveUnwrapped({
      jsxProps
    }: {
      jsxProps: Partial<
        OmitRecursiveOptionalWrapper<RecursiveOptional<JSX.IntrinsicElements>>
      >;
    }) {
      return { ...jsxProps };
    }

    /**
     * @type {ReactUnwrapped}
     * @description Stable -- TypeDef to use Globally
     */
    type ReactUnwrapped<
      T extends keyof ReturnType<typeof ReactRecursiveUnwrapped>
    > = {
      [P in T]?: ReturnType<typeof ReactRecursiveUnwrapped>[P];
    };

    /**
     * @type {ReactRecursive}
     * @description Experimental -- Recursively implement JSX.Intrinsic Elements
     */
    type ReactRecursive<
      T,
      _implements = ({
        ...props
      }: JSX.IntrinsicElements) => T extends Record<keyof T, infer U>
        ? Record<keyof U, U>
        : Record<keyof T, T>
    > = Partial<
      OmitRecursiveOptionalWrapper<RecursiveOptional<JSX.IntrinsicElements>>
    >;

    /**
     *
     * @function UnwrapReactWrapperFunction
     * @description Experimental -- function def to use globally
     */
    function UnwrapReactWrapperFunction({
      ...props
    }: OmitRecursiveOptionalWrapper<
      ReactUnwrapped<`${keyof ReturnType<typeof ReactRecursiveUnwrapped>}`>
    >) {
      return { ...props };
    }
  }
}
