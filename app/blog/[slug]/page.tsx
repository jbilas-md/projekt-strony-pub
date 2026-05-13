import { getPostBySlug, urlFor } from "@/app/lib/sanity.queries";
import { notFound } from "next/navigation";
import CustomPortableText from "@/components/CustomPortableText";
import FloatingBackButton from "@/components/FloatingBackButton";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    // Wyciągamy bezpieczny link
    const mainImageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).url() : null;
    const authorImageUrl = post.author?.image ? urlFor(post.author.image).width(48).height(48).fit('crop').url() : null;

    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-20">
            <FloatingBackButton />
            <article className="max-w-4xl mx-auto px-4">
                {/* OBRAZEK GŁÓWNY */}
                {mainImageUrl && (
                    <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-10 shadow-xl">
                        <img src={mainImageUrl} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                )}

                <div className="mb-10">
                    <h1 className="text-3xl md:text-5xl font-black mb-8 text-nova-dark leading-tight">
                        {post.title}
                    </h1>
                    
                    <div className="flex items-center gap-4 py-6 border-y border-gray-200">
                        <div className="w-12 h-12 rounded-full bg-nova-blue/10 overflow-hidden flex-shrink-0">
                            {authorImageUrl ? (
                                <img src={authorImageUrl} alt={post.author.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center font-bold text-nova-blue">NM</div>
                            )}
                        </div>
                        <div>
                            <p className="font-black text-nova-dark leading-none">{post.author?.name}</p>
                            <p className="text-gray-500 text-xs font-bold uppercase mt-1">
                                {new Date(post.publishedAt).toLocaleDateString('pl-PL')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none bg-white p-6 md:p-12 rounded-3xl shadow-sm">
                    <CustomPortableText value={post.body} />
                </div>
            </article>
        </main>
    );
}