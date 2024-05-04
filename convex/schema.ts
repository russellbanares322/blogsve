import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  blogs: defineTable({
    body: v.string(),
    category: v.string(),
    title: v.string(),
    authorId: v.string()
  }),
});