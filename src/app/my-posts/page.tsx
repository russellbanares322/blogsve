"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

const MyPosts = () => {
  const blogs = useQuery(api.blogs.getBlogs);
  const createBlog = useMutation(api.blogs.createBlog);
  const { user } = useUser();

  return (
    <div className="container">
      <p>My Posts</p>
      <Button
        onClick={() => {
          createBlog({
            title: `Blog # ${Math.floor(Math.random() * 10)}`,
            body: "Test body",
            category: "Entertainment",
            authorId: user?.id as string,
          });
        }}
      >
        Add Blog
      </Button>
      {JSON.stringify(blogs)}
    </div>
  );
};

export default MyPosts;
