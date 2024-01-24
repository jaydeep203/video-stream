import type { Metadata } from "next";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react";


export const metadata: Metadata = {
  title: "Video Stream",
  description: "Watch latest movies and series.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
