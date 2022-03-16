import { EmailFieldsGravityPartialFragment } from "@/graphql/generated/graphql";
import useGravityForm, {
  ACTION_TYPES,
  BaseFieldValue,
  EmailFieldValues
} from "@/hooks/use-gravity";
import { GravityFieldErrors } from "@/types/error-helpers";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { UnwrapInputProps } from "@/types/mapped";

export const InjectEmailInput = ({
  ...props
}: UnwrapInputProps<
  | "className"
  | "type"
  | "name"
  | "id"
  | "required"
  | "value"
  | "onChange"
  | "placeholder"
>) => <input {...props} />;
