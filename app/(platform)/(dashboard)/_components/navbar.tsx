import { Logo } from "@/components/logo";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="fixed z-50 h-14 t-0 w-full border-b shadow-m bg-white flex items-center justify-center px-3">
      <MobileSidebar />
      <div className="flex items-center justify-between w-full max-w-screen-xl ">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <div className="flex items-center gap-x-2">
          <OrganizationSwitcher
            afterCreateOrganizationUrl={"/organization/:id"}
            afterSelectOrganizationUrl={"/organization/:id"}
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
