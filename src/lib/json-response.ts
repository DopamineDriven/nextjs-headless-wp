import { DeepPartial } from "utility-types";

export type DeepPartialConditional<T> = T | DeepPartial<T>;

export function jsonResponse<T = any extends infer U ? U : any>(
  status: number,
  data: DeepPartialConditional<T>,
  init?: ResponseInit
): Response {
  return new Response(JSON.stringify(data, null, 2), {
    ...init,
    status,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json"
    }
  });
}
