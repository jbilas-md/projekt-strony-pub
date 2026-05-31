// sanity/schemas/procedure.ts
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
      description: 'Zaznacz, aby ten zabieg pojawił się w sekcji kafelków na stronie głównej.',
      initialValue: false,
    },
    {
      name: 'teaser',
      title: 'Zajawka / Krótki opis',
      type: 'text',
      description: 'Krótkie wprowadzenie używane na listach zabiegów lub w meta tagach.',
      rows: 3,
    },
    {
      name: 'content',
      title: 'Szczegółowy opis zabiegu',
      type: 'array',
      description: 'Pełna treść strony zabiegowej (tekst, nagłówki, pogrubienia).',
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
  ],
};