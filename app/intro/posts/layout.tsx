import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HELLÖ PöSts",
  description: "HELLO Wörld"
}

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <div className="h-full w-full flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
