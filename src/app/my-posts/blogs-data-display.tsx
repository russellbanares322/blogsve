import { GetBlogsResponseData } from "../../../convex/blogs";

type BlogsDataDisplayProps = {
  blogsData: GetBlogsResponseData;
};

const BlogsDataDisplay = ({ blogsData }: BlogsDataDisplayProps) => {
  return <div>{JSON.stringify(blogsData)}</div>;
};

export default BlogsDataDisplay;
