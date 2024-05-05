import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type RenderLabelAndInputProps = {
  label: string;
  inputId: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number | readonly string[] | undefined;
};

export const renderLabelAndInput = (props: RenderLabelAndInputProps) => {
  const { inputId, label, placeholder, onChange, value } = props;

  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={inputId} className="text-left">
        {label}
      </Label>
      <Input
        onChange={onChange}
        id={inputId}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
