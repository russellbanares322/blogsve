"use client";

import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import ModeToggle from "../components/mode-toggle";
import { LogInIcon, PlusIcon } from "lucide-react";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <header className="py-3">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-semibold text-xl">Blogsve</h1>
        {/* User Menu */}
        <div className="flex items-center gap-2">
          <SignInButton mode="modal">
            <Button>
              <LogInIcon className="h-4 w-4 mr-2" /> Login
            </Button>
          </SignInButton>
          {isSignedIn && (
            <div className="flex items-center gap-2">
              <Button>
                <PlusIcon className="h-4 w-4 mr-2" /> Create Blogpost
              </Button>
              <SignOutButton>
                <UserButton />
              </SignOutButton>
            </div>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
