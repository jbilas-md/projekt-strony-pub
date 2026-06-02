// app/zabiegi/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getProcedureBySlug, getAllProcedureSlugs } from "@/app/lib/sanity.queries";
import CustomPortableText from "@/components/CustomPortableText";
import FloatingBackButton from "@/components/FloatingBackButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const procedure = await getProcedureBySlug(slug);
  if (!procedure) {
    notFound();
  }

  return {
    title: `${procedure.title} - Novamedic Szczecin`,
    description: procedure.teaser || `Szczegółowe informacje o zabiegu ${procedure.title} w gabinecie Novamedic.`,
  };
}

export async function generateStaticParams() {
  const slugs: string[] = await getAllProcedureSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProcedurePage({ params }: Props) {
  const { slug } = await params;
  const procedure = await getProcedureBySlug(slug);

  if (!procedure) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <FloatingBackButton />
      
      <article className="max-w-4xl mx-auto px-4">
        {/* OBRAZEK GŁÓWNY (Identyczny styl jak na blogu) */}
        {procedure.imageUrl && (
          <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-10 shadow-xl">
            <img 
              src={procedure.imageUrl} 
              alt={procedure.title} 
              className="w-full h-full object-cover" 
            />
          </div>
        )}

        {/* NAGŁÓWEK I TYTUŁ ZABIEGU */}
        <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-black mb-8 text-nova-dark leading-tight">
            {procedure.title}
        </h1>
        
        <div className="flex items-center justify-between text-[13px] font-black uppercase tracking-wider py-3 border-b border-gray-200">
            {/* PO LEWEJ: Kategoria wyciągana dynamicznie ze schematu */}
            <div className="truncate max-w-[50%] text-left">
            <span className="text-gray-400 font-medium">Kategoria: </span>
            <span className="text-nova-blue">{procedure.category || 'Medycyna'}</span>
            </div>
            
            {/* PO PRAWEJ: Cena pobierana z Sanity (z fallbackiem, jeśli nie podano) */}
            <div className="text-right truncate max-w-[50%]">
            <span className="text-gray-400 font-medium">Cena: </span>
            <span className="text-nova-blue">
                {procedure.price ? `od ${procedure.price}` : 'Sprawdź cennik'}
            </span>
            </div>
        </div>
        </div>

        {/* ZAWARTOŚĆ I TREŚĆ BOGATA */}
        <div className="prose prose-lg max-w-none bg-white p-6 md:p-12 rounded-3xl shadow-sm">
          {procedure.teaser && (
            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed mb-10 border-l-4 border-nova-blue pl-4 italic">
              {procedure.teaser}
            </p>
          )}
          
          <div className="text-slate-700 leading-relaxed font-medium prose-headings:text-nova-dark prose-headings:font-black prose-headings:uppercase prose-strong:text-nova-dark prose-strong:font-black prose-ul:list-disc">
            <CustomPortableText value={procedure.content} />
          </div>
        </div>
      </article>
    </main>
  );
}