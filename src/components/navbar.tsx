"use client";

import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import ModeToggle from "./mode-toggle";
import { LogInIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <nav className="py-3 border-b">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-semibold text-xl cursor-pointer">
          <Link href="/">Blogsve</Link>
        </h1>
        {/* User Menu */}
        <div className="flex items-center gap-6">
          {isSignedIn && (
            <p className="cursor-pointer mr-5 text-sm">
              <Link href="/my-posts">My Posts</Link>
            </p>
          )}
          {!isSignedIn && (
            <SignInButton mode="modal">
              <Button>
                <LogInIcon className="h-4 w-4 mr-2" /> Login
              </Button>
            </SignInButton>
          )}
          {isSignedIn && (
            <div className="flex items-center gap-2">
              <SignOutButton>
                <UserButton />
              </SignOutButton>
            </div>
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
