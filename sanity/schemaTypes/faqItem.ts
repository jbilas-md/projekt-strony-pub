export default {
  name: 'faqItem',
  title: 'FAQ - Pytania i Odpowiedzi',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Pytanie (H3/H4 dla SEO)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Odpowiedź (Bogaty tekst z formatowaniem pod SEO)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normalny', value: 'normal' }],
          lists: [
            { title: 'Lista punktowa (Najlepsza dla Google)', value: 'bullet' },
            { title: 'Lista numerowana', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Pogrubienie (Słowa kluczowe)', value: 'strong' },
              { title: 'Kursywa', value: 'em' }
            ]
          }
        }
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategoria FAQ',
      type: 'reference',
      to: [{ type: 'faqCategory' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Kolejność wyświetlania',
      type: 'number',
      description: 'Im niższa cyfra (np. 1, 2, 3), tym wyżej pojawi się pytanie.',
      initialValue: 0
    }
  ],
};