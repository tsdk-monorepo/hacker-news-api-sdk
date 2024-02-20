# Hackernews API sdk

Use [tsdk](https://tsdk.dev) to generate hacker news API sdk, based on the offical API documentation:

https://github.com/HackerNews/API

## Features

- TypeScript types
- Support SWR hooks

## Documentation

https://hn-api-sdk.tsdk.dev

## Getting Started

Install:

```sh
npm install hn-api-sdk
```

Usage (2 steps):

Step 1, create `./user-api.ts` and `./user-api-hooks.ts`:

Create `user-api.ts` (use fetch)

```ts
import xior, { XiorError } from "xior";
import { setHandler, setXiorInstance, xiorHandler } from "hn-api-sdk";

export * from "hn-api-sdk/lib/user-api";
export * from "hn-api-sdk/lib/apiconf-refs";
export * from "hn-api-sdk/lib/shared-refs";

export const baseURL = `https://hacker-news.firebaseio.com`;

const xiorInstance = xior.create({
  baseURL,
  headers: {},
});

xiorInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

xiorInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error: XiorError) => {
    return Promise.reject(error?.message);
  }
);

setXiorInstance(xiorInstance);
setHandler(xiorHandler);
```

Or use axios as the client, create `user-api.ts`:

```ts
import axios, { AxiosError } from "axios";
import { setHandler, setAxiosInstance, axiosHandler } from "hn-api-sdk";

export * from "hn-api-sdk/lib/user-api";
export * from "hn-api-sdk/lib/apiconf-refs";
export * from "hn-api-sdk/lib/shared-refs";

export const baseURL = `https://hacker-news.firebaseio.com`;

const axiosInstance = axios.create({
  baseURL,
  headers: {},
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error?.message);
  }
);

setAxiosInstance(axiosInstance);
setHandler(axiosHandler);
```

Create `user-api-hooks.ts`

```ts user-api-hooks.ts
import "./user-api";

export * from "hn-api-sdk/lib/user-api-hooks";
```

Step 2, import module from `./user-api.ts`:

```ts
import {
  GetUserDetail,
  GetStories,
  GetStory,
  GetComment,
  GetAsk,
  GetJob,
  GetPoll,
  GetPart,
  GetMaxItemId,
  GetChangedItemsAndProfiles,
} from "./user-api";

GetUserDetail({ id: "jl" }).then((res) => {
  console.log(res.id, res.about, res.submitted);
});
```

## Development

First, install dependencies:

> Recommend use `pnpm`

```sh
pnpm install
pnpm run ready
```

Then, sync `hn-api-sdk` packakge files:

```sh
pnpm --filter=api sync-sdk
```

Publish to npm

```sh
pnpm --filter=hn-api-sdk start-publish
```

### Npm package

https://www.npmjs.com/package/hn-api-sdk

### Thanks

- https://transform.tools/json-to-typescript
- https://github.com/HackerNews/API
- https://tsdk.dev
