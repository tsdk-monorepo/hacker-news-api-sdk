import { APIConfig } from "@/src/shared/tsdk-helper";

/**
 * Get story detail ({@link APIConfig})
 * @category items
 */
export const GetStoryConfig: APIConfig = {
  type: "user",
  method: "get",
  path: `/v0/item/{id}.json`,
  description: "Get story detail",
  category: "items",
  paramsInUrl: "{}",
};
/**
 *
 * @category items
 */
export type GetStoryReq = {
  id: number;
};

/**
 *
 * @category items
 */
export type GetStoryRes = {
  /** The username of the item's author. */
  by: string;
  /** The item's unique id. */
  id: number;
  /** In the case of stories or polls, the total comment count. */
  descendants: number;
  /** The ids of the item's comments, in ranked display order. */
  kids: number[];
  /** The story's score, or the votes for a pollopt. */
  score: number;
  /**	The title of the story, poll or job. HTML. */
  title: string;
  /** Creation date of the item, in Unix Time. */
  time: number;
  /** The type of item. One of "job", "story", "comment", "poll", or "pollopt" */
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  /** The URL of the story. */
  url: string;
};
// --------- GetStory END ---------

/**
 * Get commend detail ({@link APIConfig})
 * @category items
 */
export const GetCommentConfig: APIConfig = {
  type: "user",
  method: "get",
  path: `/v0/item/{id}.json`,
  description: "Get commend detail",
  category: "items",
  paramsInUrl: "{}",
};
/**
 *
 * @category items
 */
export type GetCommentReq = {
  id: number;
};

/**
 *
 * @category items
 */
export type GetCommentRes = {
  /** The username of the item's author. */
  by: string;
  /** The item's unique id. */
  id: number;
  /** The ids of the item's comments, in ranked display order. */
  kids: number[];
  /** The comment's parent: either another comment or the relevant story. */
  parent: number;
  /** The comment, story or poll text. HTML. */
  text: string;
  /** Creation date of the item, in Unix Time. */
  time: number;
  /** The type of item. One of "job", "story", "comment", "poll", or "pollopt" */
  type: "job" | "story" | "comment" | "poll" | "pollopt";
};
// --------- GetComment END ---------

// ask

/**
 * Get ask detail ({@link APIConfig})
 * @category items
 */
export const GetAskConfig: APIConfig = {
  type: "user",
  method: "get",
  path: `/v0/item/{id}.json`,
  description: "Get ask detail",
  category: "items",
  paramsInUrl: "{}",
};
/**
 *
 * @category items
 */
export type GetAskReq = {
  id: number;
};

/**
 *
 * @category items
 */
export type GetAskRes = {
  /** The username of the item's author. */
  by: string;
  /** The item's unique id. */
  id: number;
  /** The ids of the item's comments, in ranked display order. */
  kids: number[];
  /** The comment, story or poll text. HTML. */
  text: string;
  /** Creation date of the item, in Unix Time. */
  time: number;
  /** The type of item. One of "job", "story", "comment", "poll", or "pollopt" */
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  /** In the case of stories or polls, the total comment count. */
  descendants: number;
  /** The story's score, or the votes for a pollopt. */
  score: number;
  /**	The title of the story, poll or job. HTML. */
  title: string;
};
// --------- GetAsk END ---------

/**
 * Get job detail ({@link APIConfig})
 * @category items
 */
export const GetJobConfig: APIConfig = {
  type: "user",
  method: "get",
  path: `/v0/item/{id}.json`,
  description: "Get job detail",
  category: "items",
  paramsInUrl: "{}",
};
/**
 *
 * @category items
 */
export type GetJobReq = {
  id: number;
};

/**
 *
 * @category items
 */
export type GetJobRes = {
  /** The username of the item's author. */
  by: string;
  /** The item's unique id. */
  id: number;
  /** The comment, story or poll text. HTML. */
  text: string;
  /** Creation date of the item, in Unix Time. */
  time: number;
  /** The URL of the story. */
  url: string;
  /** The type of item. One of "job", "story", "comment", "poll", or "pollopt" */
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  /** The story's score, or the votes for a pollopt. */
  score: number;
  /**	The title of the story, poll or job. HTML. */
  title: string;
};
// --------- GetJob END ---------

/**
 * Get poll detail ({@link APIConfig})
 * @category items
 */
export const GetPollConfig: APIConfig = {
  type: "user",
  method: "get",
  path: `/v0/item/{id}.json`,
  description: "Get poll detail",
  category: "items",
  paramsInUrl: "{}",
};
/**
 *
 * @category items
 */
export type GetPollReq = {
  id: number;
};

/**
 *
 * @category items
 */
export type GetPollRes = {
  /** In the case of stories or polls, the total comment count. */
  descendants: number;
  /** The ids of the item's comments, in ranked display order. */
  kids: number[];
  /** A list of related pollopts, in display order. */
  parts: number[];
  /**	The title of the story, poll or job. HTML. */
  title: string;
  /** The type of item. One of "job", "story", "comment", "poll", or "pollopt" */
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  /** The story's score, or the votes for a pollopt. */
  score: number;
  /** The username of the item's author. */
  by: string;
  /** The item's unique id. */
  id: number;
  /** The comment, story or poll text. HTML. */
  text: string;
  /** Creation date of the item, in Unix Time. */
  time: number;
};
// --------- GetPoll END ---------

// one of its parts

/**
 * Get part detail ({@link APIConfig})
 * @category items
 */
export const GetPartConfig: APIConfig = {
  type: "user",
  method: "get",
  path: `/v0/item/{id}.json`,
  description: "Get part detail",
  category: "items",
  paramsInUrl: "{}",
};
/**
 *
 * @category items
 */
export type GetPartReq = {
  id: number;
};

/**
 *
 * @category items
 */
export type GetPartRes = {
  /** The pollopt's associated poll. */
  poll: number;
  type: "job" | "story" | "comment" | "poll" | "pollopt";
  /** The story's score, or the votes for a pollopt. */
  score: number;
  /** The username of the item's author. */
  by: string;
  /** The item's unique id. */
  id: number;
  /** The comment, story or poll text. HTML. */
  text: string;
  /** Creation date of the item, in Unix Time. */
  time: number;
};
// --------- GetPart END ---------
