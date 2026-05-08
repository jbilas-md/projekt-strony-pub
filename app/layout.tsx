import "@/app/global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { defaultSEO } from "./lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = defaultSEO;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pl">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer/>
            </body>
        </html>
    );
}