import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SquarePlus } from "lucide-react";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "./ui/button";
import CreateBlogForm from "./create-blog-form";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

export type TBlogFormInputs = {
  title: string;
  description: string;
  category: string;
  authorId: string;
};

type CreateBlogModalProps = {
  hasNoData: boolean;
};

const CreateBlogModal = ({ hasNoData }: CreateBlogModalProps) => {
  const { user } = useUser();
  const createBlog = useMutation(api.blogs.createBlog);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blogFormInputs, setBlogFormInputs] = useState<TBlogFormInputs>({
    title: "",
    description: "",
    category: "",
    authorId: user?.id as string,
  });

  // For dynamically getting blog form input values
  const handleBlogFormInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setBlogFormInputs({ ...blogFormInputs, [id]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    createBlog(blogFormInputs).then((res) => {
      setIsSubmitting(false);
    });
    setBlogFormInputs({
      ...blogFormInputs,
      title: "",
      description: "",
      category: "",
    });
  };

  // For reusability and to render create blog form modal without repeating of code
  const renderDialogComponent = (dialogTrigger: React.ReactNode) => {
    return (
      <Dialog>
        <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>Create Blog</DialogTitle>
          </DialogHeader>
          <CreateBlogForm
            onSubmit={onSubmit}
            handleBlogFormInputChange={handleBlogFormInputChange}
            blogFormInputs={blogFormInputs}
            isSubmitting={isSubmitting}
          />
        </DialogContent>
      </Dialog>
    );
  };

  // This will show if the user doesn't have any blogpost created yet
  if (!hasNoData) {
    return renderDialogComponent(
      <Card className="flex items-center justify-center cursor-pointer">
        <CardContent className="flex flex-col items-center justify-center gap-1">
          <SquarePlus size={30} />
          <CardDescription className="text-md">Create Blog</CardDescription>
        </CardContent>
      </Card>
    );
  }

  return renderDialogComponent(
    <Button>
      <SquarePlus className="h-4 w-4 mr-2" /> Create Blog
    </Button>
  );
};

export default CreateBlogModal;
