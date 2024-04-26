import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import ModeToggle from "../components/mode-toggle";

const Header = () => {
  return (
    <header className="py-3">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-semibold text-xl">Blogsve</h1>
        {/* User Menu */}
        <div className="flex items-center gap-2">
          <SignInButton mode="modal">
            <Button>Login</Button>
          </SignInButton>
          <SignOutButton>
            <UserButton />
          </SignOutButton>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
