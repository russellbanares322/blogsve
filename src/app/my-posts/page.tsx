"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { SquarePlus } from "lucide-react";
import CreateBlogFormModal from "@/components/create-blog-form-modal";

const MyPosts = () => {
  const { user } = useUser();
  const userId = user?.id as string;

  const myBlogs = useQuery(api.blogs.getBlogByAuthorId, { authorId: userId });
  const hasNoBlogCreated = myBlogs?.length === 0;

  return (
    <div className="container">
      <p className="mt-10">My Posts</p>
      {hasNoBlogCreated && (
        <div className="flex items-center justify-center flex-col mt-10 gap-4">
          <h1>You haven't posted blog yet</h1>
          <CreateBlogFormModal />
        </div>
      )}
      {!hasNoBlogCreated && JSON.stringify(myBlogs)}
    </div>
  );
};

export default MyPosts;
