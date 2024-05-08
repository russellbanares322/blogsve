import React from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

type LoaderButtonProps = {
  isLoading?: boolean;
  children: React.ReactNode;
  loadingText: string;
  type: "submit" | "button" | "reset";
  onClick?: () => void;
};

const LoaderButton = ({
  children,
  isLoading,
  loadingText,
  type,
  onClick,
}: LoaderButtonProps) => {
  return (
    <Button disabled={isLoading} type={type} onClick={onClick}>
      {isLoading && (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      )}
      {!isLoading && children}
    </Button>
  );
};

export default LoaderButton;
