// app/blog/page.tsx
import { blogSEO } from "@/app/lib/seo";
import { BLOG_POSTS } from "@/app/lib/blog-data";
import BlogClient from "./BlogClient";

// To jest serwerowe - Google to kocha
export const metadata = blogSEO;

export default function BlogPage() {
    return (
        <main>
            <div className="bg-white pt-40 pb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-nova-dark uppercase tracking-tight">
                    Baza Wiedzy <span className="text-nova-blue">Novamedic</span>
                </h1>
                <p className="mt-4 text-gray-500 max-w-xl mx-auto px-4">
                    Eksperckie artykuły medyczne przygotowane przez naszych specjalistów.
                </p>
            </div>

            {/* Cała interakcja (useState) jest zamknięta wewnątrz tego komponentu */}
            <BlogClient posts={BLOG_POSTS} />
        </main>
    );
}