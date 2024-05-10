import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetBlogsResponseData } from "../../../convex/blogs";
import { truncateText } from "@/lib/truncateText";
import moment from "moment";
import { EllipsisVertical } from "lucide-react";

type BlogsDataDisplayProps = {
  blogsData: GetBlogsResponseData;
};

const BlogsDataDisplay = ({ blogsData }: BlogsDataDisplayProps) => {
  return (
    <Card className="duration-75 hover:shadow-md relative">
      <CardHeader>
        <CardTitle>{blogsData.title}</CardTitle>
        <small className="font-light">
          {moment(blogsData._creationTime).format("LL")}
        </small>
        <CardDescription>
          {truncateText(blogsData.description)}{" "}
          <span className="italic text-xs cursor-pointer hover:underline">
            Read more
          </span>
        </CardDescription>
      </CardHeader>
      <EllipsisVertical
        className="absolute top-2 right-2 cursor-pointer"
        size={20}
      />
    </Card>
  );
};

export default BlogsDataDisplay;
