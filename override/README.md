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

Create `user-api.ts`

```ts
import axios, { AxiosError } from "axios";
import { setHandler, setAxiosInstance, axiosHandler } from "hn-api-sdk";

export * from "hn-api-sdk/lib/user-api";
export * from "hn-api-sdk/lib/apiconf-refs";
export * from "hn-api-sdk/lib/shared-refs";

export const baseURL = `https://hacker-news.firebaseio.com`;

const apiURL = baseURL;

const axiosInstance = axios.create({
  baseURL: apiURL,
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
