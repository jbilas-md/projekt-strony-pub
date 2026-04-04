import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import Footer from '@/components/Footer'; 
import { servicesData, Package, FAQItem, BlogPost } from '../lib/services';

// 1. POPRAWKA DLA METADATA: Dodajemy await przed params.slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug as keyof typeof servicesData];
  
  return {
    title: service ? `${service.title} - Novamedic Warszawa` : 'Oferta - Novamedic',
  };
}

// 2. POPRAWKA DLA KOMPONENTU: Komponent musi być async i robić await params
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug as keyof typeof servicesData];

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-nova-bg font-sans">
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
              <h1 className="text-5xl lg:text-7xl font-black text-nova-dark mb-8 leading-[1.1]">
                {service.h1}
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                {service.intro}
              </p>
              <a href="https://www.znanylekarz.pl/..." target="_blank" className="bg-nova-blue text-white px-10 py-5 rounded-full font-extrabold shadow-2xl hover:scale-105 transition-all inline-block">
                Umów wizytę online
              </a>
            </div>
            <div className="relative h-[500px] lg:h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image src={service.image} alt={service.title} fill className="object-cover" priority />
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

        {/* PAKIETY */}
        <section className="max-w-7xl mx-auto px-4 py-32">
          <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter text-nova-dark">Pakiety zabiegowe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {service.packages.map((pkg: Package, i: number) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-50 hover:border-nova-blue transition-all">
                <h3 className="text-2xl font-black mb-2">{pkg.name}</h3>
                <div className="text-4xl font-black text-nova-blue mb-8">{pkg.price}</div>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-3 text-gray-500 font-medium">
                      <div className="w-1.5 h-1.5 bg-nova-accent rounded-full" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-nova-dark text-white font-black rounded-2xl hover:bg-nova-blue transition-colors">Wybieram ten pakiet</button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-nova-dark text-white py-32 rounded-[5rem]">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-black mb-16 text-center">Częste pytania</h2>
            <div className="space-y-10">
              {service.faq.map((item: FAQItem, i: number) => (
                <div key={i}>
                  <h4 className="text-xl font-bold mb-4 text-nova-light">{item.q}</h4>
                  <p className="text-gray-400 leading-relaxed text-lg">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section className="max-w-7xl mx-auto px-4 py-32">
          <h2 className="text-xl font-black mb-10 uppercase tracking-widest text-nova-light">Baza wiedzy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.blog.map((post: BlogPost, i: number) => (
              <Link key={i} href={post.link} className="bg-white p-8 rounded-[2.5rem] flex items-center justify-between group hover:bg-nova-blue transition-all shadow-lg">
                <span className="text-xl font-black text-nova-dark group-hover:text-white">{post.title}</span>
                <span className="text-2xl group-hover:text-white transition-transform group-hover:translate-x-3">→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}