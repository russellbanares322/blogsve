"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import BlogsDataDisplay from "./blogs-data-display";
import CreateBlogModal from "@/components/create-blog-modal";

const MyPosts = () => {
  const { user } = useUser();
  const userId = user?.id as string;

  const myBlogs = useQuery(api.blogs.getBlogByAuthorId, { authorId: userId });
  const hasNoBlogCreated = myBlogs?.length === 0;

  return (
    <div className="container min-h-screen h-full">
      <p className="page-title">My Posts</p>
      {hasNoBlogCreated && (
        <div className="flex items-center justify-center flex-col mt-10 gap-4">
          <h1>You haven't posted blog yet</h1>
          <CreateBlogModal hasNoData />
        </div>
      )}
      {!hasNoBlogCreated && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <CreateBlogModal hasNoData={false} />
          {myBlogs?.map((blog) => (
            <BlogsDataDisplay key={blog._id} blogsData={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPosts;
