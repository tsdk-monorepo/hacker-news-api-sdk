import { expect, test } from "vitest";
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

test("APIs work fine", async () => {
  const res = await GetStories({ type: "best" });
  expect(res.length > 0).toBe(true);

  const story = await GetStory({ id: res[0] });
  expect(story.id).toBe(res[0]);

  const profile = await GetUserDetail({ id: story.by });
  expect(profile.id).toBe(story.by);

  const comment = await GetComment({ id: story.kids[0] });
  expect(comment.id).toBe(story.kids[0]);

  const job = await GetJob({ id: story.kids[0] });
  expect(job.id).toBe(story.kids[0]);

  const poll = await GetPoll({ id: story.kids[0] });
  expect(poll.id).toBe(story.kids[0]);

  const ask = await GetAsk({
    id: story.kids[story.kids.length - 1],
  });
  expect(ask.id).toBe(story.kids[story.kids.length - 1]);

  const id = await GetMaxItemId({});
  expect(id > 0).toBe(true);

  const changedRes = await GetChangedItemsAndProfiles({});
  expect(changedRes.items.length > 0).toBe(true);
  expect(changedRes.profiles.length > 0).toBe(true);
});
