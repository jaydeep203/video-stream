import type { Metadata } from "next";
import "./globals.css";


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
      </body>
    </html>
  );
}
