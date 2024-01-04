import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm flex bg-white items-center">
      <div className="md:max-w-screen-lg mx-auto flex items-center w-full justify-between bg-white">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sing-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sing-up">Sign Up For Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
