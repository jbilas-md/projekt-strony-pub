export default {
  name: 'faqCategory',
  title: 'FAQ - Kategorie',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nazwa kategorii',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
  ],
};