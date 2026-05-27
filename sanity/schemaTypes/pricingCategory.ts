// sanity/schemas/pricingCategory.ts

export default {
  name: 'pricingCategory',
  title: 'Cennik - Kategorie',
  type: 'document',
  fields: [
    {
      name: 'categoryName',
      title: 'Nazwa Kategorii',
      type: 'string',
      description: 'Np. Chirurgia Ogólna, Laseroterapia Medyczna',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Kolejność wyświetlania',
      type: 'number',
      description: 'Liczba określająca pozycję (np. 1 wyświetli się na samej górze, potem 2, 3...)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Pozycje w cenniku',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'pricingItem',
          title: 'Pozycja cennika',
          fields: [
            {
              name: 'name',
              title: 'Nazwa zabiegu / konsultacji',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Cena',
              type: 'string',
              description: 'Np. "250 zł", "od 400 zł", "600 zł - 1200 zł"',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
  orderings: [
    {
      title: 'Według kolejności wyświetlania',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};