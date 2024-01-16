import { Button } from "@/components/ui/button";
import { GanttChartSquare } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const HeadingFont = localFont({
  // Cal Sans font
  src: "../../public/fonts/font.woff2",
});

export default function LandingPage() {
  
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full px-4 uppercase">
          <GanttChartSquare className="h-6 w-6 mr-2" />
          <p className="text-center font-semibold text-sm font-carlsans">
            Next-level workflow
          </p>
        </div>
        <h1
          className={cn(
            "text-3xl md:text-6xl text-center text-neutral-800 mb-4 md:mt-3 md:mb-10",
            HeadingFont.className
          )}
        >
          Taskify helps you get it done
        </h1>
        <div
          className={`text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to bg-pink-600 text-white px-4 p-2 rounded-md font-bold  pb-4 w-fit`}
        >
          work smart.
        </div>
      </div>
      <div
        className={`text-sm md-text-xl text-neutral-400 mt-4 max-w-xs md:max-w-md text-center mx-auto font-medium font-poppins`}
      >
        Collaborate, manage projects and reach new levels of productivity. From
        high-rises to home offices, your workflow is unique - do it all with
        Taskify
      </div>
      <Button className="mt-4" size={"lg"} asChild>
        {/* <Link href={"/intro/posts"}>GO</Link> */}
        <Link href={"/sign-up"}>GO</Link>
      </Button>
    </div>
  );
}
