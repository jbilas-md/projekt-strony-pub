import "@/app/globals.css";
import type { Metadata } from "next";
import { defaultSEO } from "./lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";

export const metadata: Metadata = defaultSEO;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pl">
            <head>
                <link rel="icon" type="image/png" href="/images/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="manifest" href="/images/site.webmanifest" />
            </head>
            <body>
                <AccessibilityProvider>
                    <ClientLayoutWrapper>
                        {children}
                    </ClientLayoutWrapper>
                </AccessibilityProvider>
            </body>
        </html>
    );
}