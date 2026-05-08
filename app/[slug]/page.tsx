import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import FAQAccordion from '@/components/FAQAccordion';

// Importujemy dane z nowych, osobnych plików
import { servicesData } from '../lib/services';
import { allPackages } from '../lib/packages';
import { allFaqs } from '../lib/faqs';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  return { title: service ? `${service.title} - Novamedic Szczecin` : 'Oferta' };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) return notFound();

  // FILTROWANIE DANYCH
  const servicePackages = allPackages.filter(p => p.tags.includes(slug));
  const serviceFaqs = allFaqs.filter(f => f.category === slug);

  return (
    <div className="min-h-screen bg-nova-bg font-sans">
      <main className="pt-32 lg:pt-48">

        {/* HERO (bez zmian) */}
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
              <a href="https://www.znanylekarz.pl/..." target="_blank" className="bg-nova-blue text-white px-10 py-5 rounded-full font-extrabold shadow-2xl hover:scale-105 transition-all inline-block">Umów wizytę online</a>
            </div>
            <div className="relative h-[500px] lg:h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image src={service.image} alt={service.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 600px" />
            </div>
          </div>
        </section>

        {/* DETAILS & BENEFITS */}
        <section className="bg-white py-24 rounded-[5rem] shadow-inner">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="bg-nova-bg p-12 rounded-[3rem]">
              <h2 className="text-3xl font-black mb-8 text-nova-dark">Dlaczego Novamedic?</h2>
              <ul className="space-y-6">
                {service.benefits.map((b: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-lg font-bold text-nova-dark">
                    <span className="w-6 h-6 bg-nova-blue text-white rounded-full flex items-center justify-center text-xs mt-1">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-8">O zabiegu</h2>
              <p className="text-gray-600 text-lg leading-loose">{service.details}</p>
            </div>
          </div>
        </section>

        {/* PAKIETY ZABIEGOWE - ZWĘŻONE Z EFEKTEM PRZYBLIŻENIA */}
        <section className="max-w-7xl mx-auto px-4 py-32">
          <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter text-nova-dark">Pakiety zabiegowe</h2>

          {/* Zmiana: max-w-4xl zamiast 5xl zwęża siatkę kafelków o ok. 25% */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto items-stretch">
            {servicePackages.map((pkg, i) => (
              <div
                key={i}
                className={`flex flex-col bg-white p-10 rounded-[3rem] border transition-all duration-500 relative ${pkg.isPromoted
                  ? 'border-nova-blue/20 scale-105 z-10 shadow-[35px_35px_20px_-15px_rgba(8,112,184,0.3)]'
                  : 'border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]'
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
                      <div className="w-1.5 h-1.5 bg-nova-accent rounded-full mt-2 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 font-black rounded-2xl transition-all active:scale-95 mt-auto ${pkg.isPromoted ? 'bg-nova-blue text-white shadow-lg' : 'bg-nova-dark text-white hover:bg-nova-blue'
                  }`}>
                  Wybieram ten pakiet
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ - Zaciągane z faqs.ts */}
        <section className="bg-nova-dark text-white py-32 rounded-[5rem]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-black mb-16 text-center text-nova-light uppercase tracking-tighter">Pytania i odpowiedzi</h2>
            <FAQAccordion items={serviceFaqs} />
          </div>
        </section>

        {/* BLOG */}
        <section className="max-w-7xl mx-auto px-4 py-32">
          <h2 className="text-xl font-black mb-10 uppercase tracking-widest text-nova-blue">Baza wiedzy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.blog.map((post: any, i: number) => (
              <Link key={i} href={post.link} className="bg-white p-8 rounded-[2.5rem] flex items-center justify-between group hover:bg-nova-blue transition-all shadow-lg">
                <span className="text-xl font-black text-nova-dark group-hover:text-white">{post.title}</span>
                <span className="text-2xl group-hover:text-white transition-transform group-hover:translate-x-3">→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}