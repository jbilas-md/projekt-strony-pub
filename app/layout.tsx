import "@/app/global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { defaultSEO } from "./lib/seo";

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
                {children}
            </body>
        </html>
    );
}