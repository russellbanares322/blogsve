import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  blogs: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
});