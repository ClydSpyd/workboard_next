import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { userId } = auth();
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm flex bg-white items-center">
      <div className="md:max-w-screen-xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 block">
          {userId ? (
            <UserButton />
          ) : (
            <>
              <Button size="sm" variant="outline" asChild>
                <Link href="sign-in">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/sign-up">Sign Up For Free</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
