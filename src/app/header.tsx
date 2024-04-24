import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="py-3">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-semibold text-lg">Blogsve</h1>
        {/* User Menu */}
        <div>
          <SignInButton mode="modal">
            <Button>Login</Button>
          </SignInButton>
          <SignOutButton>
            <UserButton />
          </SignOutButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
