"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import CreateUpdateBlogModal from "@/components/create-update-blog-modal";
import BlogsDataDisplay from "./blogs-data-display";

const MyPosts = () => {
  const { user } = useUser();
  const userId = user?.id as string;

  const myBlogs = useQuery(api.blogs.getBlogByAuthorId, { authorId: userId });
  const hasNoBlogCreated = myBlogs?.length === 0;

  return (
    <div className="container">
      <p className="page-title">My Posts</p>
      {hasNoBlogCreated && (
        <div className="flex items-center justify-center flex-col mt-10 gap-4">
          <h1>You haven't posted blog yet</h1>
          <CreateUpdateBlogModal hasNoData />
        </div>
      )}
      {!hasNoBlogCreated && (
        <div className="grid grid-cols-1 md:grid-cols-5">
          {myBlogs?.map((blog) => <BlogsDataDisplay blogsData={blog} />)}
        </div>
      )}
    </div>
  );
};

export default MyPosts;
