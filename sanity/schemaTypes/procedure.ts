// sanity/schemaTypes/procedure.ts

const categoryOptions = [
  { title: "Chirurgia", value: "Chirurgia" },
  { title: "Ortopedia", value: "Ortopedia" },
  { title: "Podologia", value: "Podologia" },
  { title: "Podochirurgia", value: "Podochirurgia" },
  { title: "Laseroterapia", value: "Laseroterapia" },
  { title: "Medycyna Estetyczna", value: "Medycyna Estetyczna" },
  { title: "Wazektomia", value: "Wazektomia" },
  { title: "Leczenie ran", value: "Leczenie ran" },
];

export default {
  name: 'procedure',
  title: 'Zabiegi i Usługi',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nazwa zabiegu',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (Adres URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategoria zabiegu',
      type: 'string',
      description: 'Wybierz specjalizację, do której należy ten zabieg.',
      options: {
        list: categoryOptions,
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Zdjęcie główne (Kafelki i Nagłówek)',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isFeatured',
      title: 'Najczęściej wybierane (Strona Główna)',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'teaser',
      title: 'Zajawka / Krótki opis',
      type: 'text',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Szczegółowy opis zabiegu',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normalny tekst', value: 'normal' },
            { title: 'Nagłówek H2', value: 'h2' },
            { title: 'Nagłówek H3', value: 'h3' },
          ],
          lists: [{ title: 'Kropki', value: 'bullet' }],
          marks: {
            decorators: [
              { title: 'Pogrubienie', value: 'strong' },
              { title: 'Kursywa', value: 'em' },
            ],
          },
        },
      ],
    },
    {
      name: 'pricingCategoryRef',
      title: 'Powiązana kategoria z cennika',
      type: 'reference',
      to: [{ type: 'pricingCategory' }],
      description: 'Wskaż kategorię z cennika (np. Medycyna Estetyczna lub Podochirurgia).',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'specificPricingName',
      title: 'Nazwa zabiegu w cenniku (opcjonalnie)',
      type: 'string',
      description: 'Jeśli w cenniku nazwa różni się od tytułu strony (np. strona to "Botox", a w cenniku masz "Botox - 1 okolica"), wpisz tutaj DOKŁADNĄ nazwę z cennika, aby pobrać właściwą cenę startową.',
    }
  ],
};