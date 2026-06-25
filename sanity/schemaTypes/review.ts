export default {
  name: 'review',
  title: 'Opinia pacjenta',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Autor opinii',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Ocena',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
    {
      name: 'source',
      title: 'Źródło opinii',
      type: 'string',
      options: {
        list: [
          { title: 'ZnanyLekarz', value: 'ZnanyLekarz' },
          { title: 'Google', value: 'Google' },
          { title: 'Inne', value: 'Inne' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'comment',
      title: 'Komentarz',
      type: 'text',
      rows: 5,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Data opinii',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isVisible',
      title: 'Widoczna na stronie',
      type: 'boolean',
      initialValue: true,
      description: 'Wyłącz jeśli chcesz zachować opinię w systemie, ale jeszcze jej nie publikować.',
    },
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'source',
      date: 'date',
    },
    prepare(selection: any) {
      const { title, subtitle, date } = selection;
      return {
        title,
        subtitle,
        media: null,
        description: date,
      };
    },
  },
};
