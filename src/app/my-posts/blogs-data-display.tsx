import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetBlogsResponseData } from "../../../convex/blogs";
import { truncateText } from "@/lib/truncateText";
import moment from "moment";
import { Edit, EllipsisVertical, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type BlogsDataDisplayProps = {
  blogsData: GetBlogsResponseData;
};

const BlogsDataDisplay = ({ blogsData }: BlogsDataDisplayProps) => {
  return (
    <Card className="duration-75 hover:shadow-md relative">
      <CardHeader>
        <CardTitle>{blogsData.title}</CardTitle>
        <small className="font-thin">
          {moment(blogsData._creationTime).format("LL")}
        </small>
        <CardDescription className="pt-3">
          {truncateText(blogsData.description)}{" "}
          <span className="italic text-xs cursor-pointer hover:underline">
            Read more
          </span>
        </CardDescription>
      </CardHeader>
      <div className="absolute top-2 right-2 cursor-pointer">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Edit className="h-4 w-4 mr-2" /> Update
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash className="h-4 w-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  );
};

export default BlogsDataDisplay;
