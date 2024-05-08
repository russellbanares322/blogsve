import React from "react";
import { TBlogFormInputs } from "./create-update-blog-modal";
import { renderLabelAndInput } from "@/lib/renderLabelAndInput";
import LoaderButton from "./loader-button";

type CreateUpdateBlogFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleBlogFormInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  blogFormInputs: TBlogFormInputs;
  isSubmitting: boolean;
};

const CreateUpdateBlogForm = ({
  onSubmit,
  handleBlogFormInputChange,
  blogFormInputs,
  isSubmitting,
}: CreateUpdateBlogFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-4 py-4">
        {renderLabelAndInput({
          label: "Title",
          inputId: "title",
          placeholder: "Please input blog title...",
          onChange: handleBlogFormInputChange,
          value: blogFormInputs.title,
          inputComponentType: "input",
          required: true,
        })}
        {renderLabelAndInput({
          label: "Category",
          inputId: "category",
          placeholder: "Please input blog category...",
          onChange: handleBlogFormInputChange,
          value: blogFormInputs.category,
          inputComponentType: "input",
          required: true,
        })}
        {renderLabelAndInput({
          label: "Description",
          inputId: "description",
          placeholder: "Please input blog description...",
          onChange: handleBlogFormInputChange,
          value: blogFormInputs.description,
          inputComponentType: "textarea",
          required: true,
        })}
      </div>
      <div className="flex items-end justify-end">
        <LoaderButton
          isLoading={isSubmitting}
          loadingText="Submitting..."
          type="submit"
        >
          Submit
        </LoaderButton>
      </div>
    </form>
  );
};

export default CreateUpdateBlogForm;
