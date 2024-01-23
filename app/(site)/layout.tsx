import { Toaster } from "@/components/ui/toaster";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import InfoModal from "../providers/InfoModal";
import LoginProvider from "../providers/LoginProvider";
import NextAuthProvider from "../providers/NextAuthProvider";


export default function SiteLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
          <NextAuthProvider>
            <Navbar />
            <LoginProvider />
            <Toaster />
            {children}
            <Footer />
          </NextAuthProvider>
        </>
    );
  }