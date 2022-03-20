# nextjs-headless-wp
Nextjs, Headless WordPress, TypeScript, GraphQL, TailwindCSS

```ts
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
