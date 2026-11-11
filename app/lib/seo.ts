import { Metadata } from "next";

// Bazowy URL Twojej strony
const SITE_URL = "https://novamedic.pl";

export const defaultSEO: Metadata = {
    title: {
        template: "%s | Novamedic Szczecin",
        default: "Novamedic Szczecin | Gabinet Specjalistyczny dr Biłas",
    },
    description: "Nowoczesny gabinet specjalistyczny w Szczecinie. Profesjonalne zabiegi chirurgiczne, podochirurgiczne, wazektomia, podologia, laseroterapia i medycyna estetyczna.",
    generator: "Next.js",
    applicationName: "Novamedic",
    keywords: [
        "podolog szczecin",
        "chirurg szczecin",
        "wazektomia szczecin",
        "dr biłas",
        "podologia",
        "podochirurgia",
        "wrastający paznokieć",
        "medycyna estetyczna szczecin"
    ],
    authors: [{ name: "dr Jarosław Biłas" }],
    creator: "Jarosław Biłas",
    publisher: "Jarosław Biłas",
    metadataBase: new URL(SITE_URL),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "pl_PL",
        url: SITE_URL,
        siteName: "Novamedic Szczecin",
        images: [
            {
                url: "/images/og-image.jpg",
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
        // Uwaga: W Next.js ścieżki do plików w /public piszemy bez "/public"
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

/**
 * Funkcja pomocnicza do generowania SEO dla konkretnych wpisów na blogu
 */
export function constructMetadata({
    title,
    description,
    image,
    slug,
}: {
    title: string;
    description: string;
    image?: string;
    slug: string;
}): Metadata {
    return {
        title,
        description,
        alternates: {
            canonical: `/blog/${slug}`,
        },
        openGraph: {
            title: `${title} | Novamedic`,
            description,
            type: "article",
            url: `${SITE_URL}/blog/${slug}`,
            images: [
                {
                    url: image || "/images/og-blog.jpg",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image || "/images/og-blog.jpg"],
        },
    };
}