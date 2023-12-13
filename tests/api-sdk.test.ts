import { expect, test } from "vitest";
import { GetUserDetail, GetStories, GetStory, GetComment } from "./user-api";

test("GetStories work ok", async () => {
  const res = await GetStories({ type: "best" });
  const story = await GetStory({ id: res[0] });
  const comment = await GetComment({ id: story.kids[0] });
  const lastComment = await GetComment({
    id: story.kids[story.kids.length - 1],
  });
  expect(res.length > 0).toBe(true);
});
