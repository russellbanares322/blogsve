import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SquarePlus } from "lucide-react";
import { renderLabelAndInput } from "@/lib/renderLabelAndInput";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

const CreateBlogFormModal = () => {
  const { user } = useUser();
  const createBlog = useMutation(api.blogs.createBlog);
  const [isLoading, setIsLoading] = useState(false);
  const [blogFormInputs, setBlogFormInputs] = useState({
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

  const onSubmit = () => {
    createBlog(blogFormInputs);
    setBlogFormInputs({
      ...blogFormInputs,
      title: "",
      description: "",
      category: "",
    });
  };

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
        <div className="grid gap-4 py-4">
          {renderLabelAndInput({
            label: "Title",
            inputId: "title",
            placeholder: "Please input blog title...",
            onChange: handleBlogFormInputChange,
            value: blogFormInputs.title,
            inputComponentType: "input",
          })}
          {renderLabelAndInput({
            label: "Category",
            inputId: "category",
            placeholder: "Please input blog category...",
            onChange: handleBlogFormInputChange,
            value: blogFormInputs.category,
            inputComponentType: "input",
          })}
          {renderLabelAndInput({
            label: "Description",
            inputId: "description",
            placeholder: "Please input blog description...",
            onChange: handleBlogFormInputChange,
            value: blogFormInputs.description,
            inputComponentType: "textarea",
          })}
        </div>
        <DialogFooter>
          <Button color="green" onClick={onSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBlogFormModal;
