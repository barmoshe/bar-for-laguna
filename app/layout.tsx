import type { Metadata, Viewport } from "next";
import { Poppins, Source_Serif_4 } from "next/font/google";
import "@/src/marketing/laguna/marketing-base.css";
import "@/src/marketing/laguna/laguna.css";

// Laguna's live brand: Source Serif 4 (700) display + Poppins body, read off
// lagunahealth.com. Both are the real faces they serve, on Google Fonts.
const body = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--laguna-font",
  display: "swap",
});

const display = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--laguna-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bar-for-laguna.vercel.app"),
  title: "Bar Moshe, for Laguna Health",
  description:
    "Bar Moshe, AI Builder and Full-Stack Engineer, for the Product-Minded Engineer role at Laguna Health. Ships AI and full-stack products with Cursor and Claude Code; a working sample built in Laguna's brand.",
  // Private application page, never index it.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#000040",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${body.variable} ${display.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
