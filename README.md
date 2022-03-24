# nextjs-headless-wp

Nextjs, Headless WordPress, TypeScript, GraphQL, TailwindCSS

- This type is also housed within the root `index.d.ts` file

```ts
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
```

#### On Demand Revalidation (ISR)

- can be a web hook, a click event, etc -- now ISR can be manually toggled only WHEN data changes

```ts
// location: src/pages/api/revalidate/index.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<{ revalidated: boolean }>
) {
  await res.unstable_revalidate("/");
  return res.json({ revalidated: true });
}
```
