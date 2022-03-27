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
}
// map out the children props of each recursed JSX.IntrinsicElement via
// an additional round of conditional recursion for type deepening
// @ts-ignore:export-just-namespace
export = Unwrap;
export as namespace Unwrap;
export default namespace = Unwrap;
