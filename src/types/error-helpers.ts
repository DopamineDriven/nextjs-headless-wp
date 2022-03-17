import type { Maybe } from "@/graphql/generated/graphql";

export type GravityFieldErrors = {
  fieldErrors?:
    | Maybe<{
        __typename?: "FieldError" | undefined;
        id?: Maybe<number>;
        message?: Maybe<string>;
      }>[]
    | undefined;
};
