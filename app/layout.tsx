import "@/app/globals.css";
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
            <head>
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={inter.className}>
                <Header />
                {children}
                <Footer/>
            </body>
        </html>
    );
}