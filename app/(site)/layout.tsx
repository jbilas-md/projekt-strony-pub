import "@/app/global.css";
import type { Metadata } from "next";;
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32"> {/* pt-32 kompensuje fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  );
}