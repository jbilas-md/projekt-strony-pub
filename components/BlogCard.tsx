// app/components/BlogCard.tsx
import Link from 'next/link';
import { urlFor } from '@/app/lib/sanity.queries';

export default function BlogCard({ post }: { post: any }) {
    const author = post.author;

    // Generujemy URL z zachowaniem wysokiej jakości
    const mainImageUrl = post.mainImage ? urlFor(post.mainImage).width(800).height(450).fit('crop').url() : '/images/placeholder.jpg';
    const authorImageUrl = author?.image ? urlFor(author.image).width(100).height(100).fit('crop').url() : null;

    const getInitials = (name: string) => {
        if (!name || typeof name !== 'string') return "NM";
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    // Bezpieczne wyciąganie nazwy pierwszej kategorii z Sanity
    const displayCategory = Array.isArray(post.categories) && post.categories[0]
        ? (typeof post.categories[0] === 'object' ? post.categories[0].title : post.categories[0])
        : (post.category ? (typeof post.category === 'object' ? post.category.title : post.category) : 'Medycyna');

    return (
        <article className="flex flex-col w-full max-w-md h-[600px] group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {/* Odnośnik obrazka głównego */}
            <Link href={`/blog/${post.slug?.current || post.slug}`} className="relative h-[220px] w-full overflow-hidden block shrink-0">
                <img src={mainImageUrl} alt={post.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </Link>

            {/* KONTENER TREŚCI */}
            <div className="flex flex-col flex-grow p-6 min-h-0">
                
                <div className="flex-grow">
                    {/* ZMODYFIKOWANY NAGŁÓWEK KARTY */}
                    <div className="h-[26px] mb-3 flex items-center justify-between text-[11px] font-black uppercase tracking-wider">
                        {/* DATA PO LEWEJ STRONIE */}
                        {post.publishedAt ? (
                            <span className="text-gray-400 font-medium shrink-0">
                                {new Date(post.publishedAt).toLocaleDateString('pl-PL')}
                            </span>
                        ) : (
                            <div /> /* Placeholder utrzymujący flexbox w ryzach */
                        )}

                        {/* KATEGORIA PO PRAWEJ STRONIE Z SZARYM PRZEDROSTKIEM */}
                        <div className="text-right truncate max-w-[65%]">
                            <span className="text-gray-400 font-medium">Kategoria: </span>
                            <span className="text-nova-blue">{displayCategory}</span>
                        </div>
                    </div>

                    {/* Tytuł artykułu */}
                    <div className="h-[75px] mb-3 overflow-hidden text-xl font-black leading-tight text-nova-dark">
                        <Link href={`/blog/${post.slug?.current || post.slug}`} className="line-clamp-3 hover:text-nova-blue transition-colors">
                            {post.title}
                        </Link>
                    </div>

                    {/* Opis / Zajawka */}
                    <div className="h-[72px] mb-4 overflow-hidden text-sm text-gray-600">
                        <p className="line-clamp-3">{post.excerpt}</p>
                    </div>
                </div>

                {/* STOPKA Z AUTOREM */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center shrink-0" style={{ height: '67px' }}>
                    <div className="flex items-center gap-3 min-w-0 w-full">
                        {/* AWATAR */}
                        <div className="w-14 h-14 rounded-full bg-nova-blue/10 overflow-hidden shrink-0 flex-none border border-gray-50">
                            {authorImageUrl ? (
                                <img 
                                    src={authorImageUrl} 
                                    alt="" 
                                    className="w-full h-full object-cover block" 
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center font-bold text-nova-blue text-xs">
                                    {getInitials(author?.name)}
                                </div>
                            )}
                        </div>
                        
                        <div className="min-w-0 flex-grow">
                            <p className="text-[13px] font-black text-nova-dark truncate leading-none mb-3">{author?.name}</p>
                            <p className="text-[10px] text-gray-500 font-bold uppercase truncate leading-tight">
                                {author?.role}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}