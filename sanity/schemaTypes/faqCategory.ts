import { defineType } from 'sanity';

export default defineType({
  name: 'faqCategory',
  title: 'FAQ - Kategorie',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nazwa kategorii',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
  ],
});