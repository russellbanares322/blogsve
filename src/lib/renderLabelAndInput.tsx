import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type RenderLabelAndInputProps = {
  label: string;
  inputId: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string | number | readonly string[] | undefined;
  inputComponentType: "textarea" | "input";
  required?: boolean;
};

// This will handle dynamic rendering of form's label and input field
export const renderLabelAndInput = (props: RenderLabelAndInputProps) => {
  const {
    inputId,
    label,
    placeholder,
    onChange,
    value,
    inputComponentType,
    required = false,
  } = props;

  // Dynamically render what input component it will be, depending on use case
  const renderInputComponent = () => {
    const inputComponentMap = {
      textarea: (
        <Textarea
          onChange={onChange}
          id={inputId}
          placeholder={placeholder}
          value={value}
          required={required}
        />
      ),
      input: (
        <Input
          onChange={onChange}
          id={inputId}
          placeholder={placeholder}
          value={value}
          required={required}
        />
      ),
    };
    const selectedInputComponent = inputComponentMap[inputComponentType];

    return selectedInputComponent;
  };

  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={inputId} className="text-left">
        {label}
      </Label>
      {renderInputComponent()}
    </div>
  );
};
