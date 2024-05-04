"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";

const MyPosts = () => {
  const blogs = useQuery(api.blogs.getBlogs);
  const createBlog = useMutation(api.blogs.createBlog);

  return (
    <div className="container">
      <p>My Posts</p>
      <Button
        onClick={() => {
          createBlog({
            title: `Blog # ${Math.floor(Math.random() * 10)}`,
            body: "Test body",
            category: "Entertainment",
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
