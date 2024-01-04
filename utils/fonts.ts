import { Dancing_Script, Oswald, Poppins } from "next/font/google";
import localFont from "next/font/local";

const carlsans = localFont({
  src: "../public/font.woff2",
  variable: "--carlsans-font",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins-font",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--dancing-font",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--oswald-font",
});

export const fontVariables = `${carlsans.variable} ${poppins.variable} ${dancing.variable} ${oswald.variable}`;
