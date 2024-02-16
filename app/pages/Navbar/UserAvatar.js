"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { firebaseAuth } from "@/context/Firebase";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Showloading from "./showloading";
import { MenuIcon } from "lucide-react";
import toast from "react-hot-toast";
export default function UserAvatar() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setLoading(false);
        setUser(user);
      } else {
        setLoading(false);
      }
    });
  }, []);
  if (loading) return <Showloading />;
  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Signed out");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="ml-2 mr-2 mt-2 lg:block">
            {user ? (
              <Avatar>
                <AvatarImage src={user.photoURL} alt={user.displayName} />
                <AvatarFallback>{user.displayName}</AvatarFallback>
              </Avatar>
            ) : (
              <div className="flex justify-center items-center cursor-pointer">
                <MenuIcon size={30} />
              </div>
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            {user ? (
              <>
                <p>Signed in as</p>
                <p>{user.email}</p>
              </>
            ) : (
              "My Account"
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {user && (
            <>
              <DropdownMenuGroup>
                <Link href={`/user/${user.uid}`}>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
            </>
          )}
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <a
            href="https://github.com/charandeep7/book-swap"
            target="_blank"
            className="cursor-pointer"
          >
            <DropdownMenuItem>Github</DropdownMenuItem>
          </a>
          <DropdownMenuItem>
            <Link href="/contact">Support</Link>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          {!user ? (
            <>
              <Link href="/signin">
                <DropdownMenuItem>Sign In</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href="/signup">
                <DropdownMenuItem>Sign Up</DropdownMenuItem>
              </Link>
            </>
          ) : (
            <DialogTrigger asChild>
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DialogTrigger>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign Out?</DialogTitle>
          <DialogDescription>Do you really want to sign out?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" onClick={() => handleSignOut()}>
              Sign Out
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
