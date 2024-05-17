import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export type GetBlogsResponseData = {
    _creationTime: number,
    _id: string,
    authorId: string,
    title: string,
    category: string,
    description: string
}

// Queries
export const getBlogs = query({
    args: {},
    handler: async(ctx) => {
     return await ctx.db.query("blogs").collect()
    }
})

export const getBlog = query({
    args: { blogId: v.id("blogs") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.blogId);
      },
})

export const getBlogByAuthorId = query({
    args: { authorId: v.string() },
    handler: async(ctx, args) => {
     return await ctx.db.query("blogs").filter((q) => q.eq(q.field("authorId"), args.authorId)).collect()
    }
})

// Mutations
export const createBlog = mutation({
    args: { title: v.string(), description: v.string(), category: v.string(), authorId: v.string()},
    handler: async (ctx, args) => {
        return await ctx.db.insert("blogs", {...args})
    }
})

export const updateBlog = mutation({
    args: {
     id: v.id("blogs"), title: v.string(), description: v.string(), category: v.string()
    },
    handler: async (ctx, args) => {
        return await ctx.db.patch(args.id, {
            title: args.title,
            description: args.description,
            category: args.category,
        })
    }
})