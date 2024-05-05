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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SquarePlus } from "lucide-react";
import { renderLabelAndInput } from "@/lib/renderLabelAndInput";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

const CreateBlogFormModal = () => {
  const { user } = useUser();
  const [blogFormInputs, setBlogFormInputs] = useState({
    title: "",
    body: "",
    category: "",
    authorId: user?.id,
  });

  // For dynamically getting blog form input values
  const handleBlogFormInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;

    setBlogFormInputs({ ...blogFormInputs, [id]: value });
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
          })}
          {renderLabelAndInput({
            label: "Category",
            inputId: "category",
            placeholder: "Please input blog category...",
            onChange: handleBlogFormInputChange,
            value: blogFormInputs.category,
          })}
        </div>
        <DialogFooter>
          <Button color="green" type="submit">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBlogFormModal;
