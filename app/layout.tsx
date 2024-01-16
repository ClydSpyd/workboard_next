import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "@/utils/fonts";
import { siteConfig } from "@/config/site";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <>
      <ClerkProvider>
        <html lang="en">
          <body className={fontVariables}>
            {children}
            <ToastContainer />
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
