import { getPosts } from "@/app/lib/sanity.queries";
import BlogCard from "@/components/BlogCard";

// To wymusza odświeżanie danych przy każdym przeładowaniu (wyłącza cache statyczny)
export const revalidate = 0;

export default async function BlogPage() {
    // Pobieramy posty
    const posts = await getPosts();

    // Debugowanie: sprawdź w terminalu VS Code (nie w przeglądarce!), czy dane przychodzą
    console.log("Pobrane posty z Sanity:", posts?.length);

    return (
        <main className="pt-32 pb-20 min-h-screen bg-nova-bg/20">
            <div className="max-w-7xl mx-auto px-4">
                {/* NAGŁÓWEK SEKCJI */}
                <div className="mb-12">
                    <span className="text-nova-blue font-bold uppercase tracking-widest text-sm">
                        Centrum Wiedzy
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-nova-dark mt-2">
                        Blog Novamedic
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-2xl">
                        Najnowsze informacje ze świata chirurgii, ortopedii i medycyny estetycznej. 
                        Dowiedz się więcej o nowoczesnych metodach leczenia.
                    </p>
                </div>

                {/* LISTA WPISÓW */}
                {posts && posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: any) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                        <p className="text-gray-500 font-medium">
                            Nie znaleziono jeszcze żadnych wpisów. 
                            Dodaj i opublikuj pierwszy post w Sanity Studio!
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}