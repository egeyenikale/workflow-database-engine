import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Workflow Database Engine exposes project metadata", () => {
  assert.equal(project.slug, "workflow-database-engine");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
