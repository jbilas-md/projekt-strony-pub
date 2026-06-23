// app/[slug]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FAQAccordion from '@/components/FAQAccordion';
import BlogCard from '@/components/BlogCard';

import { servicesData } from '../lib/services';
import { allPackages } from '../lib/packages';
// Zmiana: Importujemy nową funkcję pobierania zabiegów z Sanity
import { getPosts, getProceduresByCategory } from '../lib/sanity.queries';

// Słownik mapujący slugi z adresu URL na wartości kategorii zdefiniowane w Sanity
const slugToCategoryMap: Record<string, string> = {
  'chirurgia': 'Chirurgia',
  'ortopedia': 'Ortopedia',
  'podologia': 'Podologia',
  'podochirurgia': 'Podochirurgia',
  'laseroterapia': 'Laseroterapia',
  'medycyna-estetyczna': 'Medycyna Estetyczna',
  'wazektomia': 'Wazektomia',
  'leczenie-ran': 'Leczenie ran',
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  return { title: service ? `${service.title} - Specjalistyczna Opieka Medyczna Novamedic` : 'Oferta' };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) return notFound();

  // 1. Mapowanie sluga na kategorię Sanity i pobranie zabiegów bezpośrednio z CMS
  const sanityCategoryName = slugToCategoryMap[slug] || '';
  const sanityProcedures = sanityCategoryName
    ? await getProceduresByCategory(sanityCategoryName)
    : [];

  // Filtrowanie zasobów lokalnych
  const servicePackages = allPackages.filter(p => p.tags.includes(slug));

  // Pobranie świeżych artykułów ze Sanity CMS
  const allPosts = await getPosts();

  // Filtrowanie artykułów pod kątem dopasowania do sluga bieżącej usługi
  const servicePosts = allPosts.filter((post: any) => {
    if (Array.isArray(post.categories)) {
      return post.categories.some((cat: any) => {
        const catSlug = typeof cat === 'object' ? cat?.slug?.current || cat?.current || cat?._ref : cat;
        return typeof catSlug === 'string' && catSlug.toLowerCase() === slug.toLowerCase();
      });
    }

    const categoryRaw = post.category;
    const postCategory = categoryRaw && typeof categoryRaw === 'object' && 'current' in categoryRaw
      ? categoryRaw.current
      : categoryRaw;

    return typeof postCategory === 'string' && postCategory.toLowerCase() === slug.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-white font-sans text-nova-dark antialiased">
      <main className="pt-32 lg:pt-48">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <nav className="flex gap-2 text-xs uppercase tracking-widest text-gray-400 mb-8 font-bold">
                <Link href="/" className="hover:text-nova-blue">Novamedic</Link>
                <span>/</span>
                <span className="text-nova-dark">Zakres usług</span>
              </nav>
              <h1 className="text-4xl lg:text-6xl font-black text-nova-dark mb-8 tracking-tight leading-[1.1]">{service.h1}</h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">{service.intro}</p>
              <a href="https://www.znanylekarz.pl/..." target="_blank" rel="noopener noreferrer" className="bg-nova-blue text-white px-10 py-5 rounded-full font-extrabold shadow-md hover:bg-nova-dark transition-all inline-block">Rejestracja wizyt online</a>
            </div>
            <div className="relative h-[450px] lg:h-[550px] rounded-[3rem] overflow-hidden shadow-sm border-4 border-nova-bg">
              <Image src={service.image} alt={service.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 600px" />
            </div>
          </div>
        </section>

        {/* DLACZEGO NOVAMEDIC & CO WARTO WIEDZIEĆ */}
        <section className="bg-nova-bg/30 py-12 lg:py-24 rounded-[4rem]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100/60 flex flex-col justify-start self-start">
              <h2 className="text-2xl font-black mt-0 mb-8 text-nova-dark uppercase tracking-tight">Dlaczego <span className="text-nova-blue">Novamedic</span>?</h2>
              <ul className="space-y-5">
                {service.clinicalStandards.map((standard: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-base font-semibold text-slate-700">
                    <span className="w-5 h-5 bg-nova-blue/10 text-nova-blue rounded-full flex items-center justify-center text-xs mt-1 shrink-0 font-bold">✓</span>
                    {standard}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-start p-10 pt-10 self-start">
              <h2 className="text-2xl font-black mt-0 mb-6 text-nova-dark uppercase tracking-tight">Co warto wiedzieć?</h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">{service.details}</p>
            </div>
          </div>
        </section>

        {/* SZCZEGÓŁOWY ZAKRES ZABIEGÓW */}
        {sanityProcedures && sanityProcedures.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 py-28">
            <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tight text-nova-dark">
              Wykonywane <span className="text-nova-blue">procedury zabiegowe</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {sanityProcedures.map((procedure: any) => {
                const hasContent = procedure.content && procedure.content.length > 0;
                const cardClasses = 'block bg-white border border-gray-100 p-8 rounded-3xl shadow-sm transition-all ' + (hasContent ? 'hover:border-nova-blue/30 hover:shadow-md group' : 'opacity-90 cursor-not-allowed');

                return hasContent ? (
                  <Link
                    key={procedure._id}
                    href={`/zabiegi/${procedure.slug?.current}`}
                    className={cardClasses}
                  >
                    <h3 className="text-xl font-black text-nova-dark mb-3 leading-snug group-hover:text-nova-blue transition-colors">
                      {procedure.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                      {procedure.teaser}
                    </p>
                    <div className="mt-4 text-xs font-bold text-nova-blue uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-4px] group-hover:translate-x-0">
                      Szczegóły zabiegu <span>→</span>
                    </div>
                  </Link>
                ) : (
                  <div key={procedure._id} className={cardClasses}>
                    <h3 className="text-xl font-black text-nova-dark mb-3 leading-snug">
                      {procedure.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                      {procedure.teaser}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* PAKIETY ZABIEGOWE */}
        {servicePackages.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 py-24 border-t border-gray-50">
            <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tight text-nova-dark">Pakiety zabiegowe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto items-stretch">
              {servicePackages.map((pkg, i) => (
                <div
                  key={i}
                  className={`flex flex-col bg-white p-10 rounded-[2.5rem] border transition-all duration-500 relative ${pkg.isPromoted
                    ? 'border-nova-blue/20 scale-105 z-10 shadow-[20px_20px_40px_rgba(8,112,184,0.08)]'
                    : 'border-gray-100 shadow-sm'
                    }`}
                >
                  {pkg.isPromoted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nova-blue text-white text-[9px] font-black px-5 py-1.5 rounded-full tracking-wider uppercase">
                      Rekomendowany wariant
                    </div>
                  )}
                  <h3 className="text-xl font-black mb-2 text-nova-dark">{pkg.name}</h3>
                  <div className="text-3xl font-black text-nova-blue mb-8">{pkg.price}</div>
                  <ul className="space-y-4 mb-10 flex-1">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-500 font-medium text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 bg-nova-blue rounded-full mt-2 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 font-black rounded-xl text-sm transition-all ${pkg.isPromoted ? 'bg-nova-blue text-white shadow-md' : 'bg-nova-dark text-white hover:bg-nova-blue'}`}>
                    Wybierz pakiet
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BLOG / BAZA WIEDZY */}
        {servicePosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 py-28">
            <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tight text-nova-dark">
              Dowiedz się więcej <span className="text-nova-blue">- nasza baza wiedzy</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {servicePosts.slice(0, 3).map((post: any) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {servicePosts.length > 3 && (
              <div className="text-center mt-16">
                <Link href="/blog" className="inline-block bg-nova-blue text-white font-black px-10 py-4 rounded-full shadow-md hover:bg-nova-dark transition-all text-xs uppercase tracking-wider">
                  Przejdź do bazy wiedzy
                </Link>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}