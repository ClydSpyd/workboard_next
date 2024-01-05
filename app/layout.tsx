import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/utils/fonts";
import { siteConfig } from "@/config/site";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: "TASKIFY GETS IT DONE!",
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={fontVariables}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
