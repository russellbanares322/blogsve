import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Implement update and deletion of blogs
// Queries
export const getBlogs = query({
    args: {},
    handler: async(ctx) => {
         await ctx.db.query("blogs").collect()
    }
})

export const getBlog = query({
    args: { blogId: v.id("blogs")},
    handler: async(ctx, args) => {
        const blog = await ctx.db.query("blogs").filter((q) => q.eq(q.field("_id"), args.blogId));

        return blog
    }
})

// Mutations
export const createBlog = mutation({
    args: { title: v.string(), dateCreated: v.string(), body: v.string() },
    handler: async (ctx, args) => {
         await ctx.db.insert("blogs", {...args})
    }
})