"use client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/useMobileSidebar"
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";

export const MobileSidebar = () => {
  const pathname = usePathname()
  const [ isMounted, setIsMounted ] = useState<boolean>(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);
  
  useEffect(() => {
    setIsMounted(true)
  },[])

  useEffect(() => {
    onClose();
  },[pathname, onClose])

  // even "use client" comps will probably be initally rendered on the server, which can lead to hydration problems
  // when the sidebar is rendered SSR as closed and instantly opened upon CSR. In order to avoid this, ensure nothing
  // is returned until the setIsMounted useEffect above (so once the CSR takes place)
  if(!isMounted){
    return null
  }

  return(
    <>
      <Button onClick={onOpen} className="block md:hidden mr-2" variant={"ghost"} size={"sm"}>
        <Menu className="h-4 w-4"/>
      </Button>
      <Sheet open={isOpen} onOpenChange={(onClose)}>
        <SheetContent side={"left"} className="p-2 pt-10">
          <Sidebar key={"t-mobile-sidebar-state"}/>
        </SheetContent>
      </Sheet>
    </>
  )
}