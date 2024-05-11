import {
  Dialog,
  DialogContent,
  DialogFooter,
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

  if (!hasNoData) {
    return <h1>Hi</h1>;
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <SquarePlus className="h-4 w-4 mr-2" /> Create Blog
        </Button>
      </DialogTrigger>
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

export default CreateBlogModal;
