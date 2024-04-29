import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Queries
export const getBlogs = query({
    args: {},
    handler: async(ctx) => {
         await ctx.db.query("blogs").collect()
    }
})

// Mutations
export const createBlog = mutation({
    args: { title: v.string(), dateCreated: v.string(), body: v.string() },
    handler: async (ctx, args) => {
         await ctx.db.insert("blogs", {...args})
    }
})