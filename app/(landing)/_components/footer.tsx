import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-14 px-4 border-t items-center">
      <div className="md:max-w-screen-lg mx-auto flex items-center w-full justify-between">
        <div className="space-x-4 flex items-center justify-center w-full">
          <Button size="sm" variant="ghost">
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
          <Button size="sm" variant="ghost">
            <Link href="/terms">Terms of service</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
