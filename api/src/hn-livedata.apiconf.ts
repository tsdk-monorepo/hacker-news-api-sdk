import { APIConfig } from "@/src/shared/tsdk-helper";

/**
 * Get the current largest item id. ({@link APIConfig})
 * @category Category
 */
export const GetMaxItemIdConfig: APIConfig = {
  type: "user",
  method: "get",
  path: "/v0/maxitem.json",
  description: "Get the current largest item id.",
  category: "live data",
};
/**
 *
 * @category live data
 */
export type GetMaxItemIdReq = object;

/**
 *
 * @category live data
 */
export type GetMaxItemIdRes = number;
// --------- GetMaxItemId END ---------

/**
 * Up to 200-500 stories, query `new/top/best/ask/show/job` stories ({@link APIConfig})
 * @category live data
 */
export const GetStoriesConfig: APIConfig = {
  type: "user",
  method: "get",
  path: `/v0/{type}stories.json`,
  description:
    "Up to 200-500 stories, query `new/top/best/ask/show/job` stories",
  category: "live data",
  paramsInUrl: '{}'
};
/**
 *
 * @category live data
 */
export type GetStoriesReq = {
  type: "new" | "top" | "best" | "ask" | "show" | "job";
};

/**
 *
 * @category live data
 */
export type GetStoriesRes = number[];
// --------- GetStories END ---------



/**
 * Changed Items and Profiles ({@link APIConfig})
 * @category live data
 */
export const GetChangedItemsAndProfilesConfig: APIConfig = {
  type: 'user',
  method: 'get',
  path: '/v0/updates.json',
  description: 'Changed Items and Profiles',
  category: 'live data',
};
/**
 *
 * @category live data
 */
export type GetChangedItemsAndProfilesReq = object;

/**
 *
 * @category live data
 */
export type GetChangedItemsAndProfilesRes = {
  /** items id */
  items: number[];
  /** profiles id */
  profiles: string[];
};
// --------- GetChangedItemsAndProfiles END ---------
