import { BLOG_POSTS, CATEGORIES } from "@/app/lib/blog-data";
import { constructMetadata } from "@/app/lib/seo";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { category: string } }) {
    const category = CATEGORIES.find(c => c.slug === params.category);
    return constructMetadata({
        title: `${category?.name || 'Kategoria'} - Blog Medyczny`,
        description: `Eksperckie artykuły z zakresu: ${category?.name}. Dowiedz się więcej o zabiegach w Novamedic Szczecin.`,
        slug: `blog/kategoria/${params.category}`,
    });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category: categorySlug } = await params; // <--- AWAIT
    const category = CATEGORIES.find(c => c.slug === categorySlug);
    const posts = BLOG_POSTS.filter(p => p.category === categorySlug);

    return (
        <main className="pt-32 pb-20 max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-black uppercase mb-8">Kategoria: <span className="text-nova-blue">{category?.name}</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                    <article key={post.id} className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                        <p className="text-gray-600 mb-6">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="text-nova-blue font-bold uppercase text-xs">Czytaj więcej →</Link>
                    </article>
                ))}
            </div>
        </main>
    );
}