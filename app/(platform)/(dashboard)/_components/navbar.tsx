import { Logo } from "@/components/logo";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className="fixed z-50 h-14 t-0 w-full border-b shadow-m bg-white flex items-center justify-center px-3">
      <div className="flex items-center justify-between w-full max-w-screen-lg ">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <div className="flex items-center gap-x-2">
          <OrganizationSwitcher
            hidePersonal
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}
