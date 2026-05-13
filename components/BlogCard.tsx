import Link from 'next/link';
import { urlFor } from '@/app/lib/sanity.queries';

export default function BlogCard({ post }: { post: any }) {
    const author = post.author;

    // Generujemy URL - zwiększyłem jakość wyjściową, żeby obrazek nie był rozmazany
    const mainImageUrl = post.mainImage ? urlFor(post.mainImage).width(800).height(450).fit('crop').url() : '/images/placeholder.jpg';
    const authorImageUrl = author?.image ? urlFor(author.image).width(100).height(100).fit('crop').url() : null;

    const getInitials = (name: string) => {
        if (!name || typeof name !== 'string') return "NM";
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    // BlogCard.tsx

return (
    <article className="flex flex-col w-full max-w-md h-[600px] group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        {/* OBRAZEK GŁÓWNY - BEZ ZMIAN */}
        <Link href={`/blog/${post.slug}`} className="relative h-[220px] w-full overflow-hidden block shrink-0">
            <img src={mainImageUrl} alt={post.title} className="h-full w-full object-cover" />
        </Link>

        {/* KONTENER TREŚCI - Tutaj robimy porządek */}
        <div className="flex flex-col flex-grow p-6 min-h-0"> {/* min-h-0 jest kluczowe! */}
            
            <div className="flex-grow"> {/* Ten div bierze na siebie cały scroll/nadmiar tekstu */}
                {/* TAGI */}
                <div className="h-[26px] mb-3">{/* ... tagi ... */}</div>

                {/* TYTUŁ - 3 linie */}
                <div className="h-[75px] mb-3 overflow-hidden text-xl font-black leading-tight text-nova-dark">
                    <Link href={`/blog/${post.slug}`} className="line-clamp-3">{post.title}</Link>
                </div>

                {/* OPIS - 3 linie */}
                <div className="h-[72px] mb-4 overflow-hidden text-sm text-gray-600">
                    <p className="line-clamp-3">{post.excerpt}</p>
                </div>
            </div>

            {/* STOPKA - Wyjęta poza flex-grow, ze sztywnym marginesem */}
            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center h-[50px] shrink-0">
                <div className="flex items-center gap-3">
                    {/* AWATAR - Powrót do najprostszej metody, ale z klasą flex-none */}
                    <div className="w-9 h-9 rounded-full bg-nova-blue/10 overflow-hidden shrink-0 flex-none border border-gray-50">
                        {authorImageUrl ? (
                            <img 
                                src={authorImageUrl} 
                                alt="" 
                                className="w-full h-full object-cover display-block" 
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center font-bold text-nova-blue text-[10px]">{getInitials(author?.name)}</div>
                        )}
                    </div>
                    
                    <div className="min-w-0">
                        <p className="text-[13px] font-black text-nova-dark truncate leading-none mb-1">{author?.name}</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase truncate">{author?.role}</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
);
}