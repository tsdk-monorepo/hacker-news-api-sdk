import { APIConfig } from "@/src/shared/tsdk-helper";

/**
 * Query user detail ({@link APIConfig})
 * @category users
 */
export const GetUserDetailConfig: APIConfig = {
  type: "user",
  method: "get",
  path: `/v0/user/{id}.json`,
  description: "Query user detail",
  category: "users",
  paramsInUrl: '{}'
};
/**
 *
 * @category users
 */
export type GetUserDetailReq = {
  /** The user's unique username. Case-sensitive. Required. */
  id: string;
};

/**
 *
 * @category users
 */
export type GetUserDetailRes = {
  /** The user's unique username. Case-sensitive. */
  id: string;
  /** Creation date of the user, in Unix Time. */
  created: number;
  /** The user's karma. */
  karma: number;
  /** The user's optional self-description. HTML. */
  about?: string;
  delay: number;
  /** List of the user's stories, polls and comments. */
  submitted: number[];
};
// --------- GetUserDetail END ---------
