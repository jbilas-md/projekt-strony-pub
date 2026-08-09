// sanity/schemaTypes/pricingCategory.ts

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
              title: 'Cena podstawowa / pojedyncza',
              type: 'string',
              description: 'Np. "250 zł" lub "od 400 zł". Używaj tylko, gdy zabieg NIE posiada wariantów cenowych.',
            },
            {
              name: 'description',
              title: 'Opcjonalny opis / uwagi',
              type: 'string',
              description: 'Dodatkowe wyjaśnienie, np. "Cena zależy od wielkości zmiany".',
            },
            /* NOWE POLE: Warianty cenowe */
            {
              name: 'variants',
              title: 'Warianty cenowe (opcjonalnie)',
              type: 'array',
              description: 'Użyj, jeśli cena zależy od ilości, obszaru lub wariantu (np. "do 10 sztuk - 600 zł").',
              of: [
                {
                  type: 'object',
                  name: 'pricingVariant',
                  title: 'Wariant',
                  fields: [
                    {
                      name: 'variantName',
                      title: 'Nazwa wariantu',
                      type: 'string',
                      description: 'Np. "do 10 sztuk", "10–20 sztuk", "powyżej 20 sztuk"',
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: 'price',
                      title: 'Cena wariantu',
                      type: 'string',
                      description: 'Np. "600 zł", "800 zł", "od 1000 zł"',
                      validation: (Rule: any) => Rule.required(),
                    },
                  ],
                },
              ],
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