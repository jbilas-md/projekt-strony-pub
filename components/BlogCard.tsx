import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  post: {
    title: string;
    slug: string;
    publishedAt: string;
    excerpt: string;
    mainImage: string;
    author: {
      name: string;
      image: string;
    };
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const date = new Date(post.publishedAt).toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Zdjęcie główne */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={post.mainImage || '/images/placeholder.jpg'}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-nova-blue bg-nova-bg px-2 py-1 rounded">
            Aktualności
          </span>
          <span className="text-xs text-gray-400">{date}</span>
        </div>

        <h3 className="text-xl font-bold text-nova-dark group-hover:text-nova-blue transition-colors mb-3 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>

        {/* Autor */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-nova-blue/20">
            <Image
              src={post.author?.image || '/images/avatar-placeholder.jpg'}
              alt={post.author?.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs font-bold text-nova-dark">{post.author?.name}</span>
        </div>
      </div>
    </Link>
  );
}