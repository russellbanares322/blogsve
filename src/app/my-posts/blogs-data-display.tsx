import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetBlogsResponseData } from "../../../convex/blogs";
import { truncateText } from "@/lib/truncateText";
import moment from "moment";

type BlogsDataDisplayProps = {
  blogsData: GetBlogsResponseData;
};

const BlogsDataDisplay = ({ blogsData }: BlogsDataDisplayProps) => {
  return (
    <Card className="duration-75 cursor-pointer hover:shadow-md">
      <CardHeader>
        <CardTitle>{blogsData.title}</CardTitle>
        <small className="font-light">
          {moment(blogsData._creationTime).format("LL")}
        </small>
        <CardDescription>{truncateText(blogsData.description)}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default BlogsDataDisplay;
