import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetBlogsResponseData } from "../../../convex/blogs";

type BlogsDataDisplayProps = {
  blogsData: GetBlogsResponseData;
};

const BlogsDataDisplay = ({ blogsData }: BlogsDataDisplayProps) => {
  return (
    <Card className="duration-75 cursor-pointer hover:shadow-md">
      <CardHeader>
        <CardTitle>{blogsData.title}</CardTitle>
        <CardDescription>{blogsData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default BlogsDataDisplay;