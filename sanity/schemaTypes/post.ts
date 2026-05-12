// schemaTypes/post.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (końcówka adresu URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: {type: 'author'} // To tworzy relację
    }),
    defineField({
      name: 'mainImage',
      title: 'Zdjęcie główne',
      type: 'image',
      options: {
        hotspot: true, // pozwala na wycinanie zdjęcia w panelu
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data publikacji',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Krótki opis (zajawka)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Treść artykułu',
      type: 'blockContent', // to pozwoli na edytor wizualny (Rich Text)
    }),
  ],
})