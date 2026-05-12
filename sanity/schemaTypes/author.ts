// schemaTypes/author.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Autorzy',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Imię i Nazwisko', type: 'string'}),
    defineField({name: 'role', title: 'Rola/Specjalizacja', type: 'string'}),
    defineField({name: 'image', title: 'Zdjęcie', type: 'image', options: {hotspot: true}}),
    defineField({name: 'bio', title: 'Bio', type: 'text'}),
  ],
})