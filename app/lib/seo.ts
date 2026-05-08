import { Metadata } from "next";

export const defaultSEO: Metadata = {
    title: {
        template: "%s | Novamedic Szczecin",
        default: "Novamedic Szczecin | Gabinet Specjalistyczny dr Biłas",
    },
    description: "Nowoczesny gabinet specjalistyczny w Szczecinie. Profesjonalne zabiegi chirurgiczne, podochirurgiczne, wazektomia, podologia, laseroterapia i medycyna estetyczna.",
    generator: "Next.js",
    applicationName: "Novamedic",
    keywords: ["podolog szczecin", "chirurg szczecin", "wazektomia szczecin", "dr biłas", "podologia", "podochirurgia", "wrastający paznokieć"],
    authors: [{ name: "dr Jarosław Biłas" }],
    creator: "Jarosław Biłas",
    publisher: "Jarosław Biłas",
    metadataBase: new URL("https://novamedic.pl"), // Ważne dla absolutnych linków OG
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "pl_PL",
        url: "https://novamedic.pl",
        siteName: "Novamedic Szczecin",
        images: [
            {
                url: "/images/og-image.jpg", // Stwórz ten obrazek (1200x630)
                width: 1200,
                height: 630,
                alt: "Gabinet Novamedic Szczecin",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Novamedic Szczecin | Gabinet dr Biłas",
        description: "Nowoczesna chirurgia i medycyna estetyczna.",
        images: ["/images/og-image.jpg"],
    },
    icons: {
        icon: "/public/favicon.ico", // Standardowa ikonka
        shortcut: "/public/favicon.ico",
        apple: "/apple-touch-icon.png", // Dodaj ten plik (180x180) do /public
    },
};