"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { firebaseAuth, useFirebase } from "@/context/Firebase";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Showloading from "./showloading";
import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function UserAvatar() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();
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
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Signed out");
      })
      .catch((error) => {
        // An error happened.
        toast.error("Something went wrong");
      });
  };
  console.log(user);
  return (
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
              <DropdownMenuItem>
                <Link href={`/user/${user.uid}`}>Profile</Link>
              </DropdownMenuItem>
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
        <DropdownMenuItem>GitHub</DropdownMenuItem>
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
          <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
