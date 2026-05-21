export const service = {
  name: 'service',
  title: 'Our Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Service Description',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug / URL Path',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }
  ],
}