"use client"

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export interface Organization {
  id: string;
  slug: string;
  imageUrl: string,
  name: string
}

interface Props {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand: (id: string ) => void
}

export const NavItem =  ({isExpanded, isActive, organization, onExpand}: Props) => {
  const router = useRouter();
  const pathname = usePathname()

  const routes = [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2" />,
      href:`/organization/${organization.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="h-4 w-4 mr-2" />,
      href:`/organization/${organization.id}/activity`,
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
      href:`/organization/${organization.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard className="h-4 w-4 mr-2" />,
      href:`/billing`,
    },
  ];

  const onCLick = (href: string) => router.push(href) 
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={`flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 text-start no-underline hover:no-underline ${
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        }`}
      >
        <div className="w-7 h-7 relative">
          <Image
            fill
            objectFit="contain"
            src={organization.imageUrl}
            alt="organization"
            className=""
          />
        </div>
        <span className="font-medium text-sm">{organization.name}</span>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-50-700">
        {
          routes.map((route) => (
            <Button key={route.href} size="sm" onClick={()=>onCLick(route.href)} className={`w-full font-normal justify-start pl-10 mb-1 ${pathname === route.href && "bg-sky-500/10 text-sky-700"}`} variant={'ghost'}>
              {route.icon}
              {route.label}
            </Button>
          ))
        }
      </AccordionContent>
    </AccordionItem>
  );
};

NavItem.Skeleton = function SkeletonNavItem() {
  return(
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className="h-full w-full absolute"/>
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  )
}