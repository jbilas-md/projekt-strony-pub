import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity.queries'; // Zaraz dodamy tę funkcję pomocniczą

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold text-nova-dark mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-nova-dark mt-8 mb-3">{children}</h3>,
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-5">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-nova-blue pl-4 italic my-6 text-lg text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">{children}</ul>,
  },
  types: {
    image: ({ value }) => (
      <div className="relative w-full h-[400px] my-10 rounded-2xl overflow-hidden">
        <Image
          src={urlFor(value).url()}
          alt="Zdjęcie w artykule"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
};

export default function CustomPortableText({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}