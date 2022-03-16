import { Maybe } from "./helpers";

export type GravityFieldErrors = {
  fieldErrors?:
    | Maybe<{
        __typename?: "FieldError" | undefined;
        id?: Maybe<number>;
        message?: Maybe<string>;
      }>[]
    | undefined;
};
