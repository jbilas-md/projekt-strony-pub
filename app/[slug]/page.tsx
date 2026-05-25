import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FAQAccordion from '@/components/FAQAccordion';
import BlogCard from '@/components/BlogCard'; // Import Twojego nowego komponentu

import { servicesData } from '../lib/services';
import { allPackages } from '../lib/packages';
import { FAQ_ITEMS } from '../lib/faq-data';
import { BLOG_POSTS } from '../lib/blog-data'; // Załóżmy, że tu spływają posty z Sanity

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  return { title: service ? `${service.title} - Novamedic Szczecin` : 'Oferta' };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) return notFound();

  const servicePackages = allPackages.filter(p => p.tags.includes(slug));
  const serviceFaqs = FAQ_ITEMS.filter(f => f.categorySlug === slug);
  const servicePosts = BLOG_POSTS.filter(post => post.category.toLowerCase() === slug.toLowerCase());

  const displayedFaqs = serviceFaqs.slice(0, 3);
  const displayedPosts = servicePosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="pt-32 lg:pt-48">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <nav className="flex gap-2 text-xs uppercase tracking-widest text-gray-400 mb-8 font-bold">
                <Link href="/" className="hover:text-nova-blue">Novamedic</Link>
                <span>/</span>
                <span className="text-nova-dark">Oferta</span>
              </nav>
              <h1 className="text-5xl lg:text-7xl font-black text-nova-dark mb-8 leading-[1.1]">{service.h1}</h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">{service.intro}</p>
              <a href="https://www.znanylekarz.pl/..." target="_blank" rel="noopener noreferrer" className="bg-nova-blue text-white px-10 py-5 rounded-full font-extrabold shadow-2xl hover:scale-105 transition-all inline-block">Umów wizytę online</a>
            </div>
            <div className="relative h-[500px] lg:h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-nova-bg">
              <Image src={service.image} alt={service.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 600px" />
            </div>
          </div>
        </section>

        {/* DETAILS & BENEFITS */}
        <section className="bg-nova-bg/40 py-24 rounded-[5rem]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-50">
              <h2 className="text-3xl font-black mb-8 text-nova-dark">Dlaczego Novamedic?</h2>
              <ul className="space-y-6">
                {service.benefits.map((b: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-lg font-bold text-nova-dark">
                    <span className="w-6 h-6 bg-nova-blue text-white rounded-full flex items-center justify-center text-xs mt-1 shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-8 text-nova-dark">O zabiegu</h2>
              <p className="text-gray-600 text-lg leading-loose font-medium">{service.details}</p>
            </div>
          </div>
        </section>

        {/* PAKIETY ZABIEGOWE */}
        <section className="max-w-7xl mx-auto px-4 py-32">
          <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter text-nova-dark">Pakiety zabiegowe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto items-stretch">
            {servicePackages.map((pkg, i) => (
              <div
                key={i}
                className={`flex flex-col bg-white p-10 rounded-[3rem] border transition-all duration-500 relative ${pkg.isPromoted
                  ? 'border-nova-blue/20 scale-105 z-10 shadow-[35px_35px_20px_-15px_rgba(8,112,184,0.15)]'
                  : 'border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]'
                  }`}
              >
                {pkg.isPromoted && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-nova-blue text-white text-[10px] font-black px-6 py-2 rounded-full tracking-[0.2em] shadow-xl uppercase">
                    Rekomendowany wybór
                  </div>
                )}
                <h3 className="text-2xl font-black mb-2 text-nova-dark">{pkg.name}</h3>
                <div className="text-4xl font-black text-nova-blue mb-8">{pkg.price}</div>

                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-500 font-medium text-sm">
                      <div className="w-1.5 h-1.5 bg-nova-blue rounded-full mt-2 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 font-black rounded-2xl transition-all active:scale-95 mt-auto ${pkg.isPromoted ? 'bg-nova-blue text-white shadow-lg' : 'bg-nova-dark text-white hover:bg-nova-blue'}`}>
                  Wybieram ten pakiet
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* LŻEJSZA SEKCJA FAQ - Zmiana na tło jasne bg-nova-bg */}
        {displayedFaqs.length > 0 && (
          <section className="bg-nova-bg py-32 rounded-[5rem]">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-black mb-16 text-center text-nova-dark uppercase tracking-tighter">
                Pytania i <span className="text-nova-blue">odpowiedzi</span>
              </h2>
              <FAQAccordion items={displayedFaqs} />
              
              {serviceFaqs.length > 3 && (
                <div className="text-center mt-12">
                  <Link href="/faq" className="inline-block bg-white hover:bg-gray-50 border border-gray-200 text-nova-dark font-black px-8 py-4 rounded-full shadow-sm transition-all uppercase tracking-wider text-xs">
                    Pokaż wszystkie pytania
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

        {/* DYNAMICZNA BAZA WIEDZY - Zintegrowana z BlogCard z Sanity */}
        {displayedPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 py-32">
            <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter text-nova-dark">
              Powiązana <span className="text-nova-blue">Baza Wiedzy</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {displayedPosts.map((post) => (
                <BlogCard key={post._id || post.id} post={post} />
              ))}
            </div>

            {servicePosts.length > 3 && (
              <div className="text-center mt-16">
                <Link href="/blog" className="inline-block bg-nova-blue text-white font-black px-10 py-5 rounded-full shadow-xl hover:bg-nova-dark transition-all uppercase tracking-wider text-xs">
                  Zobacz wszystkie artykuły
                </Link>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}